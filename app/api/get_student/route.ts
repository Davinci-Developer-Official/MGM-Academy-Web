import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
 
{/*
     try {
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`SELECT * FROM students`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
*/}
 
  const students = await sql`SELECT * FROM students;`;
  return NextResponse.json({ students: students.rows }, { status: 200 });
}