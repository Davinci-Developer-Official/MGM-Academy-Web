
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    try {
        const {id,title,description,order} = await req.json()
        const response = await sql `
        INSERT INTO chapters (course_id,chapter_title,chapter_description,chapter_order) VALUES (${id},${title},${description},${order})
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}