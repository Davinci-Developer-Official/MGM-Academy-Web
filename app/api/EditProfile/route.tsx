import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
    try {
        // Parse the JSON body of the request
        const request = await req.json();
        const { avatar, username, email, gender, phonenumber, nationality, password } = request;

        // Check if username is provided since it's required for the WHERE clause
        if (!username) {
            return NextResponse.json({ message: 'Username is required' }, { status: 400 });
        }

        // Update avatar if provided
        if (avatar && avatar !== "") {
            await sql`
                UPDATE user_profile 
                SET avatar = ${avatar}
                WHERE username = ${username}
            `;
        }

        // Update email if provided
        if (email && email !== "") {
            await sql`
                UPDATE user_profile 
                SET email = ${email}
                WHERE username = ${username}
            `;
        }

        // Update gender if provided
        if (gender && gender !== "") {
            await sql`
                UPDATE user_profile 
                SET gender = ${gender}
                WHERE username = ${username}
            `;
        }

        // Update phonenumber if provided
        if (phonenumber && phonenumber !== "") {
            await sql`
                UPDATE user_profile 
                SET phonenumber = ${phonenumber}
                WHERE username = ${username}
            `;
        }

        // Update nationality if provided
        if (nationality && nationality !== "") {
            await sql`
                UPDATE user_profile 
                SET nationality = ${nationality}
                WHERE username = ${username}
            `;
        }

        // Update password if provided
        if (password && password !== "") {
            await sql`
                UPDATE user_profile 
                SET password = ${password}
                WHERE username = ${username}
            `;
        }

        return NextResponse.json({ message: 'User profile updated successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'An error occurred while updating user profile' }, { status: 500 });
    }
}
