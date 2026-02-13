package com.teevision.ecommerce_backend.entities.product.projections;

public interface ProductViewProjection {
  Long getId();
  String getName();
  String getMetaTitle();
  String getDescription();
  String getAvailableSizesJson();
  String getAvailableClotheSizeParts();
  String getSizesInfo();
  Boolean getIsProductVisibleInWebsite();
  String getBrandName();
  String getStyleName();
  String getCategorySlugs();
  String getColorsJson();
  String getFiberInfoItemsJson();
  String getFeatureInfoItemsJson();
}

