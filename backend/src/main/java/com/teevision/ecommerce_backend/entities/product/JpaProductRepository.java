package com.teevision.ecommerce_backend.entities.product;

import com.teevision.ecommerce_backend.entities.product.projections.AdminProductsProjection;
import com.teevision.ecommerce_backend.entities.product.projections.HomePageProductsProjection;
import com.teevision.ecommerce_backend.entities.product.projections.ProductListProjection;
import com.teevision.ecommerce_backend.entities.product.projections.ProductViewProjection;
import com.teevision.ecommerce_backend.entities.product.projections.RequestAQuoteProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface JpaProductRepository extends JpaRepository<Product, Long> {

 @Modifying
@Query(value = "INSERT INTO products (" +
            "name, metatitle, description, is_product_visible_in_website, " +
            "has_fiber_info, has_features_info, " +
            "has_size_info, available_sizes, " +
            "available_clothe_size_parts, prices_per_color_on_white_clothes, " +
            "prices_per_color_on_colored_clothes, " +
            "clothe_packaging_type, brand_id, style_id, sizes_info, slug, is_product_visible_in_home_page) " +
        "VALUES (:name, :metaTitle, :description, :isProductVisibleInWebsite, " +
            ":hasFiberInfo, " +
            ":hasFeaturesInfo, :hasSizeInfo, " +
            "CAST(:availableSizes AS jsonb), CAST(:availableClotheSizeParts AS jsonb), " +
            "CAST(:pricesPerColorOnWhiteClothes AS jsonb), CAST(:pricesPerColorOnColoredClothes AS jsonb), :clothePackagingType, " +
            ":brandId, :styleId, CAST(:sizesInfo AS jsonb), :slug, :isProductVisibleInHomePage)", nativeQuery = true)
void createProduct(@Param("name") String name,
                   @Param("metaTitle") String metaTitle,
                   @Param("description") String description,
                   @Param("isProductVisibleInWebsite") Boolean isProductVisibleInWebsite,
                   @Param("hasFiberInfo") Boolean hasFiberInfo,
                   @Param("hasFeaturesInfo") Boolean hasFeaturesInfo,
                   @Param("hasSizeInfo") Boolean hasSizeInfo,
                   @Param("availableSizes") String availableSizes,
                   @Param("availableClotheSizeParts") String availableClotheSizeParts,
                   @Param("pricesPerColorOnWhiteClothes") String pricesPerColorOnWhiteClothes,
                   @Param("pricesPerColorOnColoredClothes") String pricesPerColorOnColoredClothes,
                   @Param("clothePackagingType") String clothePackagingType,
                   @Param("brandId") Long brandId,
                   @Param("styleId") Long styleId,
                   @Param("sizesInfo") String sizesInfo,
                   @Param("slug") String slug,
                   @Param("isProductVisibleInHomePage") Boolean isProductVisibleInHomePage);

@Modifying
@Query(value = "UPDATE products SET " +
            "name = :name, " +
            "metatitle = :metaTitle, " +
            "description = :description, " +
            "is_product_visible_in_website = :isProductVisibleInWebsite, " +
            "has_fiber_info = :hasFiberInfo, " +
            "has_features_info = :hasFeaturesInfo, " +
            "has_size_info = :hasSizeInfo, " +
            "available_sizes = CAST(:availableSizes AS jsonb), " +
            "available_clothe_size_parts = CAST(:availableClotheSizeParts AS jsonb), " +
            "prices_per_color_on_white_clothes = CAST(:pricesPerColorOnWhiteClothes AS jsonb), " +
            "prices_per_color_on_colored_clothes = CAST(:pricesPerColorOnColoredClothes AS jsonb), " +
            "clothe_packaging_type = :clothePackagingType, " +
            "brand_id = :brandId, " +
            "style_id = :styleId, " +
            "sizes_info = CAST(:sizesInfo AS jsonb), " +
            "slug = :slug, " +
            "is_product_visible_in_home_page = :isProductVisibleInHomePage " +
        "WHERE id = :id", nativeQuery = true)
void updateProduct(@Param("id") long id,
                   @Param("name") String name,
                   @Param("metaTitle") String metaTitle,
                   @Param("description") String description,
                   @Param("isProductVisibleInWebsite") Boolean isProductVisibleInWebsite,
                   @Param("hasFiberInfo") Boolean hasFiberInfo,
                   @Param("hasFeaturesInfo") Boolean hasFeaturesInfo,
                   @Param("hasSizeInfo") Boolean hasSizeInfo,
                   @Param("availableSizes") String availableSizes,
                   @Param("availableClotheSizeParts") String availableClotheSizeParts,
                   @Param("pricesPerColorOnWhiteClothes") String pricesPerColorOnWhiteClothes,
                   @Param("pricesPerColorOnColoredClothes") String pricesPerColorOnColoredClothes,
                   @Param("clothePackagingType") String clothePackagingType,
                   @Param("brandId") Long brandId,
                   @Param("styleId") Long styleId,
                   @Param("sizesInfo") String sizesInfo,
                   @Param("slug") String slug,
                   @Param("isProductVisibleInHomePage") Boolean isProductVisibleInHomePage);

    @Query(value = "SELECT * FROM products WHERE name = :name AND is_deleted = FALSE", nativeQuery = true)
    Optional<Product> findByName(@Param("name") String name);

    @Query(value = """
      SELECT
        p.*,
        (
          SELECT COALESCE(
            json_agg(
              json_build_object(
                'name', c.name,
                'hexCode', c.hex_code,
                'sortOrder', pc.sort_order,
                'isImage', c.is_image,
                'imageUrl', c.image_url,
                'productColorImages', (
                  SELECT COALESCE(
                    json_agg(
                      json_build_object('imageUrl', pci.image_url, 'sortOrder', pci.sort_order)
                      ORDER BY (CASE WHEN pci.sort_order ~ '^[0-9]+$' THEN pci.sort_order::int ELSE NULL END) NULLS LAST
                    ),
                    '[]'::json
                  )
                  FROM product_color_images pci
                  WHERE pci.product_id = pc.product_id AND pci.color_id = pc.color_id
                )
              )
              ORDER BY (CASE WHEN pc.sort_order ~ '^[0-9]+$' THEN pc.sort_order::int ELSE NULL END) NULLS LAST
            ),
            '[]'::json
          )
          FROM product_colors pc
          JOIN colors c ON pc.color_id = c.id
          WHERE pc.product_id = p.id
        ) AS colors_json,
        (
          SELECT COALESCE(json_agg(feature_info_item), '[]'::json) FROM feature_info_items fi WHERE fi.product_id = p.id
        ) AS feature_info_items_json,
        (
          SELECT COALESCE(json_agg(fiber_info_item), '[]'::json) FROM fiber_info_items fi2 WHERE fi2.product_id = p.id
        ) AS fiber_info_items_json,
        (
          SELECT STRING_AGG(c2.slug, ',') FROM product_category pcg2
          JOIN categories c2 ON pcg2.category_id = c2.id
          WHERE pcg2.product_id = p.id
        ) AS category_slugs,
        b.name AS brand_name,
        s.name AS style_name
      FROM products p
      LEFT JOIN brands b ON p.brand_id = b.id
      LEFT JOIN styles s ON p.style_id = s.id
      WHERE p.slug = :slug AND p.is_product_visible_in_website = TRUE AND p.is_deleted = FALSE
      """, nativeQuery = true)
    Optional<ProductViewProjection> findProductViewBySlug(@Param("slug") String slug);

    @Query(value = "SELECT * FROM products WHERE is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllShownProducts();

    @Query(value = "SELECT * FROM products WHERE is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllProducts();

    @Query(value = "SELECT * FROM products WHERE id = :id AND is_deleted = FALSE", nativeQuery = true)
    Optional<Product> findById(@Param("id") long id);

    @Query(value = "SELECT p.* FROM products p " +
            "JOIN product_category pc ON p.id = pc.product_id " +
            "JOIN categories c ON pc.category_id = c.id " +
            "WHERE c.slug = :categorySlug AND p.is_product_visible_in_website = TRUE AND p.is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllShownProductsByCategorySlug(@Param("categorySlug") String categorySlug);

    @Query(value = "SELECT p.* FROM products p " +
            "JOIN product_category pc ON p.id = pc.product_id " +
            "JOIN categories c ON pc.category_id = c.id " +
            "JOIN brands b ON p.brand_id = b.id " +
            "WHERE c.slug = :categorySlug AND b.slug IN :brandSlugs AND is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllShownProductsByCategorySlugAndBrandSlug(@Param("categorySlug") String categorySlug, @Param("brandSlugs") List<String> brandSlugs);

    @Query(value = "SELECT p.* FROM products p " +
            "JOIN brands b ON p.brand_id = b.id " +
            "WHERE b.slug IN :brandSlugs AND is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllShownProductsByAllBrandSlugs(@Param("brandSlugs") List<String> brandSlugs);

    @Query(value = "SELECT * FROM products p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%')) AND is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllShownProductsByNameContainingIgnoreCase(@Param("name") String name);

    @Query(value = "SELECT p.* FROM products p " +
            "JOIN product_category pc ON p.id = pc.product_id " +
            "JOIN categories c ON pc.category_id = c.id " +
            "WHERE c.slug = :categorySlug AND LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%')) AND is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    Collection<Product> findAllShownProductsByCategorySlugAndNameContainingIgnoreCase(@Param("categorySlug") String categorySlug, @Param("name") String name);

    @Query(value = "SELECT p.* FROM products p " +
            "JOIN brands b ON p.brand_id = b.id " +
            "WHERE b.slug IN :brandSlugs AND LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%')) AND is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    List<Product> findAllShownProductsByBrandSlugsAndNameContainingIgnoreCase(@Param("brandSlugs") List<String> brandSlugs, @Param("name") String name);

    @Query(value = "SELECT p.* FROM products p " +
            "JOIN product_category pc ON p.id = pc.product_id " +
            "JOIN categories c ON pc.category_id = c.id " +
            "JOIN brands b ON p.brand_id = b.id " +
            "WHERE c.slug = :categorySlug AND b.slug IN :brandSlugs AND LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%')) AND is_product_visible_in_website = TRUE AND is_deleted = FALSE", nativeQuery = true)
    List<Product> findAllShownProductsByCategorySlugAndBrandSlugsAndNameContainingIgnoreCase(@Param("categorySlug") String categorySlug, @Param("brandSlugs") List<String> brandSlugs, @Param("name") String name);

    @Modifying
    @Query(value = "INSERT INTO product_colors(product_id, color_id, sort_order) VALUES (:productId, :colorId, :sortOrder)", nativeQuery = true)
    void insertProductColor(@Param("productId") long productId, @Param("colorId") long colorId, @Param("sortOrder") String sortOrder);

    @Modifying
    @Query(value = "DELETE FROM product_colors WHERE product_id = :productId", nativeQuery = true)
    void deleteProductColors(@Param("productId") long productId);

    @Modifying
    @Query(value = "INSERT INTO product_category(product_id, category_id) VALUES (:productId, :categoryId)", nativeQuery = true)
    void insertProductCategory(@Param("productId") long productId, @Param("categoryId") long categoryId);

    @Modifying
    @Query(value = "DELETE FROM product_category WHERE product_id = :productId", nativeQuery = true)
    void deleteProductCategories(@Param("productId") long productId);

    @Modifying
    @Query(value = "INSERT INTO feature_info_items(product_id, feature_info_item) VALUES (:productId, :featureInfoItem)", nativeQuery = true)
    void insertFeatureInfoItem(@Param("productId") long productId, @Param("featureInfoItem") String featureInfoItem);

    @Modifying
    @Query(value = "DELETE FROM feature_info_items WHERE product_id = :productId", nativeQuery = true)
    void deleteFeatureInfoItems(@Param("productId") long productId);

    @Modifying
    @Query(value = "INSERT INTO fiber_info_items(product_id, fiber_info_item) VALUES (:productId, :fiberInfoItem)", nativeQuery = true)
    void insertFiberInfoItem(@Param("productId") long productId, @Param("fiberInfoItem") String fiberInfoItem);

    @Modifying
    @Query(value = "DELETE FROM fiber_info_items WHERE product_id = :productId", nativeQuery = true)
    void deleteFiberInfoItems(@Param("productId") long productId);

    @Modifying
    @Query(value = "INSERT INTO product_color_images(product_id, color_id, image_url, sort_order) VALUES (:productId, :colorId, :imageUrl, :sortOrder)", nativeQuery = true)
    void insertProductColorImage(@Param("productId") long productId, @Param("colorId") long colorId, @Param("imageUrl") String imageUrl, @Param("sortOrder") String sortOrder);

    @Modifying
    @Query(value = "DELETE FROM product_color_images WHERE product_id = :productId AND color_id = :colorId", nativeQuery = true)
    void deleteProductColorImages(@Param("productId") long productId, @Param("colorId") long colorId);

    List<Product> findByIsProductVisibleInHomePageTrueAndIsProductVisibleInWebsiteTrueAndIsDeletedFalse();

    @Modifying
    @Query(value = "UPDATE products SET is_deleted = TRUE WHERE id = :id", nativeQuery = true)
    void markProductAsDeleted(@Param("id") long id);

    @Modifying
    @Query(value = "INSERT INTO product_fits(product_id, fit_id) VALUES (:productId, :fitId)", nativeQuery = true)
    void insertProductFit(@Param("productId") long productId, @Param("fitId") long fitId);

    @Modifying
    @Query(value = "DELETE FROM product_fits WHERE product_id = :productId", nativeQuery = true)
    void deleteProductFits(@Param("productId") long productId);


    @Query(value = """
        SELECT
          p.id AS id,
          p.name AS name,
          p.slug AS slug,
          b.slug AS brand_slug,
          (
            SELECT pci.image_url
            FROM product_colors pc
            JOIN product_color_images pci
              ON pci.product_id = pc.product_id
             AND pci.color_id = pc.color_id
            WHERE pc.product_id = p.id
            ORDER BY (CASE WHEN pc.sort_order ~ '^[0-9]+$' THEN pc.sort_order::int ELSE NULL END) NULLS LAST, (CASE WHEN pci.sort_order ~ '^[0-9]+$' THEN pci.sort_order::int ELSE NULL END) NULLS LAST
            LIMIT 1
          ) AS first_image_url,
          (
            SELECT COUNT(*) FROM product_colors pc2 WHERE pc2.product_id = p.id
          ) AS colors_count,
          (
            SELECT STRING_AGG(hex_code, ',') FROM (
              SELECT c.hex_code
              FROM product_colors pc2
              JOIN colors c ON pc2.color_id = c.id
              WHERE pc2.product_id = p.id
              ORDER BY (CASE WHEN pc2.sort_order ~ '^[0-9]+$' THEN pc2.sort_order::int ELSE NULL END) NULLS LAST
              LIMIT 5
            ) hex_code
          ) AS first_five_color_hex_codes,
          (
            SELECT STRING_AGG(f.slug, ',') FROM product_fits pf
            JOIN fits f ON pf.fit_id = f.id
            WHERE pf.product_id = p.id
          ) AS fit_slugs,
          (
            SELECT STRING_AGG(c2.slug, ',') FROM product_category pcg2
            JOIN categories c2 ON pcg2.category_id = c2.id
            WHERE pcg2.product_id = p.id
          ) AS category_slugs,
          (
            SELECT STRING_AGG(tag_name, ',') FROM product_tags pt
            JOIN tags t ON pt.tag_id = t.id
            WHERE pt.product_id = p.id
          ) AS tag_names
        FROM products p
        JOIN product_category pcg ON p.id = pcg.product_id
        JOIN categories c ON pcg.category_id = c.id
        LEFT JOIN brands b ON p.brand_id = b.id
        WHERE p.is_product_visible_in_website = TRUE AND p.is_deleted = FALSE
        """, nativeQuery = true)
    List<ProductListProjection> findAllShownProductsWithFirstImage();

    @Query(value = """
        SELECT
          p.id AS id,
          p.name AS name,
          p.slug AS slug,
          b.slug AS brand_slug,
          (
            SELECT pci.image_url
            FROM product_colors pc
            JOIN product_color_images pci
              ON pci.product_id = pc.product_id
             AND pci.color_id = pc.color_id
            WHERE pc.product_id = p.id
            ORDER BY (CASE WHEN pc.sort_order ~ '^[0-9]+$' THEN pc.sort_order::int ELSE NULL END) NULLS LAST, (CASE WHEN pci.sort_order ~ '^[0-9]+$' THEN pci.sort_order::int ELSE NULL END) NULLS LAST
            LIMIT 1
          ) AS first_image_url,
          (
            SELECT COUNT(*) FROM product_colors pc2 WHERE pc2.product_id = p.id
          ) AS colors_count,
          (
            SELECT COALESCE(
              json_agg(
                json_build_object('name', sub.name, 'hexCode', sub.hex_code)
                ORDER BY (CASE WHEN sub.sort_order ~ '^[0-9]+$' THEN sub.sort_order::int ELSE NULL END) NULLS LAST
              ),
              '[]'::json
            )
            FROM (
              SELECT c.name, c.hex_code, pc2.sort_order
              FROM product_colors pc2
              JOIN colors c ON pc2.color_id = c.id
              WHERE pc2.product_id = p.id
              ORDER BY (CASE WHEN pc2.sort_order ~ '^[0-9]+$' THEN pc2.sort_order::int ELSE NULL END) NULLS LAST
              LIMIT 5
            ) sub
          ) AS first_five_colors_json,
          (
            SELECT STRING_AGG(f.slug, ',') FROM product_fits pf
            JOIN fits f ON pf.fit_id = f.id
            WHERE pf.product_id = p.id
          ) AS fit_slugs,
          (
            SELECT STRING_AGG(c2.slug, ',') FROM product_category pcg2
            JOIN categories c2 ON pcg2.category_id = c2.id
            WHERE pcg2.product_id = p.id
          ) AS category_slugs,
          (
            SELECT STRING_AGG(tag_name, ',') FROM product_tags pt
            JOIN tags t ON pt.tag_id = t.id
            WHERE pt.product_id = p.id
          ) AS tag_names
        FROM products p
        JOIN product_category pcg ON p.id = pcg.product_id
        JOIN categories c ON pcg.category_id = c.id
        LEFT JOIN brands b ON p.brand_id = b.id
        WHERE c.slug = :categorySlug AND p.is_product_visible_in_website = TRUE AND p.is_deleted = FALSE
        """, nativeQuery = true)
    List<ProductListProjection> findAllShownProductsByCategorySlugWithFirstImage(String categorySlug);

  @Query(value = """
        SELECT
          p.name AS name,
          p.slug AS slug,
          (
            SELECT pci.image_url
            FROM product_colors pc
            JOIN product_color_images pci
              ON pci.product_id = pc.product_id
             AND pci.color_id = pc.color_id
            WHERE pc.product_id = p.id
            ORDER BY (CASE WHEN pc.sort_order ~ '^[0-9]+$' THEN pc.sort_order::int ELSE NULL END) NULLS LAST, (CASE WHEN pci.sort_order ~ '^[0-9]+$' THEN pci.sort_order::int ELSE NULL END) NULLS LAST
            LIMIT 1
          ) AS image_url,
          (
            SELECT COALESCE(
              json_agg(
                json_build_object('name', sub.name, 'hexCode', sub.hex_code)
                ORDER BY (CASE WHEN sub.sort_order ~ '^[0-9]+$' THEN sub.sort_order::int ELSE NULL END) NULLS LAST
              ),
              '[]'::json
            )
            FROM (
              SELECT c.name, c.hex_code, pc2.sort_order
              FROM product_colors pc2
              JOIN colors c ON pc2.color_id = c.id
              WHERE pc2.product_id = p.id
              ORDER BY (CASE WHEN pc2.sort_order ~ '^[0-9]+$' THEN pc2.sort_order::int ELSE NULL END) NULLS LAST
              LIMIT 8
            ) sub
          ) AS first_eight_colors_json,
          (
            SELECT STRING_AGG(c2.name, ',') FROM product_category pcg2
            JOIN categories c2 ON pcg2.category_id = c2.id
            WHERE pcg2.product_id = p.id
          ) AS category_names
        FROM products p
        WHERE p.is_product_visible_in_home_page = TRUE
          AND p.is_product_visible_in_website = TRUE
          AND p.is_deleted = FALSE
        """, nativeQuery = true)
  List<HomePageProductsProjection> findAllVisibleHomePageProducts();

  @Query(value = """
    SELECT
      p.id AS id,
      p.name AS name,
      p.available_sizes::text AS available_sizes_json,
      (
        SELECT COALESCE(
          json_agg(
            json_build_object('name', c.name, 'hexCode', c.hex_code)
            ORDER BY (CASE WHEN pc2.sort_order ~ '^[0-9]+$' THEN pc2.sort_order::int ELSE NULL END) NULLS LAST
          ),
          '[]'::json
        )
        FROM product_colors pc2
        JOIN colors c ON pc2.color_id = c.id
        WHERE pc2.product_id = p.id
      ) AS colors_json
    FROM products p
    WHERE p.is_deleted = FALSE
    """, nativeQuery = true)
  List<RequestAQuoteProjection> findAllRequestAQuoteProducts();

  @Query(value = """
    SELECT
      p.id AS id,
      p.name AS name,
      b.name AS brand_name,
      s.name AS style_name,
      (
        SELECT pci.image_url
        FROM product_colors pc
        JOIN product_color_images pci
          ON pci.product_id = pc.product_id
         AND pci.color_id = pc.color_id
        WHERE pc.product_id = p.id
        ORDER BY (CASE WHEN pc.sort_order ~ '^[0-9]+$' THEN pc.sort_order::int ELSE NULL END) NULLS LAST, (CASE WHEN pci.sort_order ~ '^[0-9]+$' THEN pci.sort_order::int ELSE NULL END) NULLS LAST
        LIMIT 1
      ) AS image_url,
      p.is_product_visible_in_website AS is_product_visible_in_website
    FROM products p
    LEFT JOIN brands b ON p.brand_id = b.id
    LEFT JOIN styles s ON p.style_id = s.id
    WHERE p.is_deleted = FALSE
    """, nativeQuery = true)
  List<AdminProductsProjection> findAllAdminProductList();

}


