package com.teevision.ecommerce_backend.entities.style;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaStyleRepository extends JpaRepository<Style, Long> {

    boolean existsByName(String name);
}
