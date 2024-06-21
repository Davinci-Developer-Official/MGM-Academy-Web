import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export async function DELETE(req:NextRequest){
    const{user_id}= await req.json();
    try {
        const data= await sql `DELETE FROM user_profile WHERE user_id = ${user_id}`;
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error:"user not deleted"})
    };
};