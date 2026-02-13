package com.teevision.ecommerce_backend.entities.blog;

import com.teevision.ecommerce_backend.entities.blog.dto.BlogResponseDto;
import com.teevision.ecommerce_backend.entities.blog.dto.BlogSaveDto;
import com.teevision.ecommerce_backend.entities.blog.dto.LatestBlog;
import com.teevision.ecommerce_backend.entities.blog.dto.PagedBlogItem;
import com.teevision.ecommerce_backend.entities.blog.dto.PagedBlogResponse;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final JpaBlogRepository jpaBlogRepository;
    
    private static final int MAX_PAGE_SIZE = 50;

    private static final int LATEST_BLOGS_COUNT = 3;

    public List<BlogResponseDto> getAllBlogs() {
        return jpaBlogRepository.findAll().stream()
                .map(blog -> blog.convertToResponseDto(getLatestBlogs()))
                .toList();
    }

    @Cacheable(value = "activeBlogs", key = "#page + '-' + #size")
    public PagedBlogResponse getActiveBlogs(int page, int size) {
        // Convert from 1-indexed (user-facing) to 0-indexed (Spring)
        int pageNumber = Math.max(0, page - 1);
        
        // Validate and cap page size
        int pageSize = Math.min(Math.max(size, 1), MAX_PAGE_SIZE);
        
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Blog> blogPage = jpaBlogRepository.findActiveBlogs(pageable);
        
        List<PagedBlogItem> blogs = blogPage.getContent().stream()
                .map(Blog::convertToPagedBlogItem)
                .collect(Collectors.toList());
        
        return PagedBlogResponse.builder()
                .blogs(blogs)
                .currentPage(page) // Return 1-indexed page
                .pageSize(pageSize)
                .totalBlogs(blogPage.getTotalElements())
                .totalPages(blogPage.getTotalPages())
                .hasNext(blogPage.hasNext())
                .hasPrevious(blogPage.hasPrevious())
                .build();
    }

    public BlogResponseDto getBlogById(long id) {
        return jpaBlogRepository.findById(id)
                .map(blog -> blog.convertToResponseDto(getLatestBlogs()))
                .orElseThrow(() -> new RecordNotFoundException("Blog not found"));
    }

    @CacheEvict(value = {"activeBlogs", "blogBySlug"}, allEntries = true)
    public BlogResponseDto createBlog(BlogSaveDto blogSaveDto) {
        Blog blog = new Blog();
        blog.setTitle(blogSaveDto.title());
        blog.setContent(blogSaveDto.content());
        blog.setAuthor(blogSaveDto.author());
        blog.setDate(blogSaveDto.date());
        blog.setImageSrc(blogSaveDto.imageSrc());
        blog.setIsActive(blogSaveDto.isActive());
        blog.setSlug(blogSaveDto.slug());
        blog.setTitleMetadata(blogSaveDto.titleMetadata());
        blog.setDescriptionMetadata(blogSaveDto.descriptionMetadata());
        blog.setKeywordsMetadata(blogSaveDto.keywordsMetadata());
        return jpaBlogRepository.save(blog).convertToResponseDto(getLatestBlogs());
    }

    @CacheEvict(value = {"activeBlogs", "blogBySlug"}, allEntries = true)
    public BlogResponseDto updateBlog(long id, BlogSaveDto blogSaveDto) {
        Blog blog = jpaBlogRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Blog not found"));
        blog.setTitle(blogSaveDto.title());
        blog.setContent(blogSaveDto.content());
        blog.setAuthor(blogSaveDto.author());
        blog.setDate(blogSaveDto.date());
        blog.setImageSrc(blogSaveDto.imageSrc());
        blog.setIsActive(blogSaveDto.isActive());
        blog.setSlug(blogSaveDto.slug());
        blog.setTitleMetadata(blogSaveDto.titleMetadata());
        blog.setDescriptionMetadata(blogSaveDto.descriptionMetadata());
        blog.setKeywordsMetadata(blogSaveDto.keywordsMetadata());
        return jpaBlogRepository.save(blog).convertToResponseDto(getLatestBlogs());
    }

    @Cacheable(value = "blogBySlug", key = "#slug")
    public BlogResponseDto getBlogBySlug(String slug) {
        Blog blog = jpaBlogRepository.findBySlug(slug)
                .orElseThrow(() -> new RecordNotFoundException("Blog not found"));
        return blog.convertToResponseDto(getLatestBlogs());
    }

    private List<LatestBlog> getLatestBlogs() {
        return jpaBlogRepository
          .findByIsActiveTrueOrderByDateDesc(PageRequest.of(0, LATEST_BLOGS_COUNT))
          .stream()
          .map(blog -> new LatestBlog(blog.getSlug(), blog.getTitle(), blog.getDate()))
          .toList();
    }
}