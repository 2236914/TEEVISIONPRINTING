package com.teevision.ecommerce_backend.entities.blog;

import com.teevision.ecommerce_backend.entities.blog.dto.BlogResponseDto;
import com.teevision.ecommerce_backend.entities.blog.dto.LatestBlog;
import com.teevision.ecommerce_backend.entities.blog.dto.PagedBlogItem;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    String title;

    @Column(name = "content")
    String content;

    @Column(name = "author")
    String author;

    @Column(name = "date")
    LocalDateTime date;

    @Column(name = "image_src")
    String imageSrc;

    @Column(name = "is_active")
    Boolean isActive;

    @Column(name = "slug", unique = true)
    String slug;

    @Column(name = "title_metadata")
    String titleMetadata;

    @Column(name = "description_metadata")
    String descriptionMetadata;

    @Column(name = "keywords_metadata")
    String keywordsMetadata;

    public BlogResponseDto convertToResponseDto(List<LatestBlog> latestBlogs) {
        return new BlogResponseDto(id,
            title,
            content,
            author,
            date,
            imageSrc,
            isActive,
            slug,
            titleMetadata,
            descriptionMetadata,
            keywordsMetadata,
            latestBlogs);
    }

    public PagedBlogItem convertToPagedBlogItem() {
        return new PagedBlogItem(
            imageSrc,
            title,
            slug,
            date);
    }
}
