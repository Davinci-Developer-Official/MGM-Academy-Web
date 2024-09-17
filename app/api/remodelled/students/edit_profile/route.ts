import { sql } from '@vercel/postgres'; 
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    console.log('Received PUT request');
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') || '';
    const parsed = JSON.parse(id)
    console.log('ID from URL:', id);

    const updatedData = await req.json();
    console.log('Data received:', updatedData);

    const response = await sql`
      UPDATE student_profile
      SET 
        avatar = ${updatedData.avatar}, 
        names = ${updatedData.names},
        email = ${updatedData.email},
        phonenumber = ${updatedData.phonenumber},
        gender = ${updatedData.gender},
        password = ${updatedData.password}
      WHERE student_id = ${parsed}
      RETURNING *;
    `;

    console.log('Update response:', response);
    return NextResponse.json(response.rows, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

