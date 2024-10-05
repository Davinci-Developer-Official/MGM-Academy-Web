
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export default async function POST(req:NextRequest){
    try {
        const id = await req.json()
        const response = await sql `
        SELECT * FROM Sub_chapters WHERE sub_chapter_id =${id}
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}