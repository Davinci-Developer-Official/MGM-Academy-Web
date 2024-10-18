import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function DELETE(req:NextRequest){
    try {
        const {id,cover,title,description,instructor} = await req.json()
        const response = await sql `
        DELETE * FROM Courses
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}