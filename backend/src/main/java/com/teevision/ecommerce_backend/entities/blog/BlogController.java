package com.teevision.ecommerce_backend.entities.blog;

import com.teevision.ecommerce_backend.entities.blog.dto.BlogResponseDto;
import com.teevision.ecommerce_backend.entities.blog.dto.BlogSaveDto;
import com.teevision.ecommerce_backend.entities.blog.dto.PagedBlogResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/blogs")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogService blogService;

    // Keep original endpoint for backward compatibility
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<BlogResponseDto> getAllBlogs() {
        return blogService.getAllBlogs();
    }
    
    // New paginated endpoint
    @GetMapping("/paginated")
    @ResponseStatus(HttpStatus.OK)
    public PagedBlogResponse getPaginatedBlogs(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "9") int size) {
        return blogService.getActiveBlogs(page, size);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BlogResponseDto getBlogById(@PathVariable long id) {
        return blogService.getBlogById(id);
    }

    @GetMapping("/slug/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public BlogResponseDto getBlogBySlug(@PathVariable String slug) {
        return blogService.getBlogBySlug(slug);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BlogResponseDto createBlog(@RequestBody BlogSaveDto blogSaveDto) {
        return blogService.createBlog(blogSaveDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BlogResponseDto updateBlog(@PathVariable long id, @RequestBody BlogSaveDto blogSaveDto) {
        return blogService.updateBlog(id, blogSaveDto);
    }
}