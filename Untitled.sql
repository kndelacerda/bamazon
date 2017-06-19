USE burgers_db;

-- CREATE TABLE burgers (
-- id INTEGER(11) AUTO_INCREMENT NOT NULL,
-- burger_name VARCHAR(30) NOT NULL,
-- devoured BOOLEAN NOT NULL,
-- date_created TIMESTAMP,
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE burgers (
-- id INTEGER(11) AUTO_INCREMENT NOT NULL,
-- burger_name VARCHAR(30) NOT NULL,
-- devoured BOOLEAN NOT NULL,
-- date_created TIMESTAMP,
-- PRIMARY KEY (id)
-- );

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(30) NOT NULL,
  `devoured` TINYINT(1),
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  				   ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));



select * from burgers_db.burgers;