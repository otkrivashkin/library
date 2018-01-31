CREATE TABLE authors (
  id         BIGSERIAL NOT NULL CONSTRAINT authors_pkey PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  first_name VARCHAR(255),
  last_name  VARCHAR(255)
);
CREATE TABLE books (
  id               BIGSERIAL NOT NULL CONSTRAINT books_pkey PRIMARY KEY,
  created_at       TIMESTAMP,
  updated_at       TIMESTAMP,
  genre            VARCHAR(255),
  title            VARCHAR(255),
  publication_date TIMESTAMP,
  author_id        BIGINT REFERENCES authors
);