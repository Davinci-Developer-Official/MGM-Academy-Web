/* 
        This is the official mgm academy schema.
        postgresSQL vercel.
*/

--roles
CREATE TABLE Roles(
    id SERIAL,
    role_id VARCHAR PRIMARY KEY,
    role_name VARCHAR UNIQUE NOT NULL
);

-- Users Table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR UNIQUE ,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR UNIQUE NOT NULL,
    role_id INT REFERENCES Roles(role_id),
    role VARCHAR NOT NULL CHECK (role IN ('student', 'instructor', 'admin')) -- Simplified generic role constraint check role ie column check constraint name is system generated
);