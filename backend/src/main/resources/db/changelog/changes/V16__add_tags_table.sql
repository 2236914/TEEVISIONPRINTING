CREATE TABLE tags (
    id SERIAL,
    tag_name VARCHAR(255) NOT NULL,
    CONSTRAINT pk_tags PRIMARY KEY (id),
    CONSTRAINT uq_tag_name UNIQUE (tag_name)
);

CREATE TABLE product_tags (
    product_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    CONSTRAINT pk_product_tags PRIMARY KEY (product_id, tag_id),
    CONSTRAINT fk_product_tags_product
        FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT fk_product_tags_tag
        FOREIGN KEY (tag_id) REFERENCES tags(id)
);