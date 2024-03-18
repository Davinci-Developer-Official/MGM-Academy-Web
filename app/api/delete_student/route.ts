import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  try {
    const requestBody = await request.json();
    const { student_id } = requestBody;

    if (!student_id) {
      throw new Error('Student ID is required');
    }

    const result = await sql`DELETE FROM students WHERE student_id = ${student_id};`;

    if (result.rowCount === 0) {
      throw new Error(`Student with ID ${student_id} not found`);
    }

    const students = await sql`SELECT * FROM students;`;
    return NextResponse.json({ students: students.rows }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
