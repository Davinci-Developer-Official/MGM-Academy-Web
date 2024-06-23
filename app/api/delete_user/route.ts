import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    const { user_id } = await req.json();
    try {
        // fist delete relation instructors then delete user_profile;
        // First, delete related instructors records in the instructors table;
        await sql`DELETE FROM instructors WHERE user_id = ${user_id}`;

        // Then, delete the user in the user_profile table;
        const result = await sql`DELETE FROM user_profile WHERE user_id = ${user_id}`;
        
        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: "User not deleted" }, { status: 500 });
    }
}
