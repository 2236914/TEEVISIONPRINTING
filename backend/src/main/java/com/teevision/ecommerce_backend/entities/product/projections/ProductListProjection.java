package com.teevision.ecommerce_backend.entities.product.projections;

import com.teevision.ecommerce_backend.entities.product.dto.ProductItemOnListColor;

import java.util.List;

public interface ProductListProjection {
  Long getId();
  String getName();
  String getSlug();
  String getBrandSlug();       // alias: brand_slug
  String getFirstImageUrl();   // alias: first_image_url
  Integer getColorsCount();    // alias: colors_count
  String getFirstFiveColorsJson(); // alias: first_five_color_slugs
  String getFitSlugs();            // alias: fit_slugs
  String getCategorySlugs();       // alias: category_slugs
  String getTagNames();            // alias: tag_slugs
}
