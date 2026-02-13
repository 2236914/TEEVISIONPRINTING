-- Rollback Migration
ALTER TABLE categories DROP CONSTRAINT IF EXISTS fk_category_main_category;
ALTER TABLE categories DROP COLUMN IF EXISTS main_category_id;
DROP TABLE IF EXISTS main_categories;