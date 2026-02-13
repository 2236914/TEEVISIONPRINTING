CREATE TABLE color_tags (
    color_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    CONSTRAINT pk_color_tags PRIMARY KEY (color_id, tag_id),
    CONSTRAINT fk_color_tags_color
        FOREIGN KEY (color_id) REFERENCES colors(id),
    CONSTRAINT fk_color_tags_tag
        FOREIGN KEY (tag_id) REFERENCES tags(id)
);