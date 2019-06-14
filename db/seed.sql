create table houses (
    house_id serial primary key,
    name varchar,
    address varchar,
    city varchar(50),
    state varchar(30),
    zipcode int
)