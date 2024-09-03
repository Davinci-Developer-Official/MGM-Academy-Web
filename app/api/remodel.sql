--creating  a new postgres user
CREATE USER tom WITH PASSWORD 'postgres';

--tom Database
CREATE DATABASE tom;

-- student profile
CREATE TABLE student_profile (
    id SERIAL PRIMARY KEY,
    avatar VARCHAR,
    names VARCHAR,
    email VARCHAR UNIQUE,
    phonenumber VARCHAR,
    gender VARCHAR,
    password VARCHAR,
    student_id UUID UNIQUE  DEFAULT uuid_generate_v4(),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- intructor profile
 CREATE TABLE instructor_profile (
    id SERIAL PRIMARY KEY,
    avatar VARCHAR,
    names VARCHAR,
    email VARCHAR UNIQUE,
    phonenumber VARCHAR,
    gender VARCHAR,
    password VARCHAR,
    instructor_id UUID UNIQUE  DEFAULT uuid_generate_v4(),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--courses table
 CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_id UUID UNIQUE  DEFAULT uuid_generate_v4(),
    instructor_id UUID REFERENCES instructor_profile(instructor_id),
    course_name VARCHAR,
    course_introduction VARCHAR,
    course_description TEXT,
    course_price VARCHAR,
    course_rating VARCHAR,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--list of each enrollement;
CREATE TABLE enrollement (
    id SERIAL,
    enrollement_id UUID UNIQUE DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES student_profile(student_id),
    instructor_id UUID REFERENCES instructor_profile(instructor_id),
    course_id UUID REFERENCES courses(course_id),
    enrolled TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--onclick single enrollment;
SELECT 
    student_profile.names AS student_name,
    student_profile.email AS student_email,
    courses.course_name,
    instructor_profile.names AS instructor_name,
    instructor_profile.email AS instructor_email,
    courses.course_rating,
    enrollment.enrolled
FROM 
    enrollment
INNER JOIN 
    student_profile ON enrollment.student_id = student_profile.student_id
INNER JOIN 
    courses ON enrollment.course_id = courses.course_id
INNER JOIN 
    instructor_profile ON enrollment.instructor_id = instructor_profile.instructor_id;
