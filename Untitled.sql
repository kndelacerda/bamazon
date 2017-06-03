-- CREATE DATABASE seinfeld;
USE seinfeld;

-- CREATE TABLE actors (
-- id INT AUTO_INCREMENT,
-- name VARCHAR(30) NOT NULL,
-- coolness_points INT(10) NULL, 
-- attitude VARCHAR(30) NULL, 
-- PRIMARY KEY(id)
-- );

INSERT INTO actors (name, coolness_points, attitude) VALUES ("actorOne", 5, "good");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("actorTwo", 10, "nice");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("actorThree", 3, "bad");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("actorFour", 2, "okay");


SELECT * FROM actors;