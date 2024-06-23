--create user  profile table; 
CREATE TABLE user_profile(id SERIAL,user_id UUID DEFAULT uuid_generate_v4(),user_names TEXT,user_gender VARCHAR  ,user_email TEXT,user_phonenumber VARCHAR,user_nation TEXT,user_verified BOOLEAN);

--create instructors table;
CREATE TABLE instructors(instructor_id UUID DEFAULT uuid_generate_v4(),instructor_names TEXT ,instructor_email TEXT ,instructor_phonenumber VARCHAR  ,instructor_rating INT);

-- create instructor with users id;
CREATE OR REPLACE FUNCTION add_instructor() RETURNS TRIGGER AS $$ BEGIN IF NEW.user_verified THEN INSERT INTO instructors(user_id,instructor_names,instructor_email,instructor_phonenumber) VALUES(NEW.user_id,NEW.user_names,NEW.user_email,NEW.user_phonenumber); END IF; RETURN NEW; END; $$ LANGUAGE plpgsql;

-- add_ instructor trigger  function;
CREATE OR REPLACE FUNCTION add_instructor() RETURNS TRIGGER AS $$ BEGIN IF NEW.user_verified THEN INSERT INTO instructors(instructor_names,instructor_email,instructor_phonenumber) VALUES(NEW.user_names,NEW.user_email,NEW.user_phonenumber); END IF; RETURN NEW; END; $$ LANGUAGE plpgsql;

-- Instructor adding Trigger;
CREATE TRIGGER add_instructor_trigger AFTER INSERT ON user_profile FOR EACH ROW EXECUTE FUNCTION add_instructor();

-- insert into user_profile table ie no NOT NULL constraint on columns;
INSERT INTO user_profile (user_names,user_verified) VALUES('Jane Doe','t');

-- delete by user_id;
DELETE FROM user_profile WHERE user_id = '8b258206-db4d-4562-bdd8-e5d791759a63';

--making user_names unique to enable relation;
ALTER TABLE user_profile  ADD CONSTRAINT user_name_unique  UNIQUE (user_names) ;

--making user_phonenumber unique;
ALTER TABLE user_profile ADD CONSTRAINT add_user_phonenumber_unique  UNIQUE(user_phonenumber);

--making user_email unique
ALTER TABLE user_profile ADD CONSTRAINT add_user_email_unique  UNIQUE (user_email);

--fetch all user profile;
SELECT * FROM user_profile;

-- fetch all instructors;
SELECT * FROM instructors;

--drop instructor id  to avoid  double entry;
ALTER TABLE instructors DROP COLUMN instructor_id;

--right join tables for user_profile and instructors;/*right table content match with items in the left*/
/*Use Case: You want to generate a report that lists all instructors, including their user profile details if available. This is useful for ensuring that all instructors have corresponding user profiles.*/
 SELECT
    user_profile.user_id,
    user_profile.user_names,
    instructors.user_id,
    instructors.instructor_names AS instructor_name
FROM
    user_profile
RIGHT JOIN
    instructors
ON
    user_profile.user_id = instructors.user_id::uuid;

--inner join user_profile and instructors; /*table contents match in both tables*/
/*Use Case: You want to generate a report listing users who are also instructors, showing both their user profile and instructor details. This is useful for identifying dual roles in your organization.*/
SELECT
    user_profile.user_id,
    user_profile.user_names,
    instructors.user_id,
    instructors.instructor_names AS instructor_name
FROM
    user_profile
INNER JOIN
    instructors
ON
    user_profile.user_id = instructors.user_id::uuid;


--left join tables for user_profiles and instructors;/*Left table content match with items in the right*/
/*Use Case: You want to generate a comprehensive user report that includes all users and their instructor details if they are instructors. This can be useful for seeing all users and identifying which ones have additional roles as instructors.*/
SELECT                    
    user_profile.user_id, 
    user_profile.user_names, 
    instructors.user_id, 
    instructors.instructor_names AS instructor_name
FROM 
    user_profile
LEFT JOIN 
    instructors 
ON 
    user_profile.user_id = instructors.user_id::uuid;

--Alter table column  type;
ALTER TABLE instructors
ALTER COLUMN user_id TYPE UUID USING user_id::UUID;

--create courses table
CREATE TABLE courses(id SERIAL,course_id UUID DEFAULT uuid_generate_v4(),course_instructors TEXT,course_name TEXT,course_introduction_statement TEXT,course_overview TEXT,course_content TEXT);

--adding primary key;
ALTER TABLE courses ADD PRIMARY KEY(course_id);

