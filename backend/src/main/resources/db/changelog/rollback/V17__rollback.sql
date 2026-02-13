-- src/main/resources/db/changelog/rollback/V17__add_unique_name_constraint_in_colors.sql
ALTER TABLE colors
ADD CONSTRAINT uq_color_name UNIQUE (color_name);