CREATE TABLE users (
    id serial NOT NULL PRIMARY KEY UNIQUE,
    username VARCHAR (25) NOT NULL UNIQUE,
    email  VARCHAR (255) NOT NULL UNIQUE,
    first_name VARCHAR (25) NOT NULL,
    last_name VARCHAR (25) NOT NULL,
    password  VARCHAR (50) NOT NULL
);