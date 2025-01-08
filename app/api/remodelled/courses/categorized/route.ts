import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // Extract the 'category' query parameter from the request URL
        const { searchParams } = new URL(req.url);
        const param = searchParams.get("category");

        if (!param) {
            console.log("param empty");
            return NextResponse.json({ error: "Missing category parameter" }, { status: 400 });
        }
        //parse param
        const parsed = JSON.parse(param)
        // Query the database using the param directly
        const response = await sql`
            SELECT * FROM courses WHERE category = ${parsed}
        `;

        console.log(response.rows); // Log the rows to debug
        return NextResponse.json(response.rows, { status: 200 });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
