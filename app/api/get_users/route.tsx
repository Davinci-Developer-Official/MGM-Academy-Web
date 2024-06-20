import{sql} from '@vercel/postgres';
import { NextRequest,NextResponse } from 'next/server';

export async function GET(req:NextRequest,res:NextResponse){
    try {
        const data = await sql `SELECT * FROM user_profile`;
        return NextResponse.json(data.rows);        
    } catch (error) {
        return NextResponse.json(error);
    }
}

{/*
    import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

// Function to handle GET requests
export async function GET(req: NextRequest) {
    try {
        const fetchedData = await sql`SELECT * FROM user_profile`;
        return NextResponse.json(fetchedData.rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'server not found' }, { status: 500 });
    }
}

// Function to handle POST requests
export async function POST(req: NextRequest) {
    const { user_names, user_gender, user_email, user_phonenumber, user_nation, user_verified, user_password } = await req.json();
    try {
        const insertData = await sql`INSERT INTO user_profile (user_names, user_gender, user_email, user_phonenumber, user_nation, user_verified, user_password) VALUES (${user_names}, ${user_gender}, ${user_email}, ${user_phonenumber}, ${user_nation}, ${user_verified}, ${user_password}) RETURNING *`;
        return NextResponse.json(insertData.rows, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'server unavailable' }, { status: 500 });
    }
}

// Handle unsupported methods
export function OPTIONS(req: NextRequest) {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}

    */}