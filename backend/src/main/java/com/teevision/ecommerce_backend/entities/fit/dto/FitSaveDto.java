package com.teevision.ecommerce_backend.entities.fit.dto;

import lombok.Data;

@Data
public class FitSaveDto {
    private String name;
    private Boolean isActive;
    private String slug;
    private Boolean isVisibleOnWebsite;
    private String sortOrder;
}