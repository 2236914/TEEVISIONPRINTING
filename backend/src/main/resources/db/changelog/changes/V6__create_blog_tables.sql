CREATE TABLE blogs (
    id SERIAL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    image_src VARCHAR(255),
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT pk_blogs PRIMARY KEY (id)
);