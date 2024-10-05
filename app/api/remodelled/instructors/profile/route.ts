import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // Get the 'id' from the query params
        const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') || '' ;
    const refined = JSON.parse(id)
    console.log('url param:',refined)
    if (!id) {
      return NextResponse.json({ error: 'Missing course ID' }, { status: 400 });
    }else{
       // return NextResponse.json(`user ${refined}`)
    }

    const response = await sql`SELECT * FROM instructor_profile WHERE instructor_id = ${refined};`;


        // Return the result as JSON
        return NextResponse.json(response.rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching student profile' }, { status: 404 });
    }
}
