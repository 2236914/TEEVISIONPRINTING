-- src/main/resources/db/changelog/rollback/V19__add_unique_hex_code_constraint_in_colors.sql
ALTER TABLE colors
ADD CONSTRAINT uq_color_hex_code UNIQUE (color_hex_code);