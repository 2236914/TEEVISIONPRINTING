package com.teevision.ecommerce_backend.entities.product.projections;

public interface RequestAQuoteProjection {
  Long getId();
  String getName();
  String getAvailableSizesJson();
  String getColorsJson();
}
