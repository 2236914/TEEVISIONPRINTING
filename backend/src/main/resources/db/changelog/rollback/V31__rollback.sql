ALTER TABLE quotes DROP CONSTRAINT IF EXISTS chk_front_colors;
ALTER TABLE quotes DROP CONSTRAINT IF EXISTS chk_back_colors;
ALTER TABLE quotes DROP COLUMN IF EXISTS front_number_of_colors;
ALTER TABLE quotes DROP COLUMN IF EXISTS back_number_of_colors;