

CREATE TABLE Users (
    id SERIAL ,
    user_id UUID NOT NULL PRIMARY KEY ,
    first_name VARCHAR,
    middle_name VARCHAR,
    last_name VARCHAR,
    avatar VARCHAR,
    role VARCHAR(100),
    contact_tip TEXT,
    email VARCHAR,
    gender VARCHAR,
    nationality VARCHAR,
    residence VARCHAR,
    phone_number VARCHAR,
    date_of_birth DATE,
    exposure VARCHAR,
    password VARCHAR,
    time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Instructors (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Insert Example: Inserting an instructor
INSERT INTO Users (user_id, first_name, last_name, role, contact_tip, email)
VALUES ('123e4567-e89b-12d3-a456-426614174000', 'Emma', 'Mwangi', 'instructor', 'Hi 👋 contact instructor', 'emma@example.com');

INSERT INTO Instructors (user_id)
SELECT user_id FROM Users WHERE role = 'instructor' AND first_name = 'Emma' AND last_name = 'Mwangi';


CREATE TABLE Course (
    id SERIAL,
    cover_image VARCHAR,
    introduction_video VARCHAR,
    course_id UUID NOT NULL  PRIMARY KEY ,
    course_name VARCHAR NOT NULL,
    course_requirements TEXT[],
    unit_code VARCHAR(10) NOT NULL,
    course_category VARCHAR,
    instructor_id INT REFERENCES Instructor(id),
    course_instructor INT REFERENCES users(instructor_name),
    introduction_statement VARCHAR,
    overview VARCHAR,
    course_rating VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

//old
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_id UUID NOT NULL,
    avatar VARCHAR,
    first_name VARCHAR,
    middle_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    gender VARCHAR,
    nationality VARCHAR,
    residence VARCHAR,
    phone_number VARCHAR,
    date_of_birth DATE,
    exposure VARCHAR,
    password VARCHAR,
    time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
//old
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_id UUID NOT NULL,
    cover_image VARCHAR,
    cover_video VARCHAR,
    course_name VARCHAR NOT NULL,
    course_category VARCHAR,
    unit_code VARCHAR,
    course_description VARCHAR,
    course_instructor VARCHAR,
    course_requirements VARCHAR,
    course_rating VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);