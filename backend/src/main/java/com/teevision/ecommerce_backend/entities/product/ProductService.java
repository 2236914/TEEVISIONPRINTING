package com.teevision.ecommerce_backend.entities.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teevision.ecommerce_backend.entities.product.dto.*;
import com.teevision.ecommerce_backend.entities.product.projections.AdminProductsProjection;
import com.teevision.ecommerce_backend.entities.product.projections.HomePageProductsProjection;
import com.teevision.ecommerce_backend.entities.product.projections.ProductListProjection;
import com.teevision.ecommerce_backend.entities.product.projections.ProductViewProjection;
import com.teevision.ecommerce_backend.entities.product.projections.RequestAQuoteProjection;
import com.teevision.ecommerce_backend.entities.tag.TagService;
import com.teevision.ecommerce_backend.enums.ClothePackagingType;
import com.teevision.ecommerce_backend.entities.fit.JpaFitRepository;
import com.teevision.ecommerce_backend.entities.priceSettings.JpaPriceSettingsRepository;
import com.teevision.ecommerce_backend.entities.priceSettings.PriceSettings;
import com.teevision.ecommerce_backend.entities.product.exceptions.QuantityIsInRestrictionRangeException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductService {

    private final JpaFitRepository jpaFitRepository;
    private final JpaProductRepository productRepository;
    private final JpaPriceSettingsRepository priceSettingsRepository;
    private final TagService tagService;

    public Collection<Product> getAllProducts(String categorySlug, String brandSlugs, String search) {

        if (brandSlugs.isBlank()) {
            if (categorySlug.equals("all")) {
                if (search.isBlank()) {
                    return productRepository.findAllShownProducts();
                } else {
                    return productRepository.findAllShownProductsByNameContainingIgnoreCase(search);
                }
            } else {
                if (search.isBlank()) {
                    return productRepository.findAllShownProductsByCategorySlug(categorySlug);
                } else {
                    return productRepository.findAllShownProductsByCategorySlugAndNameContainingIgnoreCase(categorySlug, search);
                }
            }
        } else {
            List<String> brandSlugsList = Arrays.stream(brandSlugs.split(",")).toList();
            if (categorySlug.equals("all")) {
                if (search.isBlank()) {
                    return productRepository.findAllShownProductsByAllBrandSlugs(brandSlugsList);
                } else {
                    return productRepository.findAllShownProductsByBrandSlugsAndNameContainingIgnoreCase(brandSlugsList, search);
                }
            } else {
                if (search.isBlank()) {
                    return productRepository.findAllShownProductsByCategorySlugAndBrandSlug(categorySlug, brandSlugsList);
                } else {
                    return productRepository.findAllShownProductsByCategorySlugAndBrandSlugsAndNameContainingIgnoreCase(categorySlug, brandSlugsList, search);
                }
            }
        }
    }

    @Cacheable("requestAQuoteProductsCache")
    public Collection<ProductRequestAQuoteResponse> getAllRequestAQuoteProducts() {
        List<RequestAQuoteProjection> rows = productRepository.findAllRequestAQuoteProducts();
        ObjectMapper mapper = new ObjectMapper();

        return rows.stream().map(r -> {
            List<String> sizes;
            try {
                if (r.getAvailableSizesJson() == null || r.getAvailableSizesJson().isBlank()) {
                    sizes = List.of();
                } else {
                    List<Map<String, Object>> sizeItems = mapper.readValue(
                      r.getAvailableSizesJson(),
                      new TypeReference<List<Map<String, Object>>>() {}
                    );
                    sizes = sizeItems.stream()
                      .filter(item -> {
                          Object val = item.get("value");
                          if (val instanceof Boolean) return (Boolean) val;
                          if (val instanceof String) return Boolean.parseBoolean((String) val);
                          if (val instanceof Number) return ((Number) val).intValue() != 0;
                          return false;
                      })
                      .map(item -> Objects.toString(item.get("name"), ""))
                      .filter(name -> !name.isBlank())
                      .collect(Collectors.toList());
                }
            } catch (Exception e) {
                sizes = List.of();
            }

            List<ProductItemOnListColor> colors = parseColorsJson(r.getColorsJson(), mapper);

            return new ProductRequestAQuoteResponse(
              r.getId(),
              r.getName(),
              sizes,
              colors
            );
        }).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Cacheable("productListCache")
    public Collection<ProductItemOnListResponseDto> getAllProductItemOnListProducts(String categorySlug) {
        List<ProductListProjection> rows;
        if (categorySlug == null || categorySlug.equals("all") || categorySlug.isBlank()) {
            rows = productRepository.findAllShownProductsWithFirstImage();
        } else {
            rows = productRepository.findAllShownProductsByCategorySlugWithFirstImage(categorySlug);
        }

        ObjectMapper mapper = new ObjectMapper();

        return rows.stream().map(r -> {
            List<ProductItemOnListColor> colors = parseColorsJson(r.getFirstFiveColorsJson(), mapper);
            return new ProductItemOnListResponseDto(
              r.getId(),
              r.getName(),
              r.getSlug(),
              r.getBrandSlug() != null ? r.getBrandSlug() : "",
              r.getFitSlugs() != null  ? Arrays.stream(r.getFitSlugs().split(",")).toList() : List.of(),
              r.getCategorySlugs() != null  ? Arrays.stream(r.getCategorySlugs().split(",")).toList() : List.of(),
              colors,
              r.getFirstImageUrl(),
              r.getTagNames() != null  ? Arrays.stream(r.getTagNames().split(",")).toList() : List.of(),
              r.getColorsCount() != null ? r.getColorsCount() : 0
            );
        }).collect(Collectors.toList());
    }

    private List<ProductItemOnListColor> parseColorsJson(String json, ObjectMapper mapper) {
        if (json == null || json.isBlank()) {
            return List.of();
        }
        try {
            return mapper.readValue(json, new TypeReference<List<ProductItemOnListColor>>() {});
        } catch (Exception e) {
            // on parse error return empty list (existing logging can be used if desired)
            return List.of();
        }
    }

    @Cacheable("homePageProductsCache")
    public Collection<HomePageProductsDto> getAllVisibleToHomePageProducts() {
        List<HomePageProductsProjection> rows = productRepository.findAllVisibleHomePageProducts();
        ObjectMapper mapper = new ObjectMapper();

        return rows.stream().map(r -> {
            List<ProductItemOnListColor> colors = parseColorsJson(r.getFirstEightColorsJson(), mapper);
            List<String> categories = r.getCategoryNames() != null
              ? Arrays.stream(r.getCategoryNames().split(",")).toList()
              : List.of();
            return new HomePageProductsDto(
              r.getName(),
              r.getSlug(),
              r.getImageUrl(),
              colors,
              categories
            );
        }).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Collection<AdminProductItemOnListResponseDto> getAllAdminProducts() {
        List<AdminProductsProjection> rows = productRepository.findAllAdminProductList();
        return rows.stream()
          .map(r -> new AdminProductItemOnListResponseDto(
            r.getId(),
            r.getName(),
            r.getBrandName(),
            r.getStyleName(),
            r.getImageUrl(),
            Boolean.TRUE.equals(r.getIsProductVisibleInWebsite())
          ))
          .toList();
    }

    public ProductViewResponseDto getProductById(long id) {
        Product product = productRepository.findById(id).orElseThrow();
        return Product.convertToResponseViewDto(product);
    }

    @Cacheable(value = "productBySlug", key = "#slug")
    public ProductViewResponseDto getProductBySlug(String slug) {
        ObjectMapper mapper = new ObjectMapper();
        ProductViewProjection row = productRepository.findProductViewBySlug(slug).orElseThrow();

        // parse colors JSON into TempColor objects
        List<TempColor> colors;
        try {
            String colorsJson = row.getColorsJson();
            if (colorsJson == null || colorsJson.isBlank()) {
                colors = List.of();
            } else {
                List<Map<String, Object>> colorItems = mapper.readValue(
                    colorsJson,
                    new TypeReference<List<Map<String, Object>>>() {}
                );

                colors = colorItems.stream().map(ci -> {
                    String name = Objects.toString(ci.get("name"), "");
                    String hexCode = Objects.toString(ci.get("hexCode"), "");
                    String sortOrder = Objects.toString(ci.get("sortOrder"), "");
                    boolean isImage = false;
                    Object isImageObj = ci.get("isImage");
                    if (isImageObj instanceof Boolean) isImage = (Boolean) isImageObj;
                    else if (isImageObj instanceof String) isImage = Boolean.parseBoolean((String) isImageObj);

                    String colorImageUrl = Objects.toString(ci.get("imageUrl"), null);

                    List<TempProductColorImage> productColorImages = List.of();
                    Object pciObj = ci.get("productColorImages");
                    if (pciObj instanceof List) {
                        @SuppressWarnings("unchecked")
                        List<Map<String, Object>> pciList = (List<Map<String, Object>>) pciObj;
                        productColorImages = pciList.stream().map(pci ->
                            new TempProductColorImage(
                                Objects.toString(pci.get("imageUrl"), ""),
                                Objects.toString(pci.get("sortOrder"), "")
                            )
                        ).toList();
                    }

                    return new TempColor(
                        name,
                        hexCode,
                        sortOrder,
                        productColorImages,
                        isImage,
                        colorImageUrl
                    );
                }).toList();
            }
        } catch (Exception e) {
            colors = List.of();
        }

        List<String> categorySlugs = row.getCategorySlugs() != null ? Arrays.stream(row.getCategorySlugs().split(",")).toList() : List.of();

        return new ProductViewResponseDto(
            row.getId(),
            row.getName(),
            row.getMetaTitle(),
            row.getDescription(),
            new com.teevision.ecommerce_backend.entities.product.dto.TempBrand(row.getBrandName()),
            new com.teevision.ecommerce_backend.entities.product.dto.TempStyle(row.getStyleName()),
            row.getIsProductVisibleInWebsite(),
            row.getAvailableSizesJson(),
            colors,
            row.getFiberInfoItemsJson() != null ? parseJsonArrayOfString(row.getFiberInfoItemsJson()) : List.of(),
            row.getFeatureInfoItemsJson() != null ? parseJsonArrayOfString(row.getFeatureInfoItemsJson()) : List.of(),
            categorySlugs,
            row.getAvailableClotheSizeParts(),
            row.getSizesInfo()
        );
    }

    // helper to parse a JSON array of strings into List<String>
    private List<String> parseJsonArrayOfString(String json) {
        try {
            return new ObjectMapper().readValue(json, new com.fasterxml.jackson.core.type.TypeReference<List<String>>() {});
        } catch (Exception e) {
            return List.of();
        }
    }

    @Transactional(readOnly = true)
    public AdminProductViewResponseDto getAdminProductViewById(long id) {
        Product product = productRepository.findById(id).orElseThrow();
        
        // Force load lazy relationships
        if (product.getBrand() != null) {
            product.getBrand().getName();
        }
        if (product.getStyle() != null) {
            product.getStyle().getName();
        }
        if (product.getColors() != null) {
            product.getColors().size();
        }
        if (product.getCategories() != null) {
            product.getCategories().size();
        }
        if (product.getTags() != null) {
            product.getTags().size();
        }
        
        return Product.convertToAdminResponseViewDto(product);
    }

    public Float calculateFinalPrice(CalculateFinalPriceBody calculateFinalPriceBody) {
        ObjectMapper mapper = new ObjectMapper();

        PriceSettings priceSettings = priceSettingsRepository.findById(1L).orElse(new PriceSettings());
        String quantityBySizes = calculateFinalPriceBody.quantityBySizes();
        Map<String, Integer> quantityBySizesMap = stringToMap(mapper, quantityBySizes);

        if (quantityBySizesMap == null || quantityBySizesMap.isEmpty()) {
            throw new IllegalArgumentException("Quantity by sizes map is empty or invalid");
        }

        Integer totalQuantity = calculateTotalQuantity(quantityBySizesMap);

        if (totalQuantity < priceSettings.getMinimumQuantity()){
            throw new QuantityIsInRestrictionRangeException("Quantity should be more than " + priceSettings.getMinimumQuantity());
        }

        if (totalQuantity > priceSettings.getMaximumQuantity()){
            throw new QuantityIsInRestrictionRangeException("Quantity should be less than " + priceSettings.getMaximumQuantity());
        }

        Product product = productRepository.findById(calculateFinalPriceBody.productId()).orElseThrow();

        Integer frontNumberOfColorsTemp = calculateFinalPriceBody.frontNumberOfColors();
        Integer backNumberOfColorsTemp = calculateFinalPriceBody.backNumberOfColors();

        Integer frontNumberOfColors;
        Integer backNumberOfColors;

        if (frontNumberOfColorsTemp >= backNumberOfColorsTemp) {
            frontNumberOfColors = frontNumberOfColorsTemp;
            backNumberOfColors = backNumberOfColorsTemp;
        } else {
            frontNumberOfColors = backNumberOfColorsTemp;
            backNumberOfColors = frontNumberOfColorsTemp;
        }

        // Charge for front and back print
        String frontPrintPrice = priceSettings.getFrontPrintPrice();
        String backPrintPrice = priceSettings.getBackPrintPrice();
        BigDecimal frontPrintCharge = BigDecimal.valueOf(calculateColorPrintCharge(mapper, frontNumberOfColors, frontPrintPrice, totalQuantity));
        BigDecimal backPrintCharge = BigDecimal.valueOf(calculateColorPrintCharge(mapper, backNumberOfColors, backPrintPrice, totalQuantity));

        log.debug("---------------------------------------");
        log.debug("Front Print Charge: {}", frontPrintCharge);
        log.debug("Front Print Total Charge: {}", frontPrintCharge.multiply(BigDecimal.valueOf(totalQuantity)));
        log.debug("Back Print Charge: {}", backPrintCharge);
        log.debug("Back Print Total Charge: {}", backPrintCharge.multiply(BigDecimal.valueOf(totalQuantity)));

        BigDecimal setupCharge = BigDecimal.valueOf(priceSettings.getSetupChargePerNumberOfColors())
                .multiply(BigDecimal.valueOf(frontNumberOfColors + backNumberOfColors));

        log.debug("Setup Charge: {}", setupCharge);

        BigDecimal handlingCharge = BigDecimal.valueOf(calculateHandlingCharge(totalQuantity, priceSettings, product));

        BigDecimal subtotal = frontPrintCharge
                .multiply(BigDecimal.valueOf(totalQuantity))
                .add(backPrintCharge
                        .multiply(BigDecimal.valueOf(totalQuantity)))
                .add(setupCharge)
                .add(handlingCharge);

        log.debug("Subtotal: {}", subtotal);

        BigDecimal totalPriceOfProductBySize = calculateTotalPriceOfProductBySize(quantityBySizesMap, product);
        log.debug("Total Price of Product By Size: {}", totalPriceOfProductBySize);

        BigDecimal total = subtotal.add(totalPriceOfProductBySize);
        log.debug("Total Without Admin Fees: {}", total);

        BigDecimal adminFees = total
                .multiply(BigDecimal.valueOf(priceSettings.getAdminFees())
                        .divide(BigDecimal.valueOf(100), 20, RoundingMode.HALF_UP));
        log.debug("Admin Fees: {}", adminFees);

        BigDecimal totalWithAdminFees = total.add(adminFees);
        log.debug("Total With Admin Fees: {}", totalWithAdminFees);

        return totalWithAdminFees.setScale(4, RoundingMode.HALF_UP).floatValue();
    }

    private Float calculateColorPrintCharge(ObjectMapper mapper, Integer numberOfColors, String printPrice, int totalQuantity) {
        try {
            List<Map<String, Object>> printPriceMap = mapper.readValue(
                printPrice, 
                new TypeReference<List<Map<String, Object>>>() {}
            );

            for (Map<String, Object> itemRange : printPriceMap) {
                Integer from = (Integer) itemRange.get("from");
                Integer to = (Integer) itemRange.get("to");

                if (totalQuantity >= from && totalQuantity <= to) {
                    @SuppressWarnings("unchecked")
                    Map<String, Object> pricePerColorQuantityContents = 
                        (Map<String, Object>) itemRange.get("pricePerColorQuantity");

                    return getFloatByObject(pricePerColorQuantityContents.get(numberOfColors.toString()));
                }
            }
        } catch(JsonProcessingException e) {
            log.error("Error occurred while calculating color print charge: ", e);
        }
        return 0F;
    }

    private Integer calculateTotalQuantity(Map<String, Integer> quantityBySizesMap) {
        return quantityBySizesMap.values().stream()
            .mapToInt(Integer::intValue)
            .sum();
    }

    private Map<String, Integer> stringToMap(ObjectMapper mapper, String stringValue) {
        try {
            return mapper.readValue(stringValue, new TypeReference<Map<String, Integer>>() {});
        } catch (JsonProcessingException e) {
            log.error("Error occurred while converting string to map: ", e);
        }
        return Collections.emptyMap();
    }

    private BigDecimal calculateTotalPriceOfProductBySize(Map<String, Integer> quantityBySizesMap, Product product) {
        BigDecimal totalPriceOfProductBySize = BigDecimal.ZERO;
        
        for (Map.Entry<String, Integer> entry : quantityBySizesMap.entrySet()) {
            String size = entry.getKey();
            Integer quantity = entry.getValue();
            
            BigDecimal productPriceBySize = getProductPriceBySize(
                product.getPricesPerColorOnWhiteClothes(), 
                size
            );
            
            log.debug("Size: {}", size);
            log.debug("productPriceBySize: {}", productPriceBySize);
            log.debug("quantity: {}", quantity);
            
            totalPriceOfProductBySize = totalPriceOfProductBySize
                .add(productPriceBySize.multiply(BigDecimal.valueOf(quantity)));
        }
        
        return totalPriceOfProductBySize;
    }

    private BigDecimal getProductPriceBySize(String sizePrices, String size) {
        try {
            Map<String, Map<String, Object>> sizePricesMap = new ObjectMapper().readValue(
                sizePrices, 
                new TypeReference<Map<String, Map<String, Object>>>() {}
            );
            
            Map<String, Object> sizePrice = sizePricesMap.get(size);

            if (sizePrice == null) {
                return BigDecimal.ZERO;
            }

            float markupPrice = getFloatByObject(sizePrice.get("markup"));
            float originalPrice = getFloatByObject(sizePrice.get("originalPrice"));

            BigDecimal markupPriceBigDecimal = BigDecimal.valueOf(markupPrice);
            BigDecimal originalPriceBigDecimal = BigDecimal.valueOf(originalPrice);
            
            return markupPriceBigDecimal.multiply(originalPriceBigDecimal);

        } catch (JsonProcessingException e) {
            log.error("Error parsing product price by size: ", e);
        }
        return BigDecimal.ZERO;
    }

    private Float getFloatByObject(Object obj) {
        if (obj == null) {
            return 0F;
        }
        try {
            return ((Double) obj).floatValue();
        } catch (ClassCastException e) {
            return ((Integer) obj).floatValue();
        }
    }

    private Float calculateHandlingCharge(Integer totalQuantity, PriceSettings priceSettings, Product product) {

        if (product.getClothePackagingType() == ClothePackagingType.TSHIRT) {
            Float numberOfTShirtPerPackage = priceSettings.getNumberOfTShirtPerPackage().floatValue();
            return (((Double) Math.ceil(totalQuantity / numberOfTShirtPerPackage)).floatValue()) * priceSettings.getPricePerTShirtPackage();
        }

        if (product.getClothePackagingType() == ClothePackagingType.HOODIE) {
            Float numberOfHoodiePerPackage = priceSettings.getNumberOfHoodiePerPackage().floatValue();
            return (((Double) Math.ceil(totalQuantity / numberOfHoodiePerPackage)).floatValue()) * priceSettings.getPricePerHoodiePackage();
        }

        return 0F;
    }

    @Transactional
    @CacheEvict(value = {"productListCache", "homePageProductsCache", "productBySlug", "requestAQuoteProductsCache"}, allEntries = true)
    public long createProduct(CreateProductDto createProductDto) {

        log.info("Creating product with name: {}", createProductDto.name());
        log.info("Creating product with metaTitle: {}", createProductDto.metaTitle());

        Optional<Product> product = productRepository.findByName(createProductDto.name());
        if (product.isPresent()) {
            throw new IllegalArgumentException("Product with name " + createProductDto.name() + " already exists");
        }

        productRepository.createProduct(
                createProductDto.name(),
                createProductDto.metaTitle(),
                createProductDto.description(),
                createProductDto.isProductVisibleInWebsite(),
                createProductDto.hasFiberInfo(),
                createProductDto.hasFeaturesInfo(),
                createProductDto.hasSizeInfo(),
                createProductDto.availableSizes(),
                createProductDto.availableClotheSizeParts(),
                createProductDto.pricesPerColorOnWhiteClothes(),
                createProductDto.pricesPerColorOnColoredClothes(),
                createProductDto.clothePackagingType(),
                createProductDto.brandId(),
                createProductDto.styleId(),
                createProductDto.sizesInfo(),
                createProductDto.slug(),
                createProductDto.isProductVisibleInHomePage()
        );

        Product insertedProduct = productRepository.findByName(createProductDto.name()).orElseThrow();

        if (createProductDto.fitIds() != null && !createProductDto.fitIds().isEmpty()) {
            for (Long fitId : createProductDto.fitIds()) {
                productRepository.insertProductFit(insertedProduct.getId(), fitId);
            }
        }

        for (TempProductColor productColor : createProductDto.productColors()) {
            productRepository.insertProductColor(insertedProduct.getId(), productColor.colorId(), productColor.sortOrder());

            List<TempProductColorImage> productColorImages = productColor.productColorImages();

            for (TempProductColorImage productColorImage : productColorImages) {
                productRepository.insertProductColorImage(insertedProduct.getId(), productColor.colorId(), productColorImage.imageUrl(), productColorImage.sortOrder());
            }
        }

        for (Long categoryId : createProductDto.categoryIds()) {
            productRepository.insertProductCategory(insertedProduct.getId(), categoryId);
        }

        for (String items : createProductDto.fiberInfoItems()) {
            productRepository.insertFiberInfoItem(insertedProduct.getId(), items);
        }

        for (String items : createProductDto.featureInfoItems()) {
            productRepository.insertFeatureInfoItem(insertedProduct.getId(), items);
        }

        tagService.saveAllProductTags(insertedProduct.getId(), createProductDto.tags(), false);

        return insertedProduct.getId();
    }

    @Transactional
    @CacheEvict(value = {"productListCache", "homePageProductsCache", "productBySlug", "requestAQuoteProductsCache"}, allEntries = true)
    public void updateProduct(CreateProductDto createProductDto, long id) {

        productRepository.updateProduct(
                id,
                createProductDto.name(),
                createProductDto.metaTitle(),
                createProductDto.description(),
                createProductDto.isProductVisibleInWebsite(),
                createProductDto.hasFiberInfo(),
                createProductDto.hasFeaturesInfo(),
                createProductDto.hasSizeInfo(),
                createProductDto.availableSizes(),
                createProductDto.availableClotheSizeParts(),
                createProductDto.pricesPerColorOnWhiteClothes(),
                createProductDto.pricesPerColorOnColoredClothes(),
                createProductDto.clothePackagingType(),
                createProductDto.brandId(),
                createProductDto.styleId(),
                createProductDto.sizesInfo(),
                createProductDto.slug(),
                createProductDto.isProductVisibleInHomePage()
        );

        productRepository.deleteProductFits(id);
        if (createProductDto.fitIds() != null && !createProductDto.fitIds().isEmpty()) {
            for (Long fitId : createProductDto.fitIds()) {
                productRepository.insertProductFit(id, fitId);
            }
        }

        productRepository.deleteProductColors(id);
        for (TempProductColor productColor : createProductDto.productColors()) {
            productRepository.insertProductColor(id, productColor.colorId(), productColor.sortOrder());

            productRepository.deleteProductColorImages(id, productColor.colorId());

            List<TempProductColorImage> productColorImages = productColor.productColorImages();
            for (TempProductColorImage productColorImage : productColorImages) {
                productRepository.insertProductColorImage(id, productColor.colorId(), productColorImage.imageUrl(), productColorImage.sortOrder());
            }
        }

        productRepository.deleteProductCategories(id);
        for (Long categoryId : createProductDto.categoryIds()) {
            productRepository.insertProductCategory(id, categoryId);
        }

        productRepository.deleteFiberInfoItems(id);
        for (String items : createProductDto.fiberInfoItems()) {
            productRepository.insertFiberInfoItem(id, items);
        }

        productRepository.deleteFeatureInfoItems(id);
        for (String items : createProductDto.featureInfoItems()) {
            productRepository.insertFeatureInfoItem(id, items);
        }

        tagService.saveAllProductTags(id, createProductDto.tags(), true);
    }

    @Transactional
    @CacheEvict(value = {"productListCache", "homePageProductsCache", "productBySlug", "requestAQuoteProductsCache"}, allEntries = true)
    public void markDeletedById(long id) {
        productRepository.markProductAsDeleted(id);
    }
}

