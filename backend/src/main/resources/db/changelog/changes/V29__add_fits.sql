CREATE TABLE fits (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    is_visible_on_website BOOLEAN DEFAULT true NOT NULL,
    sort_order VARCHAR(50) DEFAULT 'N/A' NOT NULL
);

ALTER TABLE products 
ADD COLUMN fit_id BIGINT;

ALTER TABLE products 
ADD CONSTRAINT fk_product_fit 
FOREIGN KEY (fit_id) 
REFERENCES fits(id);