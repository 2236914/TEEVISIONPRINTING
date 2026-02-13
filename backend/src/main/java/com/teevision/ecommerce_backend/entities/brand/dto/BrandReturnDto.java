package com.teevision.ecommerce_backend.entities.brand.dto;

public record BrandReturnDto(
    long id,
    String name,
    Boolean isActive,
    String slug,
    Boolean isVisibleOnWebsite,
    String sortOrder
) {
}
