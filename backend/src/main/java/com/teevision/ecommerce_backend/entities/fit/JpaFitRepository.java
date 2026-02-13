package com.teevision.ecommerce_backend.entities.fit;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JpaFitRepository extends JpaRepository<Fit, Long> {
    
    boolean existsByName(String name);
    
    Optional<Fit> findBySlug(String slug);
    
    List<Fit> findAllByOrderByNameAsc();
}