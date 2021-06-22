DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE books(
  id INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL
);

CREATE TABLE categories(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE prices(
  id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
