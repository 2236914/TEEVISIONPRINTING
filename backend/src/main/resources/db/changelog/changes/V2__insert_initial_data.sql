INSERT INTO categories (name, is_active) VALUES
('Short Sleeve', true),
('Long Sleeve', true),
('Polo', true),
('Performance', true),
('Long sleeve Polo', true),
('Tote Bag', true),
('Hoodie', true),
('Crewneck', true),
('Hats', true),
('Beanies', true),
('Ladies Shirts', true),
('Toddler Tees', true),
('Tank Tops', true),
('Pajama', true);

INSERT INTO colors (name, hex_code, is_active) VALUES
('Tropical Teal', '#009AA8', true),
('Desert Rose', '#D6694B', true),
('Midnight Sea', '#16333D', true),
('Royal Amethist', '#513B7E', true),
('Emerald Green', '#06BA3A', true),
('Slate Grey', '#63676C', true),
('Forest Fern', '#249A67', true),
('Coral Blush', '#F6526A', true),
('Misty Moss', '#747D76', true),
('Charcoal Dust', '#545358', true),
('Rustic Clay', '#AC897F', true),
('Burgundy Velvet', '#7D0341', true),
('Deep Ocean Blue', '#115F8A', true),
('Sunset Orange', '#FC5709', true),
('Aquatic Teal', '#02817F', true),
('Pink Flamingo', '#F96793', true),
('Fresh Mint', '#00A45B', true),
('Chocolate Brown', '#452D2D', true),
('Deep Plum', '#2C1D3D', true),
('Granite Grey', '#858887', true),
('Soft Lavender', '#C0BAC0', true),
('Steel Blue', '#446173', true),
('Tangerine Burst', '#FB7F30', true),
('Strawberry Pink', '#FE6C83', true),
('Pine Green', '#008B48', true),
('Earthy Brown', '#3C281A', true),
('Sky Blue', '#598DBE', true),
('Urban Slate', '#49515A', true),
('Olive Grove', '#58604F', true),
('Frosted Ice', '#95D6E9', true),
('Sage Green', '#B6C577', true),
('Ruby Red', '#8B0422', true),
('Garnet Red', '#4F1027', true),
('Powder Blue', '#96BCE3', true),
('Lavender Dream', '#8D87CB', true),
('Violet Night', '#5C3A73', true),
('Poppy Red', '#FD643B', true),
('Marigold', '#FCAA2D', true),
('Midnight Blue', '#12142B', true),
('Azure Blue', '#3B6BA8', true),
('Crimson Blush', '#D43A48', true),
('Graphite Black', '#1F1F23', true),
('Pacific Blue', '#0177B2', true),
('Forest Pine', '#042D21', true),
('Shadow Grey', '#414451', true),
('Neon Green', '#58C929', true),
('Electric Blue', '#1694DC', true),
('Lemon Zest', '#CDDD25', true),
('Golden Amber', '#F29D09', true),
('Magenta Pop', '#FF2C7F', true),
('Peach Creme', '#DFAE86', true),
('Dark Scarlet', '#7C0A16', true),
('Copper Rust', '#B85A24', true),
('Sunshine Yellow', '#F8E421', true),
('Soft Cream', '#E4E1CD', true),
('Baby Pink', '#FDC7D5', true),
('Stormy Blue', '#4C677E', true),
('Buttercream', '#ecd9b7', true),
('Blush Pink', '#FE95BD', true),
('Pale Silver', '#DEE1E3', true);

INSERT INTO brands (name, is_active) VALUES
('AS Colour', true),
('Bella + Canvas', true),
('Boxercraft', true),
('District', true),
('Gildan', true),
('Hanes', true),
('Independent', true),
('Jerzees', true),
('La Apparel', true),
('Liberty', true),
('Next Level', true),
('Nike', true),
('Prime Line', true),
('Team 365', true),
('Tie-Dye', true),
('UltraClub', true);

INSERT INTO styles (name, is_active) VALUES
('5000', true),
('6004', true),
('12600', true);

