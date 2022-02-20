
-- Other commands run during the creation process
-- show databases;
-- show tables;

--CREATE TABLE sample (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), message STRING);

--INSERT INTO sample (message) VALUES ('Hello world!');
--select * from sample;

--INSERT INTO sample (message) VALUES ('Hello world AGAINNNNNN!');
--select * from sample;

--ALTER TABLE listings RENAME COLUMN image TO image_path;
--SET enable_experimental_alter_column_type_general = true;
--ALTER TABLE listings ALTER start_stay TYPE int;
--ALTER TABLE listings ALTER end_stay TYPE int;
--drop table listings;

-- Using the default database from our Cockroach DB cluster
use defaultdb;

-- Create the table of listings 
create table listings (
	id UUID primary key default gen_random_uuid(), 
	host_name string not null,
	phone_num string not null,
	email string not null,
	college string not null,
	housing_type string not null,
	address_1 string not null,
	address_2 string, 
	city string not null,
	state string not null,
	zip string not null, 
	start_stay int not null,
	end_stay int not null,
	price decimal not null,
	offering_description string not null,
	num_of_bedrooms string not null, 
	num_of_bathrooms string not null, 
	amenities string not null,
	image_path string not null
);

-- Show all listings in the table
select * from listings;

-- Insert listings information into the table
insert into listings(host_name, phone_num, email, college, housing_type, address_1, address_2, city, state, zip, start_stay, end_stay, price, offering_description, num_of_bedrooms, num_of_bathrooms, amenities, image_path) values
('Sarah FIsher', '919-726-3755', 'sfisher@example.com',	'UNC at Chapel Hill', 'Apartment', '200 Perkins Drive', 'Suite 230',' Chapel Hill', 'NC', '27514', 1653105600, 1661054400, 3800.00, 'Apartment available for 3 month sublet over the summer.', '1', '1', 'Fitness Center, Pool, Fireplace, Washer/Dryer', 'listings/Listing1'),
('Seth Fields', '919-876-3905', 'sfields@example.com', 'UNC at Chapel Hill', 'Condo', '712 Martin Luther King Junior Boulevard', 'H10', 'Chapel Hill', 'NC', '27514', 1655265600, 1686801600, 14395.00, 'Condo available for a 1-year lease. Currently 2 roomates, looking for 2.', '4', '2.5', 'AC, Washer/Dryer, Outdoor Closet', 'listings/Listing2'),
('Kelvin Williams', '919-780-3799', 'kwilliams@example.com', 'UNC at Chapel Hill', 'Townhome', '612 Hillsborough Street', null, 'Chapel Hill', 'NC', '27514', 1654056000, 1656648000, 1200.00, 'Townhome available for a 1-mo sublet this summer.', '2', '1.5', 'AC, Patio, Washer/Dryer', 'listings/Listing3'),
('Clayton Tatum', '704-640-4502', 'ctatum@example.com', 'UNC at Charlotte', 'Apartment', '10035 Dabney Dr', 'Apt 203', 'Charlotte', 'NC', '28213', 1653969600, 1656561600, 495.00, 'Apartment available for 1 month sublet over the summer.', '1', '1', 'Free Trash Removal, Pool, Washer/Dryer', 'listings/Listing4'),
('Nina Moren', '704-990-2297', 'nmoren@example.com', 'UNC at Charlotte', 'Apartment', '9010 University City Blvd', 'Apt E', 'Charlotte', 'NC', '28213', 1647576000, 1648180800, 350.00, 'Apartment available for 2 weeks over Spring Break.', '1', '1', 'AC, Pool', 'listings/Listing5'),
('Taylor Peterson', '704-670-2809', 'tpeterson@example.com', 'UNC at Charlotte', 'Townhome', '1428 Rebecca Bailey Drive', null, 'Charlotte', 'NC', '28262', 1655265600, 1686801600, 6550.00, 'Townhome available for a 1-year sublet.', '1', '1', 'AC, Cable, Heat, Pool', 'listings/Listing6');


