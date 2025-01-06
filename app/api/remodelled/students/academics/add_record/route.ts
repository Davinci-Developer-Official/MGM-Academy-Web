import { NextApiRequest,NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface PropsData{
    student_id:string,
    student_name:string,
    course_id: string,
    course_name: string,
    instructor_id:string,
    instructor_name:string,
}

export async function POST(props:PropsData){
    try {
        const response = await sql` 
            INSERT INTO student_academics (student_id,student_name,course_id,instructor_id,instructor_name) VALUES (
            ${props.student_id},
            ${props.student_name}
            ${props.course_id},
            ${props.course_name},
            ${props.instructor_id},
            ${props.instructor_name}
            )
        `;
        return NextResponse.json(response.rows,{status:200});
    } catch (error) {
       return NextResponse.json(error,{status:405}); 
    }

}