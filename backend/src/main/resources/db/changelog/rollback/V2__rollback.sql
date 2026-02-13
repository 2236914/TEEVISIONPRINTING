-- src/main/resources/db/changelog/rollback/V2__delete_initial_data.sql
DELETE FROM categories WHERE name IN (
    'Short Sleeve', 'Long Sleeve', 'Polo', 'Performance', 'Long sleeve Polo', 'Tote Bag', 'Hoodie', 'Crewneck', 'Hats', 'Beanies', 'Ladies Shirts', 'Toddler Tees', 'Tank Tops', 'Pajama'
);

DELETE FROM colors WHERE name IN (
    'Tropical Teal', 'Desert Rose', 'Midnight Sea', 'Royal Amethist', 'Emerald Green', 'Slate Grey', 'Forest Fern', 'Coral Blush', 'Misty Moss', 'Charcoal Dust', 'Rustic Clay', 'Burgundy Velvet', 'Deep Ocean Blue', 'Sunset Orange', 'Aquatic Teal', 'Pink Flamingo', 'Fresh Mint', 'Chocolate Brown', 'Deep Plum', 'Granite Grey', 'Soft Lavender', 'Steel Blue', 'Tangerine Burst', 'Strawberry Pink', 'Pine Green', 'Earthy Brown', 'Sky Blue', 'Urban Slate', 'Olive Grove', 'Frosted Ice', 'Sage Green', 'Ruby Red', 'Garnet Red', 'Powder Blue', 'Lavender Dream', 'Violet Night', 'Poppy Red', 'Marigold', 'Midnight Blue', 'Azure Blue', 'Crimson Blush', 'Graphite Black', 'Pacific Blue', 'Forest Pine', 'Shadow Grey', 'Neon Green', 'Electric Blue', 'Lemon Zest', 'Golden Amber', 'Magenta Pop', 'Peach Creme', 'Dark Scarlet', 'Copper Rust', 'Sunshine Yellow', 'Soft Cream', 'Baby Pink', 'Stormy Blue', 'Buttercream', 'Blush Pink', 'Pale Silver'
);

DELETE FROM brands WHERE name IN (
    'AS Colour', 'Bella + Canvas', 'Boxercraft', 'District', 'Gildan', 'Hanes', 'Independent', 'Jerzees', 'La Apparel', 'Liberty', 'Next Level', 'Nike', 'Prime Line', 'Team 365', 'Tie-Dye', 'UltraClub'
);

DELETE FROM styles WHERE name IN ('5000', '6004', '12600');

DELETE FROM price_settings WHERE id = 1;