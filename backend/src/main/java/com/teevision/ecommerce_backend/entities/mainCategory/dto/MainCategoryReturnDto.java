// MainCategoryReturnDto.java
package com.teevision.ecommerce_backend.entities.mainCategory.dto;

public record MainCategoryReturnDto(
    long id,
    String name,
    String slug,
    String description,
    String imageUrl,
    Boolean isActive,
    Boolean isVisibleOnWebsite,
    String sortOrder
) {
}