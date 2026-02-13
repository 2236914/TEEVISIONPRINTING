-- Remove image_url and description columns from categories table
ALTER TABLE categories 
DROP COLUMN image_url,
DROP COLUMN description;