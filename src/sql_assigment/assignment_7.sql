SELECT
    strftime('%Y', o.order_date) AS year,
    ROUND(SUM(odtl.quantity * p.unit_price * (1 - odtl.discount)), 2) AS total_sales
FROM order_details odtl
JOIN orders o ON o.order_id = odtl.order_id
join products p on p.product_id = odtl.product_id
WHERE o.ship_region = 'Western Europe'
GROUP BY year
ORDER BY year;
