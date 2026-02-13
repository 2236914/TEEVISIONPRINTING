package com.teevision.ecommerce_backend.entities.category;

import com.teevision.ecommerce_backend.entities.category.dto.CategoryReturnDto;
import com.teevision.ecommerce_backend.entities.category.dto.CategorySaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    @Cacheable(value = "categories")
    public Collection<CategoryReturnDto> getAllCategories() {
        return Category.convertToReturnDto(categoryService.getAllCategories());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @CacheEvict(value = "categories", allEntries = true)
    public CategoryReturnDto saveCategory(@RequestBody CategorySaveDto categorySaveDto) {
        Category savedCategory = categoryService.saveCategory(categorySaveDto);
        return savedCategory.convertToReturnDto();
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CacheEvict(value = "categories", allEntries = true)
    public CategoryReturnDto updateCategory(@PathVariable long id, @RequestBody CategorySaveDto categorySaveDto) {
        return categoryService.updateCategory(id, categorySaveDto).convertToReturnDto();
    }
}
