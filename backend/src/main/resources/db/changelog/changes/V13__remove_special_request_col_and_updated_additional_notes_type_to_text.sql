ALTER TABLE quotes
DROP COLUMN special_request;

ALTER TABLE quotes
ALTER COLUMN additional_notes TYPE TEXT;