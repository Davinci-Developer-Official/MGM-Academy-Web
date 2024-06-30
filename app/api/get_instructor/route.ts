import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      throw new Error('Instructor ID is required');
    }

    const response = await sql`SELECT * FROM instructors WHERE instructor_id = ${id}`;
    if (response.rows.length === 0) {
      throw new Error(`No instructor found with ID ${id}`);
    }

    return NextResponse.json(response.rows[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
