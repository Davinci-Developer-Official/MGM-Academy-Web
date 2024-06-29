import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
      throw new Error('ID is required');
    }

    const response = await sql`SELECT * FROM topics WHERE topic_id = ${id}`;
    return NextResponse.json(response.rows);
  } catch (error:any) {
    return NextResponse.json({ error: error.message || 'Topic not found' }, { status: 500 });
  }
}
