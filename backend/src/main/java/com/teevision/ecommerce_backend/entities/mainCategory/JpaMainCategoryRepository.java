package com.teevision.ecommerce_backend.entities.mainCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface JpaMainCategoryRepository extends JpaRepository<MainCategory, Long> {

    boolean existsByName(String name);

    boolean existsBySlug(String slug);

    Optional<MainCategory> findBySlug(String slug);

    List<MainCategory> findAllByOrderByNameAsc();

    // UPDATED: Removed regex sorting - now handled in service layer
    @Query("SELECT mc FROM MainCategory mc WHERE mc.isActive = true AND mc.isVisibleOnWebsite = true")
    List<MainCategory> findAllVisibleMainCategories();

    // UPDATED: Removed regex sorting - now handled in service layer
    @Query("SELECT mc FROM MainCategory mc LEFT JOIN FETCH mc.categories c " +
           "WHERE mc.isActive = true AND mc.isVisibleOnWebsite = true")
    List<MainCategory> findAllVisibleMainCategoriesWithSubcategories();
}