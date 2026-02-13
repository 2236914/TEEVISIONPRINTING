CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX idx_colors_name_trgm ON colors USING GIN (name gin_trgm_ops);

SET pg_trgm.similarity_threshold = 0.05;