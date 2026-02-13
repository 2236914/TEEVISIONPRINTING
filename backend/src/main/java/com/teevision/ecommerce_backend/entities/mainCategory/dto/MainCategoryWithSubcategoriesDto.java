// MainCategoryWithSubcategoriesDto.java
package com.teevision.ecommerce_backend.entities.mainCategory.dto;

import com.teevision.ecommerce_backend.entities.category.dto.CategoryReturnDto;

import java.util.Collection;

public record MainCategoryWithSubcategoriesDto(
    long id,
    String name,
    String slug,
    String description,
    String imageUrl,
    Boolean isActive,
    Boolean isVisibleOnWebsite,
    String sortOrder,
    Collection<CategoryReturnDto> subcategories
) {
}