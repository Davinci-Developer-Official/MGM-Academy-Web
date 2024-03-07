import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(request: Request) {
  const id_generator = () => {
    const id = crypto.randomUUID().toString();
    return id;
  };
  const { searchParams } = new URL(request.url);
  const student_id = id_generator();
  const avatar = '/public/avatar.png'; // assuming this is a static path
  const username = searchParams.get('username');
  const first_name = searchParams.get('first_name');
  const middle_name = searchParams.get('middle_name');
  const last_name = searchParams.get('last_name');
  const email = searchParams.get('email');
  const gender = searchParams.get('gender');
  const nationality = searchParams.get('nationality');
  const residence = searchParams.get('residence');
  const phone_number = searchParams.get('phone_number');
  const date_of_birth = searchParams.get('date_of_birth');
  const exposure = searchParams.get("exposure");
  const password = searchParams.get("password");

  try {
    if (!username || !first_name) throw new Error('Username and First Name are required');
    await sql`INSERT INTO students (student_id, Avatar, username, first_name, middle_name, last_name, email, gender, nationality, residence, phone_number, date_of_birth,exposure,password) 
          VALUES (${student_id}, ${avatar}, ${username}, ${first_name}, ${middle_name}, ${last_name}, ${email}, ${gender}, ${nationality}, ${residence}, ${phone_number}, ${date_of_birth},${exposure},${password});`;
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const students = await sql`SELECT * FROM students;`;
  return NextResponse.json({ students: students.rows }, { status: 200 });
}

{/*
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_id UUID NOT NULL,
    Avatar VARCHAR,
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

*/}