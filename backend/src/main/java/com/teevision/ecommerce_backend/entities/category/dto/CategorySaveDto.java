// CategorySaveDto.java
package com.teevision.ecommerce_backend.entities.category.dto;

import lombok.Data;

@Data
public class CategorySaveDto {
    private String name;
    private Boolean isActive;
    private String slug;
    private Boolean isVisibleOnWebsite;
    private String sortOrder;
    private Long mainCategoryId;
    private String imageUrl;
    private String description;
}