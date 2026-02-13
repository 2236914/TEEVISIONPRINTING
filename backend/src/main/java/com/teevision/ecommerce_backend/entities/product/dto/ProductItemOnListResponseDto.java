package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record ProductItemOnListResponseDto(
        long id,
        String name,
        String slug,
        String brandSlug,
        List<String> fitSlugs,
        List<String> categorySlugs,
        List<ProductItemOnListColor> colors,
        String imageUrl,
        List<String> tags,
        int totalNumberOfColors
) {
}
