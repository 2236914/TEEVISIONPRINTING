// CategoryReturnDto.java
package com.teevision.ecommerce_backend.entities.category.dto;

public record CategoryReturnDto(
    long id,
    String name,
    Boolean isActive,
    String slug,
    Boolean isVisibleOnWebsite,
    String sortOrder,
    Long mainCategoryId,
    String mainCategoryName,
    String imageUrl,
    String description
) {
}