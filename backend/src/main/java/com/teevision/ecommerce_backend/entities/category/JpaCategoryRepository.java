package com.teevision.ecommerce_backend.entities.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface JpaCategoryRepository extends JpaRepository<Category, Long> {

    boolean existsByName(String name);

    Optional<Category> findBySlug(String slug);

    List<Category> findAllByOrderByNameAsc();

    @Query("SELECT c FROM Category c WHERE c.mainCategory.slug = :mainCategorySlug AND c.isActive = true AND c.isVisibleOnWebsite = true ORDER BY c.name")
    List<Category> findByMainCategorySlugAndIsActiveTrueAndIsVisibleOnWebsiteTrue(@Param("mainCategorySlug") String mainCategorySlug);

    @Query("SELECT c FROM Category c WHERE c.mainCategory.id = :mainCategoryId")
    List<Category> findByMainCategoryId(@Param("mainCategoryId") Long mainCategoryId);
}