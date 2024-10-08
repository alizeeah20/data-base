CREATE TABLE IF NOT EXISTS PRODUCTS (
    PRODUCT_ID TEXT,
    PRODUCT_NAME TEXT,
    SUPPLIER_ID TEXT,
    CATEGORY_ID TEXT,
    UNIT TEXT,
    PRICE REAL
);

INSERT INTO PRODUCTS (PRODUCT_ID, PRODUCT_NAME, SUPPLIER_ID, CATEGORY_ID, UNIT, PRICE) VALUES
('1', 'MINE APOLLO', '1', '1', '10 BOXES•20 PACKETS', 50),
('2', 'PHEONIX', '1', '1', '24-12 OZ BOTTLES', 30),
('3', 'YOP', '1', '2', '50-75 ML BOTTLES', 50),
('4', 'RIBENA SYRUP', '2', '2', '50-75 ML BOTTLES', 30);
SELECT COUNT(PRODUCT_ID) FROM PRODUCTS;
SELECT AVG(PRICE) FROM PRODUCTS;
SELECT SUM(PRICE) FROM PRODUCTS;