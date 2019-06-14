delete from houses where house_id = $1;

select * from houses
order by house_id asc;