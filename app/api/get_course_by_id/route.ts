import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing course ID' }, { status: 400 });
    }

    // Validate UUID format if necessary
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
      return NextResponse.json({ error: 'Invalid course ID format' }, { status: 400 });
    }

    const response = await sql`SELECT * FROM courses WHERE course_id = ${id}`;
    if (response.rowCount === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(response.rows[0]);
  } catch (error) {
    console.error('Error fetching course data:', error);
    return NextResponse.json({ error: 'Error getting course data' }, { status: 500 });
  }
}
