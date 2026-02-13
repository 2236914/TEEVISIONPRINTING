package com.teevision.ecommerce_backend.entities.product.dto;

import com.teevision.ecommerce_backend.enums.ClothePackagingType;

import java.util.List;

public record AdminProductViewResponseDto(
        long id,
        String name,
        String metaTitle,
        Boolean isProductVisibleInWebsite,
        String description,
        Boolean hasFiberInfo,
        List<String> fiberInfoItems,
        Boolean hasFeaturesInfo,
        List<String> featureInfoItems,
        ClothePackagingType clothePackagingType,
        List<Long> categoryIds,
        Long brandId,
        Long styleId,
        List<Long> fitIds,
        Boolean hasSizeInfo,
        String sizesInfo,
        String availableSizes,
        String availableClotheSizeParts,
        Boolean whiteIsSameAsColored,
        String pricesPerColorOnWhiteClothes,
        String pricesPerColorOnColoredClothes,
        List<AdminProductViewColor> colors,
        String slug,
        Boolean isProductVisibleInHomePage,
        List<String> tags
) {
}
