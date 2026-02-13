package com.teevision.ecommerce_backend.entities.blog;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface JpaBlogRepository extends JpaRepository<Blog, Long> {

    Optional<Blog> findBySlug(String slug);
    
    @Query("SELECT b FROM Blog b WHERE b.isActive = true ORDER BY b.date DESC")
    Page<Blog> findActiveBlogs(Pageable pageable);

  // Use Pageable to request the top N entries at runtime
  List<Blog> findByIsActiveTrueOrderByDateDesc(Pageable pageable);
}