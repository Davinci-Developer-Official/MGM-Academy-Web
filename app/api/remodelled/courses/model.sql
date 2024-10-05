CREATE TABLE Courses (
    course_id uuid_generate_v4() UUID PRIMARY KEY,
    course_cover VARCHAR, --image url / video url
    course_title VARCHAR(255) NOT NULL,
    course_description TEXT,
    instructor_id INT, -- Assuming there's a table for instructors
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Chapters (
    chapter_id uuid_generate_v4() UUID UNIQUE PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    chapter_title VARCHAR(255) NOT NULL,
    chapter_description VARCHAR ,
    chapter_order INT NOT NULL, -- To define the order of chapters within a course
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sub_chapters (
    sub_chapter_id uuid_generate_v4 UUID PRIMARY KEY,
    chapter_id INT REFERENCES chapters(chapter_id),
    sub_chapter_title VARCHAR(255) NOT NULL,
    sub_chapter_description VARCHAR
    sub_chapter_order INT NOT NULL, -- Order within the chapter
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Documents (
    document_id uuid_generate_v4 UUID PRIMARY KEY,
    document_title VARCHAR(255) NOT NULL,
    document_url TEXT NOT NULL, -- URL of the document (can be hosted elsewhere)
    course_id INT REFERENCES courses(course_id),
    chapter_id INT REFERENCES chapters(chapter_id),
    sub_chapter_id INT REFERENCES sub_chapters(sub_chapter_id),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE files (
    file_id SERIAL PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL, -- URL or path to the file
    course_id INT REFERENCES courses(course_id),
    chapter_id INT REFERENCES chapters(chapter_id),
    sub_chapter_id INT REFERENCES sub_chapters(sub_chapter_id),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
