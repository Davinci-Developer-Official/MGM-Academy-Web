'use server';
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const body = await req.json();
        //console.log('Request Body:', body); // Log the incoming request body for debugging

        const { user_names, user_gender, user_email, user_phonenumber, user_nation, user_verified, user_password } = body;

        // Insert the new user into the database
        const data =await sql`
            INSERT INTO user_profile (user_names, user_gender, user_email, user_phonenumber, user_nation, user_verified, user_password)
            VALUES (${user_names}, ${user_gender}, ${user_email}, ${user_phonenumber}, ${user_nation}, ${user_verified}, ${user_password})
        `;
        if(data.rows.length!==0){
            console.log(data.rows)
        }
        return NextResponse.json(data.rows)
    } catch (error) {
        NextResponse.json({error:"error not uploaded"})
    }
}