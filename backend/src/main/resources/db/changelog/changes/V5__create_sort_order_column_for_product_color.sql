-- Add sort_order column to color table
ALTER TABLE product_colors
ADD COLUMN sort_order VARCHAR(255) DEFAULT 'N/A';