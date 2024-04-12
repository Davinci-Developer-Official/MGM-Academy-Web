import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  const id_generator = () => {
    const id = crypto.randomUUID().toString();
    return id;
  };

  try {
    const requestBody = await request.json();
    const { course_id, chapter_cover, chapter_title, chapter_description, chapter_content, chapter_video, fileData } = requestBody;

    if (!chapter_title ) {
      throw new Error('chapter title required');
    }

    const chapter_id = id_generator();
    //const avatar = '/public/avatar.png'; // assuming this is a static path

    await sql`INSERT INTO chapters (chapter_id,course_id, chapter_cover, chapter_title, chapter_description, chapter_content, chapter_video)  VALUES (${chapter_id},${course_id}, ${chapter_cover},  ${chapter_title}, ${chapter_description}, ${chapter_content},${chapter_video});`;
    for (const fileUrl of fileData) {
      await sql`INSERT INTO chaptersFiles (chapter_id, file_url) VALUES (${chapter_id},${fileUrl})`;
    }
    const students = await sql`SELECT * FROM chapters;`;
    return NextResponse.json( students.rows , { status: 200 });
  } catch (error:any) {
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