import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await sql`SELECT * FROM user_profile WHERE user_verified = true`;
    return NextResponse.json(response.rows);
  } catch (error) {
    console.error("Error fetching user profiles:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

