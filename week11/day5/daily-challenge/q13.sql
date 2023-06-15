SELECT first_name, last_name, CONCAT(first_name, ' ', last_name) AS Full, LENGTH(CONCAT(first_name, ' ', last_name))
FROM employees 