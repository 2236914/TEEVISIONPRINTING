// MainCategorySaveDto.java
package com.teevision.ecommerce_backend.entities.mainCategory.dto;

import lombok.Data;

@Data
public class MainCategorySaveDto {
    private String name;
    private String slug;
    private String description;
    private String imageUrl;
    private Boolean isActive;
    private Boolean isVisibleOnWebsite;
    private String sortOrder;
}