import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export default async function PUT(req:NextRequest){
    try {
        const {chapterid,courseid,title,description,order} = await req.json()
        const response = await sql `
        DELETE * FROM Sub_chapters
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}