--create enrolled students table;
CREATE TABLE enrolled_students(id SERIAL, course_id UUID REFERENCES courses(course_id));

--add new column aenrollement date;
ALTER TABLE enrolled_students ADD COLUMN enrollment_date DATE;

--insert into courses;
INSERT INTO  courses (course_instructors,course_name,course_introduction_statement,course_overview,course_content) VALUES('John Doe','Classrooms of Equality: Gender Dynamics in Education','My name is Emma Mwangi and I will be your instructor, guiding you through the course. Classes will be online both live and pre-recorded and will provide links for the classes. Assignments and topic materials will be available once the topic is unlocked by the instructor for every week of class participation.','In the pursuit of a more equitable society, education stands as a fundamental pillar shaping the future of individuals and communities alike. However, the classrooms where this education takes place are often microcosms reflecting broader societal dynamics, including gender inequalities. This course delves into the intricate ways gender influences educational experiences, opportunities, and outcomes. By examining these dynamics, we aim to uncover the subtle and overt biases that persist in educational settings and explore strategies to foster a more inclusive and empowering learning environment for all genders. Through this exploration, we seek to illuminate the path towards true equality in education, ensuring that every student has the opportunity to thrive and succeed, irrespective of gender.','');

--alter table courses to make each course name unique;
 ALTER TABLE courses ADD CONSTRAINT unique_course_name  UNIQUE(course_name);

--create modified courses table;
CREATE TABLE courses (
    id SERIAL,
    course_id UUID DEFAULT uuid_generate_v4()  PRIMARY KEY ,
    course_instructors TEXT,
    course_name TEXT UNIQUE,
    course_category TEXT,
    course_introduction_statement TEXT,
    course_overview TEXT,
    course_content TEXT,
    purchase_status BOOLEAN,
    course_price TEXT   
);

--create modified enrolled users table;
CREATE TABLE enrolled_students (
    id SERIAL PRIMARY KEY,
enrollment_id UUID DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(course_id),
    student_id UUID REFERENCES user_profile(user_id),
     enrollment_date DATE
);

--insert into enrolled_students trigger function;
CREATE OR REPLACE FUNCTION enroll_student_on_purchase()
RETURNS TRIGGER AS $$
BEGIN
    -- Check if the purchase status is set to true
    IF NEW.purchase_status = true THEN
        -- Insert into enrolled_students table
        INSERT INTO enrolled_students (course_id, user_id, enrollment_date)
        VALUES (NEW.course_id, NEW.user_id, CURRENT_DATE);

        -- Debugging: Log the enrollment
        RAISE NOTICE 'Enrolled student in course. Course ID: %, User ID: %', NEW.course_id, NEW.user_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



--triggering the function;
CREATE TRIGGER after_course_purchase
AFTER UPDATE OF purchase_status ON courses
FOR EACH ROW
EXECUTE FUNCTION enroll_student_on_purchase();

--create table for purchases;
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    purchase_id UUID DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES user_profile(user_id),
    course_id UUID REFERENCES courses(course_id),
    purchase_date DATE DEFAULT CURRENT_DATE
);

--create trigger function for purchases table;
CREATE OR REPLACE FUNCTION populate_purchases()
RETURNS TRIGGER AS $$
BEGIN
    -- Insert into purchases table
    INSERT INTO purchases (user_id, course_id)
    VALUES (NEW.user_id, NEW.course_id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


--trigger for purchase table;
CREATE TRIGGER after_purchase_status_update
AFTER UPDATE OF purchase_status ON courses
FOR EACH ROW
WHEN (NEW.purchase_status = true)
EXECUTE FUNCTION populate_purchases();


-- table triggerd update purchases table;
UPDATE courses
SET purchase_status = true,
    user_id = '48dc0da5-539c-443f-b60f-3f84a7b8b40f' -- UUID of Alice
WHERE course_id = '0617f190-60bd-44d8-8432-73f67789aca2';


--insert into courses example;
INSERT INTO courses ( course_name, course_instructors, course_introduction_statement, course_overview, course_content, purchase_status, course_price)
VALUES (
    'Introduction to SQL', -- Course name
    'John Doe', -- Instructors
    'Learn the basics of SQL programming.', -- Introduction statement
    'This course covers fundamental SQL concepts and syntax.', -- Overview
    '1. SQL Introduction\n2. SQL Queries\n3. SQL Joins', -- Course content (example)
    true, -- Purchase status (assuming not purchased initially)
    '49.99 USD' -- Course price
);
