import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export default async function PUT(req:NextRequest){
    try {
        const {id,cover,title,description,instructor} = await req.json()
        const response = await sql `
        UPDATE  Courses
        SET course_cover=${cover}, course_title=${title}, course_description=${description}, course_instructor=${instructor}
        WHERE course_id = ${id}
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}