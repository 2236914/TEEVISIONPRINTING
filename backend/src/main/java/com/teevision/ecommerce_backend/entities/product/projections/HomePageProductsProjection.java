package com.teevision.ecommerce_backend.entities.product.projections;

public interface HomePageProductsProjection {
    String getName();
    String getSlug();
    String getImageUrl();
    String getFirstEightColorsJson();
    String getCategoryNames();
}
