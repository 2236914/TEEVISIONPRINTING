package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record AdminProductViewColor(
        long id,
        String name,
        String hexCode,
        String sortOrder,
        List<TempProductColorImage> productColorImages,
        Boolean isImage,
        String imageUrl
){}
