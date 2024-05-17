import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { v5 as uuidv5 } from 'uuid';

// Define a namespace for UUID generation
const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'; // Example namespace UUID

export async function POST(request: Request) {
  const id_generator = () => {
    const id = crypto.randomUUID().toString();
    return id;
  };

  const stringToUUID = (name: string) => {
    return uuidv5(name, NAMESPACE);
  };

  try {
    const requestBody = await request.json();
    const { course_id, chapter_cover, chapter_title, chapter_description, chapter_content, chapter_video, fileData } = requestBody;

    if (!chapter_title) {
      throw new Error('Chapter title is required');
    }

    const chapter_id = id_generator();
    const course_uuid = stringToUUID(course_id); // Convert course_id to UUID

    // Insert chapter into database
    await sql`INSERT INTO chapters (chapter_id, course_id, chapter_cover, chapter_title, chapter_description, chapter_content, chapter_video) VALUES (${chapter_id}, ${course_uuid}, ${chapter_cover}, ${chapter_title}, ${chapter_description}, ${chapter_content}, ${chapter_video})`;

    // Insert files into database
    for (const fileUrl of fileData) {
      await sql`INSERT INTO chaptersFiles (chapter_id, file_url) VALUES (${chapter_id}, ${fileUrl})`;
    }

    // Retrieve all chapters (just for demonstration, you might not need this)
    const chapters = await sql`SELECT * FROM chapters`;

    return NextResponse.json(chapters.rows, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}




{/*CREATE TABLE chapters (
    id SERIAL PRIMARY KEY,
    chapter_id UUID,
    course_id UUID,
    chapter_cover VARCHAR, 
    chapter_title VARCHAR(100), 
    chapter_description VARCHAR, 
    chapter_content VARCHAR,
    chapter_video VARCHAR
);

*/}

{/*CREATE TABLE chaptersFiles (
    file_id SERIAL PRIMARY KEY,
    chapters_id UUID,
    file_url VARCHAR(255)
  )
*/}