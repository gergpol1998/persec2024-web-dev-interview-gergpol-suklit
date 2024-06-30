SELECT p.product_name
FROM (
    SELECT p.product_name
    FROM order_details odtl
    JOIN products p ON p.product_id = odtl.product_id
    JOIN orders o ON o.order_id = odtl.order_id
    WHERE strftime('%Y', o.order_date) = '2016'
    GROUP BY p.product_id
    ORDER BY SUM(odtl.quantity) DESC
    LIMIT 5
) AS p
JOIN (
    SELECT p.product_name
    FROM order_details odtl
    JOIN products p ON p.product_id = odtl.product_id
    JOIN orders o ON o.order_id = odtl.order_id
    WHERE strftime('%Y', o.order_date) = '2017'
    GROUP BY p.product_id
    ORDER BY SUM(odtl.quantity) DESC
    LIMIT 5
) AS p2 ON p.product_name = p2.product_name;
