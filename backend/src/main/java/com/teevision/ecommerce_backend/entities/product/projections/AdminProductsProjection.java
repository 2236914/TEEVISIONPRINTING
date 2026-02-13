package com.teevision.ecommerce_backend.entities.product.projections;

public interface AdminProductsProjection {
  Long getId();
  String getName();
  String getBrandName();
  String getStyleName();
  String getImageUrl();
  Boolean getIsProductVisibleInWebsite();
}
