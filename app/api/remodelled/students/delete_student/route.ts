import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export async function DELETE(req:NextRequest){
    try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') || '';
    const parsed = JSON.parse(id);

    const response = await sql`
        DELETE  FROM student_profile WHERE student_id=${parsed}
    `;

    return NextResponse.json(response.rows,{status:200});
    } catch (error) {
        return NextResponse.json({error:error},{status:404})
    }
}