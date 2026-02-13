package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record ProductResponseDto(long id,
                                 String name,
                                 String metaTitle,
                                 String description,
                                 TempBrand brand,
                                 TempStyle style,
                                 Boolean isProductVisibleInWebsite,
                                 String availableSizes,
                                 List<TempColor> colors,
                                 List<String> fiberInfoItems,
                                 List<String> featuresInfoItems,
                                 String availableClotheSizeParts,
                                 String sizesInfo,
                                 String imageUrl,
                                 String slug,
                                 List<String> categories) {}
