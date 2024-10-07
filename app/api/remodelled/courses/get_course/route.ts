import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await sql`SELECT * FROM courses`;
    console.log('Database response:', response.rows);  // Log the response
    return NextResponse.json(response.rows);
  } catch (error:any) {
    console.error('Error in API route:', error.message);
    return NextResponse.json({ error: error.message });
  }
}
