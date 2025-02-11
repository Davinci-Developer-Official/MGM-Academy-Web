--creating  a new postgres user
CREATE USER tom WITH PASSWORD = 'postgres';

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

--remodelled courses
 CREATE TABLE courses(
    id SERIAL ,
    course_id UUID UNIQUE DEFAULT uuid_generate_v4(),
    course_title VARCHAR,
    course_description VARCHAR,
    

 )

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


--student academic records
CREATE TABLE student_academics (
id SERIAL,
entry_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY ,
student_id TEXT,
student_name TEXT,
course_id TEXT,
enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
completion_date TEXT,
instructor_id TEXT,
instructor_name TEXT,
cat_1 TEXT,
cat_2 TEXT,
cat_3 TEXT,
cat_4 TEXT,
quiz_1 TEXT,
quiz_2 TEXT,
quiz_3 TEXT,
quiz_4 TEXT,
avarage_grade TEXT,
total_marks TEXT) ;