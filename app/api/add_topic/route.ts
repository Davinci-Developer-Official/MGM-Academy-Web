import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { course_id, topic_cover, topic_name, topic_description, topic_content, topic_completed } = await req.json();

    const response = await sql`
      INSERT INTO topics (course_id, topic_cover, topic_name, topic_description, topic_content, topic_completed)
      VALUES (${course_id}, ${topic_cover}, ${topic_name}, ${topic_description}, ${topic_content}, ${topic_completed})
      RETURNING *
    `;

    return NextResponse.json(response.rows[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error adding topic' }, { status: 500 });
  }
}
