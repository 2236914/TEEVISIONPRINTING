-- product 1
INSERT INTO fiber_info_items (product_id, fiber_info_item)
VALUES
(1, '5.3 oz.'),
(1, '100% preshrunk cotton'),
(1, '90/10: Antq Irish Green, Antq Orange, Antq Sapphire, Antq Cherry Red, Antq Jade Dome, Sport Grey'),
(1, '50/50: Blackberry, Dark Heather, Graphite Heather, Heather Military Green, Heather Navy, Heather Radiant Orchid, Heather Red, Heather Sapphire, Lilac, Midnight, Neon Blue, Neon Green, Russet, S Orange, S Green, Safety Pink, Sunset, Tweed');

INSERT INTO feature_info_items (product_id, feature_info_item)
VALUES
(1, 'Seamless rib at neck'),
(1, 'Retail Fit'),
(1, 'Taped shoulder-to-shoulder'),
(1, 'Tear away label'),
(1, 'Classic fit');

-- product 2
INSERT INTO fiber_info_items (product_id, fiber_info_item) VALUES
(2, '4.3 oz..'),
(2, '100% combed ringspun cotton fine jersey'),
(2, 'Fabric laundered for reduced shrinkage');

INSERT INTO feature_info_items (product_id, feature_info_item) VALUES
(2, '1x1 baby rib-knit set-in collar'),
(2, 'Tear-away label'),
(2, 'Select colors up to 5xl'),
(2, 'Sideseamed');


-- product 3
INSERT INTO fiber_info_items (product_id, fiber_info_item) VALUES
(3, '6.5 oz.'),
(3, '22-singles'),
(3, '100% combed cotton'),
(3, 'Heavier shirt with premium feel');

INSERT INTO feature_info_items (product_id, feature_info_item) VALUES
(3, 'Relaxed Fit'),
(3, 'Preshrunk to minimise shrinkage'),
(3, 'Neck ribbing'),
(3, 'Sideseamed'),
(3, 'Shoulder to Shoulder Tape');

-- product 4
INSERT INTO fiber_info_items (product_id, fiber_info_item) VALUES
(4, '8.5 oz.'),
(4, 'Midweight longsleeve crewneck'),
(4, '80% cotton and 20% polyester'),
(4, 'Tearout Label');

INSERT INTO feature_info_items (product_id, feature_info_item) VALUES
(4, 'Regular Fit'),
(4, 'Raglan sleeves'),
(4, 'Sleeve cuff'),
(4, 'preshrunk to minimise shrinkage');

-- product 5
INSERT INTO fiber_info_items (product_id, fiber_info_item) VALUES
(5, '5.3 oz.'),
(5, 'Premium midweight longsleeves'),
(5, '100% combed cotton');

INSERT INTO feature_info_items (product_id, feature_info_item) VALUES
(5, 'Regular Fit'),
(5, 'Preshrunk to minimise shrinkage'),
(5, 'Neck ribbing'),
(5, 'Sideseamed'),
(5, 'Shoulder to Shoulder Tape'),
(5, 'Double-needle hems');

-- product 6
INSERT INTO fiber_info_items (product_id, fiber_info_item) VALUES
(6, '10 oz.'),
(6, '70/30 ring-spun cotton/polyester 3-end fleece with 100% cotton face yarns on solid colors'),
(6, 'Tear away label');

INSERT INTO feature_info_items (product_id, feature_info_item) VALUES
(6, 'Generous Fit'),
(6, 'Split stitch double-needle sewing on all seams'),
(6, 'Twill neck tape');

-- product 7
INSERT INTO fiber_info_items (product_id, fiber_info_item)
VALUES
(7, '8 oz.'),
(7, '50% cotton/50% polyester'),
(7, 'Made with 50% sustainably and fairly grown USA cotton');

INSERT INTO feature_info_items (product_id, feature_info_item)
VALUES
(7, 'Pill-resistant air jet yarn'),
(7, 'Double-needle stitching throughout'),
(7, 'Double-lined hood');

-- product 8
INSERT INTO fiber_info_items (product_id, fiber_info_item) VALUES
(8, '10 oz.'),
(8, '70/30 ring-spun cotton/polyester blend 3-end fleece with 100% cotton face'),
(8, 'Black, Classic Navy, & Gunmetal Heather are 80/20 cotton/polyester');

INSERT INTO feature_info_items (product_id, feature_info_item) VALUES
(8, 'Generous fit'),
(8, 'Fleece lined hood'),
(8, 'Split stitch double-needle sewing on all seams'),
(8, 'Tear away label');

INSERT INTO colors (name, hex_code, is_active) VALUES
('Cardinal', '#911115', true),
('Gold', '#ecb82e', true),
('Military Green', '#6a6851', true),
('Lavender', '#d2b1c6', true),
('Black', '#000000', true),
('White', '#ffffff', true),
('Ercu', '#ebe3da', true),
('Cocoa', '#a96b49', true),
('Bumblebee', '#f9ac1e', true),
('Red', '#bb101e', true),
('Forest Green', '#1a311e', true),
('Khaki', '#b3926d', true),
('Sand', '#b4a081', true),
('Army', '#5b543a', true),
('Azalea', '#fd92ba', true),
('Mint Green', '#b3e1c4', true);

INSERT INTO product_colors (product_id, color_id) VALUES
(1, 1),
(1, 8),
(1, 14),
(2, 63),
(2, 61),
(2, 62),
(3, 65),
(3, 68),
(3, 67),
(4, 71),
(4, 70),
(4, 69),
(5, 74),
(5, 72),
(5, 73),
(6, 71),
(7, 76),
(7, 70),
(7, 75);

INSERT INTO product_category(product_id, category_id) VALUES
(1, 2),
(1, 15),
(2, 2),
(2, 16),
(3, 2),
(3, 17),
(4, 2),
(4, 8),
(4, 16),
(5, 2),
(5, 16),
(6, 2),
(6, 8),
(6, 16),
(7, 7),
(7, 15),
(7, 19),
(8, 7),
(8, 16);