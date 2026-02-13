-- src/main/resources/db/changelog/rollback/V4__delete_joins.sql
DELETE FROM product_category WHERE product_id IN (1, 2, 3, 4, 5, 6, 7, 8);
DELETE FROM product_colors WHERE product_id IN (1, 2, 3, 4, 5, 6, 7, 8);
DELETE FROM colors WHERE name IN (
    'Cardinal', 'Gold', 'Military Green', 'Lavender', 'Black', 'White', 'Ercu', 'Cocoa', 'Bumblebee', 'Red', 'Forest Green', 'Khaki', 'Sand', 'Army', 'Azalea', 'Mint Green'
);
DELETE FROM feature_info_items WHERE product_id IN (1, 2, 3, 4, 5, 6, 7, 8);
DELETE FROM fiber_info_items WHERE product_id IN (1, 2, 3, 4, 5, 6, 7, 8);