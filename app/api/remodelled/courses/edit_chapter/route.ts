import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function PUT(req:NextRequest){
    try {
        const {chapterid,courseid,title,description,order} = await req.json()
        const response = await sql `
        UPDATE  Chapters
        SET course_id=${courseid}, chapter_title=${title}, chapter_description=${description}, chapter_order=${order}
        WHERE chapter_id = ${chapterid}
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}