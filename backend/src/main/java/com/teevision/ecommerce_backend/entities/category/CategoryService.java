package com.teevision.ecommerce_backend.entities.category;

import com.teevision.ecommerce_backend.entities.category.dto.CategorySaveDto;
import com.teevision.ecommerce_backend.entities.mainCategory.JpaMainCategoryRepository;
import com.teevision.ecommerce_backend.entities.mainCategory.MainCategory;
import com.teevision.ecommerce_backend.web.RecordAlreadyExistsException;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final JpaCategoryRepository jpaCategoryRepository;
    private final JpaMainCategoryRepository jpaMainCategoryRepository;

    @Cacheable("categories")
    public List<Category> getAllCategories() {
        return jpaCategoryRepository.findAllByOrderByNameAsc();
    }

    @CacheEvict(value = "categories", allEntries = true)
    public Category saveCategory(CategorySaveDto categorySaveDto) {
        if (jpaCategoryRepository.existsByName(categorySaveDto.getName())) {
            throw new RecordAlreadyExistsException("Category already exists");
        }

        Category category = new Category();
        category.setName(categorySaveDto.getName());
        category.setIsActive(categorySaveDto.getIsActive() != null ? categorySaveDto.getIsActive() : true);
        category.setSlug(categorySaveDto.getSlug());
        category.setIsVisibleOnWebsite(categorySaveDto.getIsVisibleOnWebsite() != null ? categorySaveDto.getIsVisibleOnWebsite() : true);
        category.setSortOrder(categorySaveDto.getSortOrder() != null ? categorySaveDto.getSortOrder() : "N/A");
        category.setImageUrl(categorySaveDto.getImageUrl());
        category.setDescription(categorySaveDto.getDescription());
        
        // Set main category if provided
        if (categorySaveDto.getMainCategoryId() != null) {
            MainCategory mainCategory = jpaMainCategoryRepository.findById(categorySaveDto.getMainCategoryId())
                .orElseThrow(() -> new RecordNotFoundException("Main category not found"));
            category.setMainCategory(mainCategory);
        }
        
        return jpaCategoryRepository.save(category);
    }

    @CacheEvict(value = "categories", allEntries = true)
    public Category updateCategory(long id, CategorySaveDto categorySaveDto) {
        Category category = jpaCategoryRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("Category not found")
        );

        if (!categorySaveDto.getName().equals(category.getName()) && jpaCategoryRepository.existsByName(categorySaveDto.getName())) {
            throw new RecordAlreadyExistsException("Category already exists");
        }

        category.setName(categorySaveDto.getName());
        category.setIsActive(categorySaveDto.getIsActive() != null ? categorySaveDto.getIsActive() : category.getIsActive());
        category.setSlug(categorySaveDto.getSlug());
        category.setIsVisibleOnWebsite(categorySaveDto.getIsVisibleOnWebsite() != null ? categorySaveDto.getIsVisibleOnWebsite() : category.getIsVisibleOnWebsite());
        category.setSortOrder(categorySaveDto.getSortOrder() != null ? categorySaveDto.getSortOrder() : category.getSortOrder());
        category.setImageUrl(categorySaveDto.getImageUrl());
        category.setDescription(categorySaveDto.getDescription());
        
        // Update main category assignment
        if (categorySaveDto.getMainCategoryId() != null) {
            MainCategory mainCategory = jpaMainCategoryRepository.findById(categorySaveDto.getMainCategoryId())
                .orElseThrow(() -> new RecordNotFoundException("Main category not found"));
            category.setMainCategory(mainCategory);
        } else {
            category.setMainCategory(null);
        }
        
        return jpaCategoryRepository.save(category);
    }

    public List<Category> getCategoriesByMainCategorySlug(String mainCategorySlug) {
        return jpaCategoryRepository.findByMainCategorySlugAndIsActiveTrueAndIsVisibleOnWebsiteTrue(mainCategorySlug);
    }

    public List<Category> getCategoriesByMainCategoryId(Long mainCategoryId) {
        return jpaCategoryRepository.findByMainCategoryId(mainCategoryId);
    }
}