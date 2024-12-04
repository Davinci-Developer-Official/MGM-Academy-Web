import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export async function GET(){
    try {
        const response = await sql ` SELECT * FROM student_profile;`
        return NextResponse.json(response.rows,{status: 200})
    } catch (error) {
        
    }
}