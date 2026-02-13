package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record TempColor(
        String name,
        String hexCode,
        String sortOrder,
        List<TempProductColorImage> productColorImages,
        Boolean isImage,
        String imageUrl
        ) {}
