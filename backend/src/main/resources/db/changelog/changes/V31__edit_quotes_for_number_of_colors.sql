ALTER TABLE quotes ADD COLUMN front_number_of_colors INTEGER DEFAULT 0 NOT NULL;
ALTER TABLE quotes ADD COLUMN back_number_of_colors INTEGER DEFAULT 0 NOT NULL;
ALTER TABLE quotes ADD CONSTRAINT chk_front_colors CHECK (front_number_of_colors >= 0 AND front_number_of_colors <= 6);
ALTER TABLE quotes ADD CONSTRAINT chk_back_colors CHECK (back_number_of_colors >= 0 AND back_number_of_colors <= 6);