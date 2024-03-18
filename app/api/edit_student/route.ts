import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const requestBody = await request.json();
    const { student_id, username, first_name, middle_name, last_name, email, gender, nationality, residence, phone_number, date_of_birth, exposure, password } = requestBody;

    if (!student_id || !username || !first_name) {
      throw new Error('Student ID, Username, and First Name are required');
    }

    const result = await sql`UPDATE students 
                              SET username = ${username}, 
                                  first_name = ${first_name}, 
                                  middle_name = ${middle_name}, 
                                  last_name = ${last_name}, 
                                  email = ${email}, 
                                  gender = ${gender}, 
                                  nationality = ${nationality}, 
                                  residence = ${residence}, 
                                  phone_number = ${phone_number}, 
                                  date_of_birth = ${date_of_birth}, 
                                  exposure = ${exposure}, 
                                  password = ${password}
                              WHERE student_id = ${student_id};`;

    if (result.rowCount === 0) {
      throw new Error(`Student with ID ${student_id} not found`);
    }

    const students = await sql`SELECT * FROM students;`;
    return NextResponse.json({ students: students.rows }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