INSERT INTO price_settings (
id,
number_of_t_shirt_per_package,
number_of_hoodie_per_package,
minimum_quantity,
maximum_quantity,
setup_charge_per_number_of_colors,
admin_fees,
price_per_t_shirt_package,
price_per_hoodie_package,
front_print_price,
back_print_price
) VALUES (
1,
72,
24,
6,
9000,
25.00,
11.5,
35.0,
35.0,
'[
    {
      "from": 6,
      "to": 11,
      "pricePerColorQuantity": {"0": 0, "1": 8, "2": 9, "3": 10, "4": 11, "5": 12, "6": 13, "7": 14, "8": 15}
    },
    {
      "from": 12,
      "to": 18,
      "pricePerColorQuantity": {"0": 0, "1": 3.80, "2": 4.75, "3": 5.50, "4": 6.50, "5": 7.50, "6": 8.50, "7": 12, "8": 13}
    },
    {
      "from": 19,
      "to": 24,
      "pricePerColorQuantity": {"0": 0, "1": 3.40, "2": 4.40, "3": 5.20, "4": 6, "5": 7, "6": 8, "7": 9, "8": 10}
    },
    {
      "from": 25,
      "to": 36,
      "pricePerColorQuantity": {"0": 0, "1": 3, "2": 4.118, "3": 5, "4": 5.80, "5": 6.80, "6": 0, "7": 7.80, "8": 8.80}
    },
    {
      "from": 37,
      "to": 48,
      "pricePerColorQuantity": {"0": 0, "1": 2.80, "2": 3.80, "3": 4.70, "4": 5.70, "5": 6.50, "6": 7.50, "7": 8.36666666666667, "8": 9.26666666666667}
    },
    {
      "from": 49,
      "to": 72,
      "pricePerColorQuantity": {"0": 0, "1": 2.50, "2": 3.50, "3": 4.40, "4": 4.845, "5": 5.70, "6": 6.50, "7": 7.33666666666667, "8": 8.16416666666667}
    },
    {
      "from": 73,
      "to": 96,
      "pricePerColorQuantity": {"0": 0, "1": 1.90, "2": 2.80, "3": 3.15, "4": 3.96, "5": 5.076, "6": 5.31, "7": 6.132, "8": 6.807}
    },
    {
      "from": 97,
      "to": 120,
      "pricePerColorQuantity": {"0": 0, "1": 1.6625, "2": 2.275, "3": 2.80, "4": 3.58925, "5": 4.4625, "6": 4.725, "7": 5.39466666666667, "8": 5.96254166666667}
    },
    {
      "from": 121,
      "to": 200,
      "pricePerColorQuantity": {"0": 0, "1": 1.53, "2": 1.955, "3": 2.635, "4": 3.06, "5": 3.655, "6": 4.165, "7": 4.73166666666667, "8": 5.28416666666667}
    },
    {
      "from": 201,
      "to": 300,
      "pricePerColorQuantity": {"0": 0, "1": 1.4025, "2": 1.65, "3": 2.475, "4": 2.7225, "5": 3.2175, "6": 3.63, "7": 4.0975, "8": 4.55125}
    },
    {
      "from": 301,
      "to": 400,
      "pricePerColorQuantity": {"0": 0, "1": 1.28, "2": 1.52, "3": 2.16, "4": 2.40, "5": 2.80, "6": 3.20, "7": 3.60, "8": 4.00}
    },
    {
      "from": 401,
      "to": 500,
      "pricePerColorQuantity": {"0": 0, "1": 1.20, "2": 1.35, "3": 1.80, "4": 1.95, "5": 2.40, "6": 2.80, "7": 2.40, "8": 2.55}
    },
    {
      "from": 501,
      "to": 750,
      "pricePerColorQuantity": {"0": 0, "1": 1.0875, "2": 1.2325, "3": 1.5225, "4": 1.595, "5": 1.74, "6": 1.8125, "7": 1.93333333333333, "8": 2.04208333333333}
    },
    {
      "from": 751,
      "to": 1000,
      "pricePerColorQuantity": {"0": 0, "1": 0.98, "2": 1.19, "3": 1.47, "4": 1.54, "5": 1.68, "6": 1.75, "7": 1.86666666666667, "8": 1.97166666666667}
    },
    {
      "from": 1001,
      "to": 1500,
      "pricePerColorQuantity": {"0": 0, "1": 0.91, "2": 1.12, "3": 1.33, "4": 1.40, "5": 1.54, "6": 1.61, "7": 1.72666666666667, "8": 1.83166666666667}
    },
    {
      "from": 1501,
      "to": 2500,
      "pricePerColorQuantity": {"0": 0, "1": 0.828, "2": 1.104, "3": 1.311, "4": 1.38, "5": 1.518, "6": 1.587, "7": 1.702, "8": 1.8055}
    },
    {
      "from": 2501,
      "to": 4000,
      "pricePerColorQuantity": {"0": 0, "1": 0.7425, "2": 1.08, "3": 1.2825, "4": 1.35, "5": 1.485, "6": 1.5525, "7": 1.665, "8": 1.76625}
    },
    {
      "from": 4001,
      "to": 6000,
      "pricePerColorQuantity": {"0": 0, "1": 0.665, "2": 1.064, "3": 1.2635, "4": 1.33, "5": 1.463, "6": 1.5295, "7": 1.64033333333333, "8": 1.74008333333333}
    },
    {
      "from": 6001,
      "to": 9000,
      "pricePerColorQuantity": {"0": 0, "1": 0.582166666666666, "2": 1.04266666666667, "3": 1.23816666666667, "4": 1.30333333333333, "5": 1.43366666666667, "6": 1.49883333333333, "7": 1.59658333333333, "8": 1.68781666666666}
    }
]',
'[
    {
      "from": 6,
      "to": 11,
      "pricePerColorQuantity": {"0": 0, "1": 2, "2": 2.3, "3": 2.5, "4": 3.25, "5": 3.75, "6": 4.25, "7": 4.875, "8": 5.45}
    },
    {
      "from": 12,
      "to": 24,
      "pricePerColorQuantity": {"0": 0, "1": 1.75, "2": 2.45, "3": 2.8, "4": 3.45, "5": 3.95, "6": 4.45, "7": 5.025, "8": 5.57}
    },
    {
      "from": 25,
      "to": 36,
      "pricePerColorQuantity": {"0": 0, "1": 1.5, "2": 2.25, "3": 2.75, "4": 3.4, "5": 3.9, "6": 4.4, "7": 4.975, "8": 5.52}
    },
    {
      "from": 37,
      "to": 48,
      "pricePerColorQuantity": {"0": 0, "1": 1.45, "2": 2.059, "3": 2.7, "4": 3.2, "5": 3.7, "6": 3.8, "7": 4.3, "8": 4.68}
    },
    {
      "from": 49,
      "to": 72,
      "pricePerColorQuantity": {"0": 0, "1": 1.54, "2": 2.09, "3": 2.695, "4": 3.355, "5": 3.685, "6": 3.795, "7": 3.8, "8": 4.653}
    },
    {
      "from": 73,
      "to": 96,
      "pricePerColorQuantity": {"0": 0, "1": 1.4375, "2": 1.955, "3": 2.3575, "4": 2.9325, "5": 3.45, "6": 3.6225, "7": 4.16875, "8": 4.6}
    },
    {
      "from": 97,
      "to": 120,
      "pricePerColorQuantity": {"0": 0, "1": 1.2075, "2": 1.7825, "3": 2.0125, "4": 2.53, "5": 3.243, "6": 3.3925, "7": 4.00775, "8": 4.49305}
    },
    {
      "from": 121,
      "to": 200,
      "pricePerColorQuantity": {"0": 0, "1": 1.0925, "2": 1.495, "3": 1.84, "4": 2.35865, "5": 2.9325, "6": 3.105, "7": 3.65125, "8": 4.088135}
    },
    {
      "from": 201,
      "to": 300,
      "pricePerColorQuantity": {"0": 0, "1": 1.035, "2": 1.3225, "3": 1.7825, "4": 2.07, "5": 2.4725, "6": 2.8175, "7": 3.1625, "8": 3.51325}
    },
    {
      "from": 301,
      "to": 400,
      "pricePerColorQuantity": {"0": 0, "1": 0.8625, "2": 1.15, "3": 1.725, "4": 1.8975, "5": 2.2425, "6": 2.53, "7": 2.78875, "8": 3.06475}
    },
    {
      "from": 401,
      "to": 500,
      "pricePerColorQuantity": {"0": 0, "1": 0.805, "2": 1.0925, "3": 1.5525, "4": 1.725, "5": 2.0125, "6": 2.3, "7": 2.53, "8": 2.783}
    },
    {
      "from": 501,
      "to": 750,
      "pricePerColorQuantity": {"0": 0, "1": 0.69, "2": 1.035, "3": 1.38, "4": 1.50, "5": 1.61, "6": 1.725, "7": 1.84, "8": 1.955}
    },
    {
      "from": 751,
      "to": 1000,
      "pricePerColorQuantity": {"0": 0, "1": 0.66, "2": 1.02, "3": 1.26, "4": 1.44, "5": 1.44, "6": 1.50, "7": 1.59, "8": 1.662}
    },
    {
      "from": 1001,
      "to": 1500,
      "pricePerColorQuantity": {"0": 0, "1": 0.625, "2": 1.0625, "3": 1.3125, "4": 1.375, "5": 1.5, "6": 1.5625, "7": 1.65625, "8": 1.74375}
    },
    {
      "from": 1501,
      "to": 2500,
      "pricePerColorQuantity": {"0": 0, "1": 0.576, "2": 1.024, "3": 1.216, "4": 1.472, "5": 1.408, "6": 1.472, "7": 1.568, "8": 1.6384}
    },
    {
      "from": 2501,
      "to": 4000,
      "pricePerColorQuantity": {"0": 0, "1": 0.52, "2": 0.975, "3": 1.17, "4": 1.3, "5": 1.43, "6": 1.495, "7": 1.58275, "8": 1.65778333333333}
    },
    {
      "from": 4001,
      "to": 6000,
      "pricePerColorQuantity": {"0": 0, "1": 0.4655, "2": 0.931, "3": 1.1305, "4": 1.33, "5": 1.463, "6": 1.5295, "7": 1.57175, "8": 1.64598333333333}
    },
    {

      "from": 6001,
      "to": 9000,
      "pricePerColorQuantity": {"0": 0, "1": 0.4389, "2": 0.8645, "3": 1.064, "4": 1.33, "5": 1.463, "6": 1.5295, "7": 1.56075, "8": 1.63418333333333}
    }
]');




