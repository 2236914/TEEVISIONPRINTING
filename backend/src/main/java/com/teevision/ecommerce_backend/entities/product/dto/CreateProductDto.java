package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record CreateProductDto(
        String name,
        String description,
        String metaTitle,
        Boolean hasFiberInfo,
        List<String> fiberInfoItems,
        Boolean hasFeaturesInfo,
        List<String> featureInfoItems,
        Boolean isProductVisibleInWebsite,
        Boolean hasSizeInfo,
        String availableSizes,
        String availableClotheSizeParts,
        String clothePackagingType,
        Boolean whiteIsSameAsColored,
        String pricesPerColorOnWhiteClothes,
        String pricesPerColorOnColoredClothes,
        String sizesInfo,
        Long brandId,
        Long styleId,
        List<Long> fitIds,
        List<Long> categoryIds,
        List<TempProductColor> productColors,
        String slug,
        Boolean isProductVisibleInHomePage,
        List<String> tags) {}