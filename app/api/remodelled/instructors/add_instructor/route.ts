import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // Parse the JSON body
        const { avatar, names, email, phonenumber, gender, password } = await req.json();

        // Insert the new student profile into the database
        const response = await sql`
            INSERT INTO instructor_profile (avatar, names, email, phonenumber, gender, password, date)
            VALUES (${avatar}, ${names}, ${email}, ${phonenumber}, ${gender}, ${password}, NOW())
            RETURNING *;  -- Returning the inserted record, including instructor_id
        `;

        // Return the inserted record as JSON
        return NextResponse.json(response.rows[0]);
    } catch (error:any) {
        console.error('Error:', error);  // Log the full error details
        return NextResponse.json({ error: 'Failed to insert student profile', details: error.message }, { status: 500 });
    }
}
