insert into houses (name, address, city, state, zipcode)
values (${name}, ${address}, ${city}, ${state}, ${zipcode});
select * from houses
order by house_id asc;
