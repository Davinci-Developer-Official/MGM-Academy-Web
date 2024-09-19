import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Perform SQL query to fetch data from the student_profile table
        const response = await sql`
            SELECT * FROM student_profile;
        `;
        // Return the result as JSON
        return NextResponse.json(response.rows,{status:200});
    } catch (error:any) {
        // Return an error message if something goes wrong
        return NextResponse.json({ error: 'Error fetching data', details: error.message },{status:404});
    }
}
