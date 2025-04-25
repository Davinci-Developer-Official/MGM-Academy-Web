-- courses table
CREATE TABLE detailed_courses (
    course_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_name VARCHAR(255) NOT NULL,
    course_cover VARCHAR(500),
    course_instructor VARCHAR(255),
    instructor_id UUID,
    course_video VARCHAR(500),
    course_url VARCHAR(500),
    course_description TEXT,
    course_category VARCHAR(100),
    course_price DECIMAL(10,2),
    course_offer VARCHAR(50),
    is_paid BOOLEAN DEFAULT TRUE,
    number_students INTEGER DEFAULT 0,
    number_reviews INTEGER DEFAULT 0,
    number_lecturers INTEGER DEFAULT 1,
    course_difficulty VARCHAR(50) CHECK (course_difficulty IN ('beginner', 'intermediate', 'advanced')),
    course_instructors TEXT[], 
    course_duration VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

-- insert into courses
INSERT INTO detailed_courses (
    course_name, course_cover, course_instructor, instructor_id, 
    course_video, course_url, course_description, course_category, 
    course_price, course_offer, is_paid, number_students, 
    number_reviews, number_lecturers, course_difficulty, 
    course_instructors, course_duration
) VALUES 
(
    'Full-Stack Web Development', 
    'https://example.com/webdev.jpg', 
    'John Doe', uuid_generate_v4(), 
    'https://example.com/intro.mp4', 
    'https://example.com/course/webdev', 
    'Learn full-stack development using React, Node.js, PostgreSQL.', 
    'Programming', 
    199.99, '10% Off', TRUE, 
    1200, 250, 3, 'intermediate', 
    ARRAY['John Doe', 'Jane Smith', 'Mike Ross'], 
    '6 months'
),
(
    'Data Science with Python', 
    'https://example.com/ds.jpg', 
    'Alice Johnson', uuid_generate_v4(), 
    'https://example.com/ds_intro.mp4', 
    'https://example.com/course/ds', 
    'Master data analysis and machine learning using Python.', 
    'Data Science', 
    299.99, '20% Off', TRUE, 
    850, 180, 2, 'advanced', 
    ARRAY['Alice Johnson', 'Bob Martin'], 
    '4 months'
);
