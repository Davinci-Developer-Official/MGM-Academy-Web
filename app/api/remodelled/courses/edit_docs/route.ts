
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function PUT(req:NextRequest){
    try {
        const {id,title,url,courseId,chapterId,subChapterId} = await req.json()
        const response = await sql `
        UPDATE Documents
        SET document_title=${title},document_url=${url},course_id=${courseId},chapter_id=${chapterId},sub_chapter_id=${subChapterId}
        WHERE document_id=${id}
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}