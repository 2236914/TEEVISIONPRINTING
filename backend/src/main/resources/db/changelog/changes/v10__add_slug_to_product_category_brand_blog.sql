ALTER TABLE products ADD COLUMN slug VARCHAR(255);
ALTER TABLE categories ADD COLUMN slug VARCHAR(255);
ALTER TABLE brands ADD COLUMN slug VARCHAR(255);
ALTER TABLE blogs ADD COLUMN slug VARCHAR(255);

ALTER TABLE products ADD CONSTRAINT unique_product_slug UNIQUE (slug);
ALTER TABLE categories ADD CONSTRAINT unique_category_slug UNIQUE (slug);
ALTER TABLE brands ADD CONSTRAINT unique_brand_slug UNIQUE (slug);
ALTER TABLE blogs ADD CONSTRAINT unique_blog_slug UNIQUE (slug);