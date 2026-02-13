-- src/main/resources/db/changelog/rollback/V13__revert_special_request_col_and_additional_notes_type.sql
ALTER TABLE quotes
ADD COLUMN special_request VARCHAR(255);

ALTER TABLE quotes
ALTER COLUMN additional_notes TYPE VARCHAR(255);