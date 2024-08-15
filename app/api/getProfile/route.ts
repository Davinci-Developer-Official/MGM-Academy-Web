import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const { userId } = params;
    const response = await sql`SELECT * FROM user_profile WHERE user_id = ${userId}`;

    return NextResponse.json(response.rows[0]);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ error: 'Failed to fetch user profile' }, { status: 500 });
  }
}
