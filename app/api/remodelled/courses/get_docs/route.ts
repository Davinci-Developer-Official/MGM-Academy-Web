
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export default async function GET(req:NextRequest){
    try {
        
        const response = await sql `
        SELECT * FROM Documents
        `;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json({error:error})
    }

}