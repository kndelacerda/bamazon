-- CREATE database Bamazon;

USE Bamazon;

-- CREATE TABLE products (
-- item_id INT AUTO_INCREMENT NOT NULL,
-- product_name VARCHAR(100) NULL,
-- department_name VARCHAR(100) NULL,
-- price DECIMAL(10,2) NULL,
-- stock_quantity INT(10) NULL,
-- PRIMARY KEY (item_id)
-- );

ALTER TABLE products
MODIFY COLUMN price DECIMAL(10,2) NULL;

ALTER TABLE products
MODIFY COLUMN stock_quantity INT(10) NULL;
  
--   INSERT INTO products (product_name, department_name, price, stock_quantity)
--   VALUES
--   ('headphones', 'eletronics', '200', '50'),
--   ('mug', 'dishware', '2', '100'),
--   ('iPhone', 'electronics', '700', '1000'),
--   ('handbag', 'apparel', '100', '10'),
--   ('dog_treat', 'pets', '1', '20'),
--   ('dog_collar', 'pets', '7', '20'),
--   ('k_cup_pk_hazelnut', 'grocery', '10', '20'),
--   ('k_cup_pk_caramel', 'grocery', '10', '20'),
--   ('bucket', 'garden', '2', '10'),
--   ('pillow', 'home', '2', '20');
  
SELECT * FROM products;
