CREATE TABLE questions (
    id SERIAL,
    full_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255),
    company_name VARCHAR(255),
    inquiry_details TEXT,
    preferred_contact_method VARCHAR(255),
    CONSTRAINT pk_questions PRIMARY KEY (id)
);