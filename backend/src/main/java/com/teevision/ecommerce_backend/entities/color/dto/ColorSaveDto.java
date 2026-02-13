package com.teevision.ecommerce_backend.entities.color.dto;

import lombok.Data;

import java.util.List;

@Data
public class ColorSaveDto {
    private String name;
    private String hexCode;
    private Boolean isActive;
    private List<String> tags;
    private Boolean isImage;
    private String imageUrl;
}