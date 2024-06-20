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
    const {avatar, username, first_name, middle_name, last_name, email, gender, nationality, residence, phone_number, date_of_birth, exposure, password } = requestBody;

    if (!username || !first_name) {
      throw new Error('Username and First Name are required');
    }

    const student_id = id_generator();
    //const avatar = '/public/avatar.png'; // assuming this is a static path

    await sql`INSERT INTO students (student_id, avatar, username, first_name, middle_name, last_name, email, gender, nationality, residence, phone_number, date_of_birth, exposure, password) 
                VALUES (${student_id}, ${avatar}, ${username}, ${first_name}, ${middle_name}, ${last_name}, ${email}, ${gender}, ${nationality}, ${residence}, ${phone_number}, ${date_of_birth}, ${exposure}, ${password});`;

    const students = await sql`SELECT * FROM students;`;
    return NextResponse.json({ students: students.rows }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



{/*
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

*/}

{/*
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
  */}