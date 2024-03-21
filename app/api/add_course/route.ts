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
    const { cover_image,cover_video, course_name, course_category, unit_code, course_description, course_instructor, course_requirements } = requestBody;

    if (!course_name ) {
      throw new Error('Username and First Name are required');
    }

    const course_id = id_generator();
    //const avatar = '/public/avatar.png'; // assuming this is a static path

    await sql`INSERT INTO courses (course_id,  cover_image,cover_video, course_name, course_category, unit_code, course_description, course_instructor, course_requirements) 
                VALUES (${course_id}, ${cover_image}, ${cover_video}, ${course_name}, ${course_category}, ${unit_code}, ${course_description}, ${course_instructor}, ${course_requirements});`;

    const students = await sql`SELECT * FROM courses;`;
    return NextResponse.json( students.rows , { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}