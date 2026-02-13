package com.teevision.ecommerce_backend.entities.brand.dto;

import lombok.Data;

@Data
public class BrandSaveDto {
    private String name;
    private Boolean isActive;
    private String slug;
    private Boolean isVisibleOnWebsite;
    private String sortOrder;
}
