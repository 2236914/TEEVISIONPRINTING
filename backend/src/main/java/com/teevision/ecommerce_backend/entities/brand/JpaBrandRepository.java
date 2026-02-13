package com.teevision.ecommerce_backend.entities.brand;


import com.teevision.ecommerce_backend.entities.blog.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JpaBrandRepository extends JpaRepository<Brand, Long> {

    boolean existsByName(String name);

    Optional<Brand> findBySlug(String slug);

    List<Brand> findAllByOrderByNameAsc();
}
