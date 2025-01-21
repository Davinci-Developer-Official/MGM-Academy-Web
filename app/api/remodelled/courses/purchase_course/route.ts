import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";


export async function POST(req:NextRequest){
    try {
        const {purchase_type,student_id,student_name,course_id,course_name,course_price,discount}= await req.json()
        const response = await sql`
        INSERT INTO student_purchase (purchase_type,student_id,student_name,course_id,course_name,course_price,discount) VALUES (${purchase_type},${student_id},${student_name},${course_id},${course_name},${course_price},${discount});
        `
        return NextResponse.json(response.rows,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:404})
    }

}