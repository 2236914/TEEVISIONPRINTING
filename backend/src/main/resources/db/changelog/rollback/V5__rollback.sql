-- src/main/resources/db/changelog/rollback/V5__drop_sort_order_column_for_product_color.sql
ALTER TABLE product_colors
DROP COLUMN sort_order;