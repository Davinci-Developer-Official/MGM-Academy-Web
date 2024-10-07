import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { cover, title, description, instructor } = await req.json();
        const response = await sql`
        INSERT INTO courses (course_cover, course_title, course_description, instructor_id) 
        VALUES (${cover}, ${title}, ${description}, ${instructor})
        `;
        return NextResponse.json(response.rows);
    } catch (error:any) {
        return NextResponse.json({ error: error.message });  // Send error message instead of the whole error object
    }
}

