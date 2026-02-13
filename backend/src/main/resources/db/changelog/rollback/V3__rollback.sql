-- src/main/resources/db/changelog/rollback/V3__delete_additional_data.sql
DELETE FROM categories WHERE name IN ('Standard', 'Premium', 'High-End', 'Triblends', '50/50 cotton/polyester');

DELETE FROM styles WHERE name IN ('G500', '3600', '5026', '5100', '5020', 'IND300', 'G185', 'IND400');

DELETE FROM products WHERE name IN (
    'Gildan Adult Heavy Cotton™ T-Shirt',
    'Next Level Apparel Unisex Cotton T-Shirt',
    'AS Colour Classic T-Shirt',
    'As Colour Supply Crew',
    'AS Colour Long Sleeve Staple Shirt',
    'Independent Heavyweight Crewneck Sweatshirt',
    'Gildan Adult Heavy Blend™ Hooded Sweatshirt',
    'Independent Apparel Heavyweight Hooded Sweatshirt'
);