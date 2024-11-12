
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id"); // Extract the 'id' from query parameters

        if (id=="") {
            return NextResponse.json({ error: "Chapter ID is required" }, { status: 400 });
        }
        if(id!==null){
            const response = await sql`
            SELECT * FROM courses WHERE course_id = ${id} ;
            `
        console.log({
            id: id,
            data: response.rows
        })
        //console.log(response.rows)
        return NextResponse.json(response.rows);
        }

        
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}