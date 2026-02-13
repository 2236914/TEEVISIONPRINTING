CREATE TABLE categories (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT pk_categories PRIMARY KEY (id),
    CONSTRAINT uq_category_name UNIQUE (name)
);

CREATE TABLE colors (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    hex_code VARCHAR(7) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT pk_colors PRIMARY KEY (id),
    CONSTRAINT uq_color_name UNIQUE (name),
    CONSTRAINT uq_color_hex_code UNIQUE (hex_code)
);

CREATE TABLE brands (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT pk_brands PRIMARY KEY (id),
    CONSTRAINT uq_brand_name UNIQUE (name)
);

CREATE TABLE styles (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT pk_styles PRIMARY KEY (id),
    CONSTRAINT uq_style_name UNIQUE (name)
);

CREATE TABLE products (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    description TEXT NOT NULL,
    is_product_visible_in_website BOOLEAN NOT NULL DEFAULT true,
    has_fiber_info BOOLEAN NOT NULL DEFAULT true,
    has_features_info BOOLEAN NOT NULL DEFAULT true,
    has_size_info BOOLEAN NOT NULL DEFAULT true,
    white_is_same_as_colored BOOLEAN NOT NULL DEFAULT true,
    prices_per_color_on_white_clothes JSONB NOT NULL,
    prices_per_color_on_colored_clothes JSONB NOT NULL,
    clothe_packaging_type VARCHAR(50) NOT NULL,
    available_sizes JSONB NOT NULL,
    sizes_info JSONB NOT NULL,
    available_clothe_size_parts JSONB NOT NULL,
    brand_id INTEGER,
    style_id INTEGER,
    CONSTRAINT pk_products PRIMARY KEY (id),
    CONSTRAINT uq_product_name UNIQUE (name),
    CONSTRAINT fk_brand
        FOREIGN KEY (brand_id) REFERENCES brands(id),
    CONSTRAINT fk_style
        FOREIGN KEY (style_id) REFERENCES styles(id)

);

CREATE TABLE product_category (
    product_id INTEGER,
    category_id INTEGER,
    CONSTRAINT pk_product_category PRIMARY KEY (product_id, category_id),
    CONSTRAINT fk_product
        FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT fk_category
        FOREIGN KEY (category_id) REFERENCES categories(id)

);

CREATE TABLE product_colors (
    product_id INTEGER,
    color_id INTEGER,
    CONSTRAINT pk_product_colors PRIMARY KEY (product_id, color_id),
    CONSTRAINT fk_product_color
        FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT fk_color
        FOREIGN KEY (color_id) REFERENCES colors(id)
);

CREATE TABLE price_settings (
    id SERIAL,
    number_of_t_shirt_per_package INTEGER NOT NULL,
    number_of_hoodie_per_package INTEGER NOT NULL,
    minimum_quantity INTEGER NOT NULL,
    maximum_quantity INTEGER NOT NULL,
    setup_charge_per_number_of_colors FLOAT NOT NULL,
    admin_fees FLOAT NOT NULL,
    price_per_t_shirt_package FLOAT NOT NULL,
    price_per_hoodie_package FLOAT NOT NULL,
    front_print_price JSONB NOT NULL,
    back_print_price JSONB NOT NULL,
    CONSTRAINT pk_price_settings PRIMARY KEY (id)
);

CREATE TABLE fiber_info_items (
    product_id INTEGER NOT NULL,
    fiber_info_item VARCHAR(255) NOT NULL,
    CONSTRAINT pk_fiber_info_items PRIMARY KEY (product_id, fiber_info_item),
    CONSTRAINT fk_fiber_info_product
        FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE feature_info_items (
    product_id INTEGER NOT NULL,
    feature_info_item VARCHAR(255) NOT NULL,
    CONSTRAINT pk_feature_info_items PRIMARY KEY (product_id, feature_info_item),
    CONSTRAINT fk_feature_info_product
        FOREIGN KEY (product_id) REFERENCES products(id)
);