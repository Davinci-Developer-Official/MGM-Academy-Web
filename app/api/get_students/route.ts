import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const response = await sql`SELECT * FROM user_profile WHERE user_verified = 'false'`;
        return NextResponse.json(response.rows);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
