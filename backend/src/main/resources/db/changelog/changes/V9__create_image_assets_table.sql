CREATE TABLE image_assets (
    id SERIAL,
    image_url VARCHAR(255) NOT NULL,
    CONSTRAINT pk_image_assets PRIMARY KEY (id)
);