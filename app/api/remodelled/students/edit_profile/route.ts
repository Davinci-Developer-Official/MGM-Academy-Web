import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Import the Vercel Postgres client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    try {
      const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id; // Ensure `id` is a string

      if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
      }

      const updatedData = JSON.parse(req.body); // Parse the request body

      // Update the user's profile in the Postgres database
      const { rows } = await sql`
        UPDATE students
        SET 
          avatar = ${updatedData.avatar}, 
          names = ${updatedData.names},
          email = ${updatedData.email},
          phonenumber = ${updatedData.phonenumber},
          gender = ${updatedData.gender},
          password = ${updatedData.password}
        WHERE id = ${id}
        RETURNING *;
      `;

      if (rows.length > 0) {
        res.status(200).json({ message: 'User profile updated successfully', user: rows[0] });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
