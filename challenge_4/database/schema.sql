CREATE DATABASE IF NOT EXISTS Connect4;

USE Connect4;

CREATE TABLE userwins (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
player INT NOT NULL,
wins INT NOT NULL
);

