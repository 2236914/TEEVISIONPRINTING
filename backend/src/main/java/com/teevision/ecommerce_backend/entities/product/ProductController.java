package com.teevision.ecommerce_backend.entities.product;

import com.teevision.ecommerce_backend.entities.product.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<ProductResponseDto> getAllProducts(@RequestParam String categorySlug,
                                                         @RequestParam String brandSlugs,
                                                         @RequestParam String search) {
        return Product.convertToResponseDto(productService.getAllProducts(categorySlug, brandSlugs, search));
    }

    @GetMapping("/product-item-on-list")
    @ResponseStatus(HttpStatus.OK)
    public Collection<ProductItemOnListResponseDto> getAllProductItemListProducts(
            @RequestParam(required = false, defaultValue = "all") String categorySlug) {
        System.out.println("getAllProductItemListProducts");
        return productService.getAllProductItemOnListProducts(categorySlug);
}

    @GetMapping("/home-page")
    @ResponseStatus(HttpStatus.OK)
    public Collection<HomePageProductsDto> getAllVisibleToHomePageProducts() {
        return productService.getAllVisibleToHomePageProducts();
    }

    @GetMapping("/request-a-quote")
    @ResponseStatus(HttpStatus.OK)
    public Collection<ProductRequestAQuoteResponse> getAllRequestAQuoteProducts() {
        return productService.getAllRequestAQuoteProducts();
    }

    @GetMapping("/admin")
    @ResponseStatus(HttpStatus.OK)
    public Collection<AdminProductItemOnListResponseDto> getAllAdminProducts() {
        return productService.getAllAdminProducts();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductViewResponseDto getProductById(@PathVariable long id) {
        return productService.getProductById(id);
    }

    @GetMapping("slug/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public ProductViewResponseDto getProductBySlug(@PathVariable String slug) {
        return productService.getProductBySlug(slug);
    }

    @GetMapping("/admin/view/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AdminProductViewResponseDto getAdminProductViewById(@PathVariable long id) {
        return productService.getAdminProductViewById(id);
    }

    @PostMapping("/calculate-final-price")
    @ResponseStatus(HttpStatus.OK)
    public Float calculateFinalPrice(@RequestBody CalculateFinalPriceBody calculateFinalPriceBody) {
        return productService.calculateFinalPrice(calculateFinalPriceBody);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public long createProduct(@RequestBody CreateProductDto createProductDto) {
        return productService.createProduct(createProductDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateProduct(@RequestBody CreateProductDto createProductDto, @PathVariable long id) {
        System.out.println(createProductDto);
        productService.updateProduct(createProductDto, id);
    }

    @PutMapping("/delete/{id}")
    public void markDeletedById(@PathVariable long id) {
        productService.markDeletedById(id);
    }
}
