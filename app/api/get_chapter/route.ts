import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
 
{/*
     try {
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`SELECT * FROM students`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
*/}
  
const chapters = await sql`SELECT * FROM chapters;`;
  return NextResponse.json( chapters.rows , { status: 200 });
}