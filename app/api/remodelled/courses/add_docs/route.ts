
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    try {
        const {id,title,url,courseId,chapterId,subChapterId} = await req.json()
        const response = await sql `
        INSERT INTO Documents (course_id,document_title,url,courseId,chapterId,subChapterId) VALUE(${id},${url},${title},${courseId},${chapterId},${subChapterId})
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}