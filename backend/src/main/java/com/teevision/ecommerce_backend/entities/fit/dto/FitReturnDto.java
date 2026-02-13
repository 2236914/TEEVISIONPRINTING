package com.teevision.ecommerce_backend.entities.fit.dto;

public record FitReturnDto(
    long id,
    String name,
    Boolean isActive,
    String slug,
    Boolean isVisibleOnWebsite,
    String sortOrder
) {
}