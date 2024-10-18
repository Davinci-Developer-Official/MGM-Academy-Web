
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    try {
        const {id,title,description,order} = await req.json()
        const response = await sql `
        INSERT INTO Sub_chapters (chapter_id,sub_chapter_title,sub_chapter_description,sub_chapter_order) VALUE(${id},${title},${description},${order})
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}