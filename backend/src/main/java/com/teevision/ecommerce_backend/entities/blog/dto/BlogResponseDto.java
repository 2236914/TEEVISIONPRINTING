package com.teevision.ecommerce_backend.entities.blog.dto;

import java.time.LocalDateTime;
import java.util.List;

public record BlogResponseDto (
  long id,
  String title,
  String content,
  String author,
  LocalDateTime date,
  String imageSrc,
  Boolean isActive,
  String slug,
  String titleMetadata,
  String descriptionMetadata,
  String keywordsMetadata,
  List<LatestBlog> latestBlogs
) {
}
