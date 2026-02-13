-- src/main/resources/db/changelog/rollback/V20__remove_trigram_from_color_name.sql
DROP INDEX IF EXISTS idx_colors_name_trgm;

DROP EXTENSION IF EXISTS pg_trgm;