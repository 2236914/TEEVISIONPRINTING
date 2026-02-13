package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record HomePageProductsDto(
  String name,
  String slug,
  String imageUrl,
  List<ProductItemOnListColor> colors,
  List<String> categories
) {
}
