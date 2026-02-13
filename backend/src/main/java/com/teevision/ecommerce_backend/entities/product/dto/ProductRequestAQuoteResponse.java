package com.teevision.ecommerce_backend.entities.product.dto;

import java.util.List;

public record ProductRequestAQuoteResponse(
  long id,
  String name,
  List<String> availableSizes,
  List<ProductItemOnListColor> colors
) {
}
