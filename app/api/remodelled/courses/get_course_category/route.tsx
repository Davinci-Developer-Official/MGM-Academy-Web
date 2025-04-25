import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req:NextRequest) {
    //const {parameter} = await req.json()
    const { searchParams } = new URL(req.url);
    const param = searchParams.get('course_category');
    try {
        if(!param){console.log({"message":"search parameter not found"})};
        const response = await sql`SELECT * FROM course  `;
        console.log(response.rows)
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error});
    }
}