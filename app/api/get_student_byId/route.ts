import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  try {
    if (!username) throw new Error('Username is required');

    const students = await sql`SELECT * FROM students WHERE username = ${username}`;
    return NextResponse.json({ students: students.rows }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
