CREATE TABLE courses (
    course_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE,
    course_cover VARCHAR, -- Image URL or video URL
    course_title VARCHAR(255) NOT NULL,
    course_description TEXT,
    instructor_id VARCHAR, -- Assuming there's a table for instructors
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chapters (
    chapter_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    course_id UUID REFERENCES courses(course_id) ON DELETE CASCADE,
    chapter_title VARCHAR(255) NOT NULL,
    chapter_description TEXT,
    chapter_order INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (course_id, chapter_order) -- Ensures chapter order is unique within a course
);
--order trigger function
CREATE OR REPLACE FUNCTION set_chapter_order()
RETURNS TRIGGER AS $$
BEGIN
    -- Set chapter_order to the next available number for the same course_id
    NEW.chapter_order := COALESCE(
        (SELECT MAX(chapter_order) FROM Chapters WHERE course_id = NEW.course_id), 0
    ) + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
--chapter order trigger
CREATE TRIGGER trigger_set_chapter_order
BEFORE INSERT ON Chapters
FOR EACH ROW
EXECUTE FUNCTION set_chapter_order();


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
