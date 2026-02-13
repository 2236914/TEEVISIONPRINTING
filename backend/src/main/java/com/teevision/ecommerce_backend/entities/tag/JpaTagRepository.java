package com.teevision.ecommerce_backend.entities.tag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface JpaTagRepository extends JpaRepository<Tag, Long> {

    Optional<Tag> findByTagName(String tagName);

    @Modifying
    @Query(value = "INSERT INTO product_tags (tag_id, product_id) VALUES (:tagId, :productId)", nativeQuery = true)
    void insertIntoTagProduct(@Param("tagId") Long tagId, @Param("productId") Long productId);

    @Modifying
    @Query(value = "DELETE FROM product_tags WHERE product_id = :productId", nativeQuery = true)
    void deleteTagsByProductId(Long productId);

    @Modifying
    @Query(value = "INSERT INTO color_tags (tag_id, color_id) VALUES (:tagId, :colorId)", nativeQuery = true)
    void insertIntoTagColor(@Param("tagId") Long tagId, @Param("colorId") Long colorId);

    @Modifying
    @Query(value = "DELETE FROM color_tags WHERE color_id = :colorId", nativeQuery = true)
    void deleteTagsByColorId(Long colorId);
}
