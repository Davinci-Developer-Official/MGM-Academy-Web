import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export default async function POST(req:NextRequest){
    try {
        const {cover,title,description,instructor} = await req.json()
        const response = await sql `
        INSERT INTO Courses (course_cover,course_title,course_description,instructor_id) VALUE(${cover},${title},${description},${instructor})
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}
