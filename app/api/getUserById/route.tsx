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