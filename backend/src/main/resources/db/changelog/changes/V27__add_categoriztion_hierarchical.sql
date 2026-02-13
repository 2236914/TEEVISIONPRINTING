-- Forward Migration
CREATE TABLE main_categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    slug VARCHAR(255) NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT TRUE,
    is_visible_on_website BOOLEAN DEFAULT TRUE,
    sort_order VARCHAR(50) DEFAULT 'N/A',
    description TEXT,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Modify existing categories table
ALTER TABLE categories ADD COLUMN main_category_id BIGINT;
ALTER TABLE categories ADD CONSTRAINT fk_category_main_category 
    FOREIGN KEY (main_category_id) REFERENCES main_categories(id);

-- Insert starter data
INSERT INTO main_categories (name, slug, description, sort_order) VALUES
('T-Shirts', 't-shirts', 'Custom printed t-shirts for every occasion', '1'),
('Hoodies', 'hoodies', 'Comfortable hoodies and sweatshirts', '2'),
('Hats', 'hats', 'Stylish hats and caps', '3');