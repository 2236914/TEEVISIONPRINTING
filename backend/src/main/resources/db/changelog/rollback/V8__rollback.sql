-- src/main/resources/db/changelog/rollback/V8__revert_column_sort_order.sql
ALTER TABLE product_color_images
ALTER COLUMN sort_order TYPE INT USING sort_order::integer;

ALTER TABLE product_color_images
ALTER COLUMN sort_order DROP DEFAULT;