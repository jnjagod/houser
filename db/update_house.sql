update houses
set name = ${name}, address = ${address}, city = ${city}, state = ${state}, zipcode = ${zipcode}
where house_id = $1;

select * from houses
order by house_id asc;