package com.teevision.ecommerce_backend.entities.product;

import com.teevision.ecommerce_backend.entities.brand.Brand;
import com.teevision.ecommerce_backend.entities.category.Category;
import com.teevision.ecommerce_backend.entities.joins.ProductColor.ProductColor;
import com.teevision.ecommerce_backend.entities.joins.ProductColorImage.ProductColorImage;
import com.teevision.ecommerce_backend.entities.joins.productTag.ProductTag;
import com.teevision.ecommerce_backend.entities.product.dto.*;
import com.teevision.ecommerce_backend.entities.style.Style;
import com.teevision.ecommerce_backend.entities.fit.Fit;
import com.teevision.ecommerce_backend.enums.ClothePackagingType;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.stream.Collectors;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@RequiredArgsConstructor
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", unique = true)
    @NonNull
    private String name;

    @Column(name = "metatitle")
    @NonNull
    private String metaTitle;

    @Column(name= "description")
    @NonNull
    private String description;

    @Column(name = "slug", unique = true)
    @NonNull
    private String slug;

    @Column(name = "is_product_visible_in_website")
    @NonNull
    private Boolean isProductVisibleInWebsite;

    @Column(name = "has_fiber_info")
    @NonNull
    private Boolean hasFiberInfo;


    @ElementCollection(targetClass = String.class, fetch = FetchType.LAZY)
    @CollectionTable(name = "fiber_info_items", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "fiber_info_item", nullable = false)
    @NonNull
    private List<String> fiberInfoItems;

    @Column(name = "has_features_info")
    @NonNull
    private Boolean hasFeaturesInfo;

    @ElementCollection(targetClass = String.class, fetch = FetchType.LAZY)
    @CollectionTable(name = "feature_info_items", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "feature_info_item", nullable = false)
    @NonNull
    private List<String> featureInfoItems;

    @Column(name = "has_size_info")
    @NonNull
    private Boolean hasSizeInfo;

    @Column(name="sizes_info", columnDefinition = "jsonb")
    @NonNull
    private String sizesInfo;

    @Column(name="available_sizes", columnDefinition = "jsonb")
    @NonNull
    private String availableSizes;

    @Column(name="available_clothe_size_parts" ,columnDefinition = "jsonb")
    @NonNull
    private String availableClotheSizeParts;

    @Column(name="white_is_same_as_colored", columnDefinition = "boolean default true")
    @NonNull
    private Boolean whiteIsSameAsColored;

    @Column(name="prices_per_color_on_white_clothes", columnDefinition = "jsonb")
    @NonNull
    private String pricesPerColorOnWhiteClothes;

    @Column(name="prices_per_color_on_colored_clothes", columnDefinition = "jsonb")
    @NonNull
    private String pricesPerColorOnColoredClothes;

    @Column(name = "is_product_visible_in_home_page", columnDefinition = "boolean default false")
    @NonNull
    private Boolean isProductVisibleInHomePage;

    @Enumerated(EnumType.STRING)
    @Column(name="clothe_packaging_type")
    @NonNull
    private ClothePackagingType clothePackagingType;

    @ManyToMany()
    @JoinTable(
            name = "product_category",
            joinColumns = { @JoinColumn(name = "product_id") },
            inverseJoinColumns = { @JoinColumn(name = "category_id") }
    )
    private Collection<Category> categories;

    @OneToMany(mappedBy = "product", fetch=FetchType.LAZY)
    private Collection<ProductColor> colors;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "style_id")
    private Style style;

    @OneToMany(mappedBy = "product", fetch=FetchType.LAZY)
    private Collection<ProductTag> tags;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    private boolean isDeleted;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "product_fits",
        joinColumns = @JoinColumn(name = "product_id"),
        inverseJoinColumns = @JoinColumn(name = "fit_id")
    )
    private Set<Fit> fits = new HashSet<>();

    public static ProductResponseDto convertToResponseDto(Product product) {
        TempBrand brand = new TempBrand(product.getBrand().getName());
        TempStyle style = new TempStyle(product.getStyle().getName());
        List<TempColor> colors = product.getColors().stream().map(productColor -> {
            List<TempProductColorImage> productColorImages = productColor.getProductColorImages().stream()
                    .map(productColorImage -> new TempProductColorImage(
                            productColorImage.getImageUrl(),
                            productColorImage.getSortOrder()))
                    .sorted(Comparator.comparing(TempProductColorImage::sortOrder))
                    .toList();

            return new TempColor(
                    productColor.getColor().getName(),
                    productColor.getColor().getHexCode(),
                    productColor.getSortOrder(),
                    productColorImages,
                    productColor.getColor().getIsImage(),
                    productColor.getColor().getImageUrl());
        }).toList();

        ProductColor firstProductColor = product
                .getColors()
                .stream()
                .min(Comparator.comparing(ProductColor::getSortOrder))
                .orElse(null);
        ProductColorImage productColorImage = firstProductColor != null ?
                firstProductColor.getProductColorImages().stream()
                        .min(Comparator.comparing(ProductColorImage::getSortOrder))
                        .orElse(null) : null;

        String imageUrl = productColorImage != null ? productColorImage.getImageUrl() : null;

        List<String> categories = product.getCategories().stream().map(Category::getName).toList();

        return new ProductResponseDto(
                product.getId(),
                product.getName(),
                product.getMetaTitle(),
                product.getDescription(),
                brand,
                style,
                product.getIsProductVisibleInWebsite(),
                product.getAvailableSizes(),
                colors,
                product.getFeatureInfoItems(),
                product.getFiberInfoItems(),
                product.getAvailableClotheSizeParts(),
                product.getSizesInfo(),
                imageUrl,
                product.getSlug(),
                categories);
    }

    public static ProductViewResponseDto convertToResponseViewDto(Product product) {
        TempBrand brand = new TempBrand(product.getBrand().getName());
        TempStyle style = new TempStyle(product.getStyle().getName());

        List<TempColor> colors = product.getColors().stream().map(productColor -> {
            List<TempProductColorImage> productColorImages = productColor.getProductColorImages().stream()
                    .map(productColorImage -> new TempProductColorImage(
                            productColorImage.getImageUrl(),
                            productColorImage.getSortOrder()))
                    .toList();

            return new TempColor(
                    productColor.getColor().getName(),
                    productColor.getColor().getHexCode(),
                    productColor.getSortOrder(),
                    productColorImages,
                    productColor.getColor().getIsImage(),
                    productColor.getColor().getImageUrl());
        }).toList();

        List<String> categorySlugs = product.getCategories().stream()
            .map(Category::getSlug)
            .toList();

        return new ProductViewResponseDto(
                product.getId(),
                product.getName(),
                product.getMetaTitle(),
                product.getDescription(),
                brand,
                style,
                product.getIsProductVisibleInWebsite(),
                product.getAvailableSizes(),
                colors,
                product.getFiberInfoItems(),
                product.getFeatureInfoItems(),
                categorySlugs,
                product.getAvailableClotheSizeParts(),
                product.getSizesInfo());
    }

    public static AdminProductViewResponseDto convertToAdminResponseViewDto(Product product) {
        List<AdminProductViewColor> colors = product.getColors() != null ? product.getColors().stream().map(productColor -> {
            List<TempProductColorImage> productColorImages = productColor.getProductColorImages().stream()
                    .map(productColorImage -> new TempProductColorImage(
                            productColorImage.getImageUrl(),
                            productColorImage.getSortOrder()))
                    .sorted(Comparator.comparing(TempProductColorImage::sortOrder))
                    .toList();

            return new AdminProductViewColor(
                    productColor.getColor().getId(),
                    productColor.getColor().getName(),
                    productColor.getColor().getHexCode(),
                    productColor.getSortOrder(),
                    productColorImages,
                    productColor.getColor().getIsImage(),
                    productColor.getColor().getImageUrl());
        }).sorted(Comparator.comparing(AdminProductViewColor::sortOrder)).toList() : new ArrayList<>();

        List<String> tags = product.getTags() != null ? product.getTags().stream().map(
                tag -> tag.getTag().getTagName()
        ).toList() : new ArrayList<>();

        List<Long> fitIds = product.getFits() != null ? 
            product.getFits().stream().map(Fit::getId).toList() : new ArrayList<>();

        return new AdminProductViewResponseDto(
                product.getId(),
                product.getName(),
                product.getMetaTitle(),
                product.getIsProductVisibleInWebsite(),
                product.getDescription(),
                product.getHasFiberInfo(),
                product.getFiberInfoItems(),
                product.getHasFeaturesInfo(),
                product.getFeatureInfoItems(),
                product.getClothePackagingType(),
                product.getCategories() != null ? product.getCategories().stream().map(Category::getId).toList() : new ArrayList<>(),
                product.getBrand() != null ? product.getBrand().getId() : null,
                product.getStyle() != null ? product.getStyle().getId() : null,
                fitIds,
                product.getHasSizeInfo(),
                product.getSizesInfo(),
                product.getAvailableSizes(),
                product.getAvailableClotheSizeParts(),
                product.getWhiteIsSameAsColored(),
                product.getPricesPerColorOnWhiteClothes(),
                product.getPricesPerColorOnColoredClothes(),
                colors,
                product.getSlug(),
                product.getIsProductVisibleInHomePage(),
                tags);
    }

    public static ProductItemOnListResponseDto convertToProductListResponseDto(Product product) {
        List<String> colorSortOrders = List.of("1", "2", "3", "4", "5");
        final String firstOrder = "1";


//        List<ProductItemOnListColor> colors = product.getColors().stream()
//                .filter(productColor -> colorSortOrders.contains(productColor.getSortOrder()))
//                .map(productColor -> new ProductItemOnListColor(
//                        productColor.getColor().getName(),
//                        productColor.getColor().getHexCode()))
//                .toList();

//        ProductColor firstProductColor = product
//                .getColors()
//                .stream()
//                .filter(productColor -> firstOrder.equals(productColor.getSortOrder()))
//                .findAny()
//                .orElse(null);

//        ProductColorImage productColorImage = firstProductColor != null ?
//                firstProductColor.getProductColorImages().stream()
//                  .filter(image -> firstOrder.equals(image.getSortOrder()))
//                  .findAny()
//                  .orElse(null) : null;

//        String imageUrl = productColorImage != null ? productColorImage.getImageUrl() : "";

//        List<String> categorySlugs = product.getCategories().stream().map(Category::getSlug).toList();
//
//        List<String> tags = product.getTags().stream().map(
//                productTag -> productTag.getTag().getTagName()
//        ).toList();
        
//        List<String> fitSlugs = new ArrayList<>();
//        if (product.getFits() != null && !product.getFits().isEmpty()) {
//            fitSlugs = product.getFits().stream()
//                .map(Fit::getSlug)
//                .toList();
//        }
//        System.out.println("DEBUG: Product " + product.getId() + " has " + fitSlugs.size() + " fits: " + fitSlugs);
      System.out.println("DEBUG: Product " + product.getId());

        return new ProductItemOnListResponseDto(
                product.getId(),
                product.getName(),
                product.getSlug(),
                product.getBrand() != null ? product.getBrand().getSlug() : "",
                null,
                null,
                null,
                null,
                null,
                product.getColors().size());
    }

    public static Collection<ProductItemOnListResponseDto> convertToProductListResponseDto(Collection<Product> products) {
        return products.stream().map(Product::convertToProductListResponseDto).collect(Collectors.toList());
    }

    public static AdminProductItemOnListResponseDto convertToAdminProductListResponseDto(Product product) {
        String imageUrl = "";
        
        try {
            if (product.getColors() != null && !product.getColors().isEmpty()) {
                ProductColor firstProductColor = product.getColors().stream()
                    .min(Comparator.comparing(ProductColor::getSortOrder))
                    .orElse(null);
                
                if (firstProductColor != null && firstProductColor.getProductColorImages() != null) {
                    ProductColorImage productColorImage = firstProductColor.getProductColorImages().stream()
                        .min(Comparator.comparing(ProductColorImage::getSortOrder))
                        .orElse(null);
                    
                    if (productColorImage != null) {
                        imageUrl = productColorImage.getImageUrl();
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("Error getting product image for product ID: " + product.getId());
        }

        String brandName = product.getBrand() != null ? product.getBrand().getName() : "No Brand";
        String styleName = product.getStyle() != null ? product.getStyle().getName() : "No Style";

        return new AdminProductItemOnListResponseDto(
                product.getId(),
                product.getName(),
                brandName,
                styleName,
                imageUrl,
                product.getIsProductVisibleInWebsite());
    }

    public static Collection<AdminProductItemOnListResponseDto> convertToAdminProductListResponseDto(Collection<Product> products) {
        return products.stream().map(Product::convertToAdminProductListResponseDto).toList();
    }

    public static Collection<ProductResponseDto> convertToResponseDto(Collection<Product> products) {
        return products.stream().map(Product::convertToResponseDto).toList();
    }

    public static Product from(CreateProductDto createProductDto) {

        return new Product(
                createProductDto.name(),
                createProductDto.description(),
                createProductDto.slug(),
                createProductDto.metaTitle(),
                createProductDto.isProductVisibleInWebsite(),
                createProductDto.hasFiberInfo(),
                createProductDto.fiberInfoItems(),
                createProductDto.hasFeaturesInfo(),
                createProductDto.featureInfoItems(),
                createProductDto.hasSizeInfo(),
                createProductDto.sizesInfo(),
                createProductDto.availableSizes(),
                createProductDto.availableClotheSizeParts(),
                createProductDto.whiteIsSameAsColored(),
                createProductDto.pricesPerColorOnWhiteClothes(),
                createProductDto.pricesPerColorOnColoredClothes(),
                createProductDto.isProductVisibleInHomePage(),
                ClothePackagingType.fromString(createProductDto.clothePackagingType()));
    }
}