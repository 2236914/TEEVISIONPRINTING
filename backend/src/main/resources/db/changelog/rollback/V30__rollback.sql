ALTER TABLE products ADD COLUMN fit_id BIGINT;

UPDATE products p
SET fit_id = pf.fit_id
FROM product_fits pf
WHERE p.id = pf.product_id;

ALTER TABLE products 
ADD CONSTRAINT fk_product_fit 
FOREIGN KEY (fit_id) REFERENCES fits(id);

DROP INDEX IF EXISTS idx_product_fits_product_id;
DROP INDEX IF EXISTS idx_product_fits_fit_id;
DROP TABLE IF EXISTS product_fits;