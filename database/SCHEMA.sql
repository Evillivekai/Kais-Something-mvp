DROP DATABASE IF EXISTS coffee_collection;
CREATE DATABASE coffee_collection;

\c coffee_collection;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  user_password INT NOT NULL
);

DROP TABLE IF EXISTS coffee_list;

CREATE TABLE coffee_list (
  id SERIAL PRIMARY KEY,
  cof_name VARCHAR(50) NOT NULL,
  cof_category VARCHAR(50) NOT NULL,
  cof_taste VARCHAR(30) NOT NULL,
  cof_origin VARCHAR(50) NOT NULL,
  cof_pic TEXT NOT NULL,
  cof_description TEXT
);

DROP TABLE IF EXISTS users_coffee;

CREATE TABLE users_coffee (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  cof_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (cof_id) REFERENCES coffee_list(id)
);