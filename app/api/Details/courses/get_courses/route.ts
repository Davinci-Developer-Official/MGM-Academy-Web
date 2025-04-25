import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await sql`SELECT * FROM detailed_courses`;
        return NextResponse.json(response.rows,{status:200});
    } catch (error) {
       return NextResponse.json({issue: error},{status:404}); 
    }
}