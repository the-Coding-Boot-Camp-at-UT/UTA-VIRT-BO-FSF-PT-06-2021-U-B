DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE prices (
  id INTEGER NOT NULL,
  price DECIMAL(10,2)
);

CREATE TABLE books(
  id INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  price INTEGER,
  in_stock BOOLEAN
);
