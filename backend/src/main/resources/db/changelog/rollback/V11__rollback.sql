-- src/main/resources/db/changelog/rollback/V11__remove_is_product_visible_in_home_page_column.sql
ALTER TABLE products DROP COLUMN is_product_visible_in_home_page;