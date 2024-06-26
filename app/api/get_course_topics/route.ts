import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Missing course_id parameter' });
        }

        const response = await sql`SELECT * FROM topics WHERE course_id = ${id}`;
        return NextResponse.json(response.rows);
    } catch (error:any) {
        return NextResponse.json({ error: 'Topics not found: ' + error.message });
    }
};
