import { sql } from "@vercel/postgres";
import { NextResponse,NextRequest } from "next/server";

export async function GET(){
    try {
        const request = await sql`
        SELECT * FROM  student_academics 
        `
        return NextResponse.json(request.rows)
    } catch (error) {
        return NextResponse.json(error,{status:404})
    }
}