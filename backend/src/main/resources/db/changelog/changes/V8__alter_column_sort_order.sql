ALTER TABLE product_color_images
ALTER COLUMN sort_order TYPE VARCHAR(255);

ALTER TABLE product_color_images
ALTER COLUMN sort_order SET DEFAULT 'N/A';