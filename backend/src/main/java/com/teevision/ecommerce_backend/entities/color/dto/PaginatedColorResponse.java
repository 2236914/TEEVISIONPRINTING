package com.teevision.ecommerce_backend.entities.color.dto;

import java.util.Collection;

public record PaginatedColorResponse (
    Collection<ColorResponse> contents,
    int totalPages,
    long totalElements,
    int currentPage,
    int pageSize
){}
