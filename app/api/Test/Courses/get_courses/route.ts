import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(){
    try {
        const response = await sql `SELECT*FROM course`;
        console.log(response.rows)
        return NextResponse.json(response.rows,{status:200});
    } catch (error) {
        console.log({error : 'The issue is' + error});
        return NextResponse.json(error,{status:404})
    }
}