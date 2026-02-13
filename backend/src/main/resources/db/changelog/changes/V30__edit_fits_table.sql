CREATE TABLE product_fits (
    id BIGSERIAL PRIMARY KEY,
    product_id BIGINT NOT NULL,
    fit_id BIGINT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT,
    FOREIGN KEY (fit_id) REFERENCES fits(id) ON DELETE RESTRICT,
    UNIQUE(product_id, fit_id)
);

CREATE INDEX idx_product_fits_product_id ON product_fits(product_id);
CREATE INDEX idx_product_fits_fit_id ON product_fits(fit_id);

INSERT INTO product_fits (product_id, fit_id)
SELECT id, fit_id 
FROM products 
WHERE fit_id IS NOT NULL;

SELECT COUNT(*) as products_with_fit_id FROM products WHERE fit_id IS NOT NULL;
SELECT COUNT(*) as rows_in_product_fits FROM product_fits;

ALTER TABLE products DROP CONSTRAINT IF EXISTS fk_product_fit;

ALTER TABLE products DROP COLUMN IF EXISTS fit_id;