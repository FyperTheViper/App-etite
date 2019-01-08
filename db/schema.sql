DROP DATABASE IF EXISTS burger_db;
CREATE database burger_db;
USE burger_db;

CREATE TABLE eatthis (
    id INT AUTO_INCREMENT NOT NULL,
    food_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);