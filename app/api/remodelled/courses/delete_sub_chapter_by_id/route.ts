import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function DELETE(req:NextRequest){
    try {
        const id = await req.json()
        const response = await sql `
        DELETE * FROM  WHERE sub_chapter_id = ${id}
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}