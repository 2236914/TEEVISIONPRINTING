-- src/main/resources/db/changelog/rollback/v10__remove_slug_from_product_category_brand_blog.sql
ALTER TABLE products DROP CONSTRAINT unique_product_slug;
ALTER TABLE categories DROP CONSTRAINT unique_category_slug;
ALTER TABLE brands DROP CONSTRAINT unique_brand_slug;
ALTER TABLE blogs DROP CONSTRAINT unique_blog_slug;

ALTER TABLE products DROP COLUMN slug;
ALTER TABLE categories DROP COLUMN slug;
ALTER TABLE brands DROP COLUMN slug;
ALTER TABLE blogs DROP COLUMN slug;