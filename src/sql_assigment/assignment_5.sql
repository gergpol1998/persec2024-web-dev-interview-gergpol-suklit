SELECT p.product_name, SUM(odtl.quantity) as total_sales
FROM order_details odtl
JOIN products p ON p.product_id = odtl.product_id
JOIN orders o ON o.order_id = odtl.order_id
WHERE strftime('%Y', o.order_date) = '2016'
GROUP BY p.product_id
ORDER BY total_sales DESC
LIMIT 5
