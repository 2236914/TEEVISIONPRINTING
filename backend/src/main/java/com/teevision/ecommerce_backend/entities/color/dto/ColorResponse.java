package com.teevision.ecommerce_backend.entities.color.dto;

import java.util.List;

public record ColorResponse(
    long id,
    String name,
    String hexCode,
    Boolean isActive,
    List<String> tags,
    Boolean isImage,
    String imageUrl
    ) {
}
