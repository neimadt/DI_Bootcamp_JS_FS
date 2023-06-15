SELECT name as carName, color FROM cars
	
UNION

SELECT name as colorName, 0 AS color FROM colors 

ORDER BY  color ASC, carName DESC;