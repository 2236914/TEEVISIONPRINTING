package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record TempProductColor(
        long colorId,
        String sortOrder,
        List<TempProductColorImage> productColorImages
) {}
