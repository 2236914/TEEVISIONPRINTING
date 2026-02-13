package com.teevision.ecommerce_backend.entities.blog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PagedBlogResponse {
    private List<PagedBlogItem> blogs;
    private int currentPage;
    private int pageSize;
    private long totalBlogs;
    private int totalPages;
    private boolean hasNext;
    private boolean hasPrevious;
}