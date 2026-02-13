package com.teevision.ecommerce_backend.entities.product.dto;

public record AdminProductItemOnListResponseDto(
    long id,
    String name,
    String brandName,
    String styleName,
    String imageUrl,
    boolean isProductVisibleInWebsite
) { }
