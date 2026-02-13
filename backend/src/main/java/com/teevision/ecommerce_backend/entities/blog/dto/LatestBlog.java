package com.teevision.ecommerce_backend.entities.blog.dto;

import java.time.LocalDateTime;

public record LatestBlog(
  String slug,
  String title,
  LocalDateTime date
) {
}
