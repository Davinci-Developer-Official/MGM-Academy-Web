
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export default async function DELETE(req:NextRequest){
    try {
        
        const response = await sql `
        DELETE * FROM Documents
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}