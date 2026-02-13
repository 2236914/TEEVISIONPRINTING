package com.teevision.ecommerce_backend.entities.color;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JpaColorRepository extends JpaRepository<Color, Long> {

    // Get all colors that is not currently used on the product
    @Query(value = "SELECT c.* FROM colors c " +
            "WHERE c.id NOT IN (SELECT color_id FROM product_colors WHERE product_id = :productId)", nativeQuery = true)
    List<Color> getAllColorsAvailableToUseOnProduct(@Param("productId") long productId);

    boolean existsByHexCode(String hexCode);

    @Query(value = """
        SELECT c.*, similarity(c.name, :search) AS rank
        FROM colors c
        WHERE c.name ILIKE %:search%
        ORDER BY rank DESC, name ASC;
    """, nativeQuery = true)
    Page<Color> findAllColorWithSearch(Pageable pageable, String search);
}
