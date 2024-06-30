import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(request: NextRequest) {
  try {
    const{id}=await request.json();
    const response = await sql`SELECT*FROM instructors `;
    return NextResponse.json(response.rows);
  } catch (error) {
    return NextResponse.json(`${error}`);
  }
}