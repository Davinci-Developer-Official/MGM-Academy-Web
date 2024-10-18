
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function GET(req:NextRequest){
    try {
       
        const response = await sql `
        SELECT * FROM Sub_chapters
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}