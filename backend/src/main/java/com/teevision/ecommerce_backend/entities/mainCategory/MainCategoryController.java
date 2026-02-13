package com.teevision.ecommerce_backend.entities.mainCategory;

import com.teevision.ecommerce_backend.entities.mainCategory.dto.MainCategoryReturnDto;
import com.teevision.ecommerce_backend.entities.mainCategory.dto.MainCategorySaveDto;
import com.teevision.ecommerce_backend.entities.mainCategory.dto.MainCategoryWithSubcategoriesDto;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/v1/main-categories")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MainCategoryController {

    private final MainCategoryService mainCategoryService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<MainCategoryReturnDto> getAllMainCategories() {
        return MainCategory.convertToReturnDto(mainCategoryService.getAllMainCategories());
    }

    @GetMapping("/visible")
    @ResponseStatus(HttpStatus.OK)
    @Cacheable("mainCategoriesVisible")
    public Collection<MainCategoryReturnDto> getAllVisibleMainCategories() {
        return MainCategory.convertToReturnDto(mainCategoryService.getAllVisibleMainCategories());
    }

    @GetMapping("/with-subcategories")
    @ResponseStatus(HttpStatus.OK)
    public List<MainCategoryWithSubcategoriesDto> getAllMainCategoriesWithSubcategories() {
        return mainCategoryService.getAllMainCategoriesWithSubcategories();
    }

    @GetMapping("/slug/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public MainCategoryReturnDto getMainCategoryBySlug(@PathVariable String slug) {
        return mainCategoryService.getMainCategoryBySlug(slug).convertToReturnDto();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @CacheEvict(value = "mainCategoriesVisible", allEntries = true)
    public MainCategoryReturnDto saveMainCategory(@RequestBody MainCategorySaveDto mainCategorySaveDto) {
        MainCategory savedMainCategory = mainCategoryService.saveMainCategory(mainCategorySaveDto);
        return savedMainCategory.convertToReturnDto();
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CacheEvict(value = "mainCategoriesVisible", allEntries = true)
    public MainCategoryReturnDto updateMainCategory(@PathVariable long id, @RequestBody MainCategorySaveDto mainCategorySaveDto) {
        return mainCategoryService.updateMainCategory(id, mainCategorySaveDto).convertToReturnDto();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @CacheEvict(value = "mainCategoriesVisible", allEntries = true)
    public void deleteMainCategory(@PathVariable long id) {
        mainCategoryService.deleteMainCategory(id);
    }
}