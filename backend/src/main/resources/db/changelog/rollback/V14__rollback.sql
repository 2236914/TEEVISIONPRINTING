-- src/main/resources/db/changelog/rollback/V14__remove_extra_small_column_from_quote_table.sql
ALTER TABLE quotes DROP COLUMN extra_small_quantity;