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
    const { chapter_id, subtopic_cover, subtopic_title, subtopic_description, subtopic_content, subtopic_video,fileData } = requestBody;

    if (!subtopic_title ) {
      throw new Error('chapter title required');
    }

    const subtopic_id = id_generator();
    //const avatar = '/public/avatar.png'; // assuming this is a static path

    await sql`INSERT INTO subtopics (subtopic_id,chapter_id, subtopic_cover, subtopic_title, subtopic_description, subtopic_content, subtopic_video)  VALUES (${chapter_id}, ${subtopic_cover},  ${subtopic_title}, ${subtopic_description}, ${subtopic_content},${subtopic_video});`;
    for (const fileUrl of fileData) {
      await sql`INSERT INTO subTopicFiles (subtopic_id, file_url) VALUES (${subtopic_id},${fileUrl})`;
    }
    const students = await sql`SELECT * FROM subtopics;`;
    return NextResponse.json( students.rows , { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



{/* CREATE TABLE subtopics (
    id SERIAL ,
    subtopic_id UUID PRIMARY KEY,
    chapter_id UUID ,
    subtopic_cover VARCHAR,
    subtopic_title VARCHAR[(100)],
    subtopic_content VARCHAR,
    subtopic_video VARCHAR
);

*/}
{/*CREATE TABLE subTopicFiles (
    file_id SERIAL PRIMARY KEY,
    subtopic_id UUID,
    file_url VARCHAR[]
  )
*/}