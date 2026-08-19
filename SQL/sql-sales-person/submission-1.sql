-- Write your query below
select name from sales_person where sales_id NOT IN (select o.sales_id from orders o inner join company c on o.com_id = c.com_id where c.name = 'CRIMSON' group by o.sales_id)