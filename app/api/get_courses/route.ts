import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";


export async function GET(req:NextRequest){
    try {
        const response = await sql`SELECT * FROM courses`;
        return NextResponse.json(response.rows);
    } catch (error) {
        return NextResponse.json('failed to get ');
    }
}