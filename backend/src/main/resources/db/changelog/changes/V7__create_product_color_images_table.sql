CREATE TABLE product_color_images (
    id SERIAL,
    product_id INTEGER NOT NULL,
    color_id INTEGER NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    sort_order INT NOT NULL,
    CONSTRAINT pk_product_color_images PRIMARY KEY (id),
    CONSTRAINT fk_product_color
        FOREIGN KEY (product_id, color_id)
        REFERENCES product_colors (product_id, color_id)
        ON DELETE CASCADE

);