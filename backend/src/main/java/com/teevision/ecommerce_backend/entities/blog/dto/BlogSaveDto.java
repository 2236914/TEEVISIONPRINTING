package com.teevision.ecommerce_backend.entities.blog.dto;

import java.time.LocalDateTime;

public record BlogSaveDto(
    String title,
    String content,
    String author,
    String imageSrc,
    Boolean isActive,
    LocalDateTime date,
    String slug,
    String titleMetadata,
    String descriptionMetadata,
    String keywordsMetadata
) {
}
