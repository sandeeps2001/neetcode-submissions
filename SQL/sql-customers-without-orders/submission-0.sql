-- Write your query below
select name from customers C left join orders o on c.id = o.customer_id WHERE o.customer_id is NULL