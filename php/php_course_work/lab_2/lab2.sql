create database aliendatabase;

create table aliens_abduction (
first_name varchar(30),
last_name varchar(30),
when_it_happened varchar(30),
how_long varchar(30),
how_many varchar(30),
alien_description varchar(30),
what_they_did varchar(30),
fang_spotted varchar(30),
other varchar(30),
email varchar(30)
);

insert into aliens_abduction (first_name, last_name, when_it_happened, how_long, how_many, alien_description, what_they_did, fang_spotted, other, email)
values ('Sally', 'Jones', '3 days ago', '1 day', 'four', 'green with six tentacles', 'We just talked and played with a dog', 'yes', 'I may have seen your dog. Contact me.', 'sally@gregs-list.net');

select * from aliens_abduction;
