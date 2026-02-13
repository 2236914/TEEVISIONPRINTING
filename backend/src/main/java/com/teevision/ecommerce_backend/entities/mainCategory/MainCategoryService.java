package com.teevision.ecommerce_backend.entities.mainCategory;

import com.teevision.ecommerce_backend.entities.category.Category;
import com.teevision.ecommerce_backend.entities.mainCategory.dto.MainCategorySaveDto;
import com.teevision.ecommerce_backend.entities.mainCategory.dto.MainCategoryWithSubcategoriesDto;
import com.teevision.ecommerce_backend.web.RecordAlreadyExistsException;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainCategoryService {

    private final JpaMainCategoryRepository jpaMainCategoryRepository;

    @Cacheable("mainCategories")
    public List<MainCategory> getAllMainCategories() {
        return jpaMainCategoryRepository.findAllByOrderByNameAsc();
    }

    // UPDATED: Now uses sorting in service layer
    @Cacheable("mainCategoriesVisible")
    public List<MainCategory> getAllVisibleMainCategories() {
        // Just return the unsorted list - sorting happens in convertToReturnDto
        return jpaMainCategoryRepository.findAllVisibleMainCategories();
    }

    @Cacheable("mainCategoriesWithSubcategories")
    public List<MainCategoryWithSubcategoriesDto> getAllMainCategoriesWithSubcategories() {
        List<MainCategory> mainCategories = jpaMainCategoryRepository.findAllVisibleMainCategoriesWithSubcategories();

        return mainCategories.stream()
            .map(mainCategory -> {
                // Get subcategories and convert them (sorting happens in convertToReturnDto)
                var subcategories = Category.convertToReturnDto(
                    mainCategory.getCategories().stream()
                        .filter(category -> category.getIsActive() && category.getIsVisibleOnWebsite())
                        .toList()
                );

                return new MainCategoryWithSubcategoriesDto(
                    mainCategory.getId(),
                    mainCategory.getName(),
                    mainCategory.getSlug(),
                    mainCategory.getDescription(),
                    mainCategory.getImageUrl(),
                    mainCategory.getIsActive(),
                    mainCategory.getIsVisibleOnWebsite(),
                    mainCategory.getSortOrder(),
                    subcategories
                );
            })
            .toList();
    }

    @Cacheable(value = "mainCategoryBySlug", key = "#slug")
    public MainCategory getMainCategoryBySlug(String slug) {
        return jpaMainCategoryRepository.findBySlug(slug)
            .orElseThrow(() -> new RecordNotFoundException("Main category not found"));
    }

    @CacheEvict(value = {"mainCategories", "mainCategoriesVisible", "mainCategoriesWithSubcategories", "mainCategoryBySlug"}, allEntries = true)
    public MainCategory saveMainCategory(MainCategorySaveDto mainCategorySaveDto) {
        if (jpaMainCategoryRepository.existsByName(mainCategorySaveDto.getName())) {
            throw new RecordAlreadyExistsException("Main category with this name already exists");
        }
        
        if (jpaMainCategoryRepository.existsBySlug(mainCategorySaveDto.getSlug())) {
            throw new RecordAlreadyExistsException("Main category with this slug already exists");
        }

        MainCategory mainCategory = new MainCategory();
        mainCategory.setName(mainCategorySaveDto.getName());
        mainCategory.setSlug(mainCategorySaveDto.getSlug());
        mainCategory.setDescription(mainCategorySaveDto.getDescription());
        mainCategory.setImageUrl(mainCategorySaveDto.getImageUrl());
        mainCategory.setIsActive(mainCategorySaveDto.getIsActive() != null ? mainCategorySaveDto.getIsActive() : true);
        mainCategory.setIsVisibleOnWebsite(mainCategorySaveDto.getIsVisibleOnWebsite() != null ? mainCategorySaveDto.getIsVisibleOnWebsite() : true);
        mainCategory.setSortOrder(mainCategorySaveDto.getSortOrder() != null ? mainCategorySaveDto.getSortOrder() : "N/A");
        
        return jpaMainCategoryRepository.save(mainCategory);
    }

    @CacheEvict(value = {"mainCategories", "mainCategoriesVisible", "mainCategoriesWithSubcategories", "mainCategoryBySlug"}, allEntries = true)
    public MainCategory updateMainCategory(long id, MainCategorySaveDto mainCategorySaveDto) {
        MainCategory mainCategory = jpaMainCategoryRepository.findById(id)
            .orElseThrow(() -> new RecordNotFoundException("Main category not found"));

        if (!mainCategorySaveDto.getName().equals(mainCategory.getName()) && 
            jpaMainCategoryRepository.existsByName(mainCategorySaveDto.getName())) {
            throw new RecordAlreadyExistsException("Main category with this name already exists");
        }

        if (!mainCategorySaveDto.getSlug().equals(mainCategory.getSlug()) && 
            jpaMainCategoryRepository.existsBySlug(mainCategorySaveDto.getSlug())) {
            throw new RecordAlreadyExistsException("Main category with this slug already exists");
        }

        mainCategory.setName(mainCategorySaveDto.getName());
        mainCategory.setSlug(mainCategorySaveDto.getSlug());
        mainCategory.setDescription(mainCategorySaveDto.getDescription());
        mainCategory.setImageUrl(mainCategorySaveDto.getImageUrl());
        mainCategory.setIsActive(mainCategorySaveDto.getIsActive() != null ? mainCategorySaveDto.getIsActive() : mainCategory.getIsActive());
        mainCategory.setIsVisibleOnWebsite(mainCategorySaveDto.getIsVisibleOnWebsite() != null ? mainCategorySaveDto.getIsVisibleOnWebsite() : mainCategory.getIsVisibleOnWebsite());
        mainCategory.setSortOrder(mainCategorySaveDto.getSortOrder() != null ? mainCategorySaveDto.getSortOrder() : mainCategory.getSortOrder());
        
        return jpaMainCategoryRepository.save(mainCategory);
    }

    @CacheEvict(value = {"mainCategories", "mainCategoriesVisible", "mainCategoriesWithSubcategories", "mainCategoryBySlug"}, allEntries = true)
    public void deleteMainCategory(long id) {
        if (!jpaMainCategoryRepository.existsById(id)) {
            throw new RecordNotFoundException("Main category not found");
        }
        jpaMainCategoryRepository.deleteById(id);
    }

    private List<MainCategory> sortMainCategories(List<MainCategory> mainCategories) {
        return mainCategories.stream()
            .sorted(this::compareMainCategorySortOrder)
            .toList();
    }
    private int compareMainCategorySortOrder(MainCategory mc1, MainCategory mc2) {
        String order1 = mc1.getSortOrder();
        String order2 = mc2.getSortOrder();
        
        // Handle N/A cases
        if ("N/A".equals(order1) && !"N/A".equals(order2)) {
            return 1; // order1 comes after order2
        }
        if (!"N/A".equals(order1) && "N/A".equals(order2)) {
            return -1; // order1 comes before order2
        }
        if ("N/A".equals(order1) && "N/A".equals(order2)) {
            return mc1.getName().compareTo(mc2.getName()); // Sort by name for N/A
        }
        
        // Check if both are numeric
        boolean isOrder1Numeric = isNumeric(order1);
        boolean isOrder2Numeric = isNumeric(order2);
        
        if (isOrder1Numeric && isOrder2Numeric) {
            return Integer.compare(Integer.parseInt(order1), Integer.parseInt(order2));
        }
        
        if (isOrder1Numeric && !isOrder2Numeric) {
            return -1; // Numeric comes before non-numeric
        }
        
        if (!isOrder1Numeric && isOrder2Numeric) {
            return 1; // Non-numeric comes after numeric
        }
        
        // Both are non-numeric, sort alphabetically
        int sortOrderComparison = order1.compareTo(order2);
        if (sortOrderComparison != 0) {
            return sortOrderComparison;
        }
        
        // If sort orders are equal, sort by name
        return mc1.getName().compareTo(mc2.getName());
    }

    /**
     * Compare sort order values for Category objects (subcategories)
     */
    private int compareCategorySortOrder(Category c1, Category c2) {
        String order1 = c1.getSortOrder();
        String order2 = c2.getSortOrder();
        
        // Handle N/A cases
        if ("N/A".equals(order1) && !"N/A".equals(order2)) {
            return 1;
        }
        if (!"N/A".equals(order1) && "N/A".equals(order2)) {
            return -1;
        }
        if ("N/A".equals(order1) && "N/A".equals(order2)) {
            return c1.getName().compareTo(c2.getName());
        }
        
        // Check if both are numeric
        boolean isOrder1Numeric = isNumeric(order1);
        boolean isOrder2Numeric = isNumeric(order2);
        
        if (isOrder1Numeric && isOrder2Numeric) {
            return Integer.compare(Integer.parseInt(order1), Integer.parseInt(order2));
        }
        
        if (isOrder1Numeric && !isOrder2Numeric) {
            return -1;
        }
        
        if (!isOrder1Numeric && isOrder2Numeric) {
            return 1;
        }
        
        // Both are non-numeric, sort alphabetically
        int sortOrderComparison = order1.compareTo(order2);
        if (sortOrderComparison != 0) {
            return sortOrderComparison;
        }
        
        return c1.getName().compareTo(c2.getName());
    }

    /**
     * Check if a string represents a valid integer
     */
    private boolean isNumeric(String str) {
        if (str == null || str.isEmpty()) {
            return false;
        }
        try {
            Integer.parseInt(str);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}