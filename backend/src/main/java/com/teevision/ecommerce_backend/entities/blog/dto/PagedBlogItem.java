package com.teevision.ecommerce_backend.entities.blog.dto;

import java.time.LocalDateTime;

public record PagedBlogItem(
  String imageSrc,
  String title,
  String slug,
  LocalDateTime date
) {
}
