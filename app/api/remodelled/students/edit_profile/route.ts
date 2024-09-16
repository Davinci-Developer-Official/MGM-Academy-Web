import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Import the Vercel Postgres client

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
  
    try {
      // Extract the 'id' from the query parameters
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
      }

      const updatedData = JSON.parse(req.body); // Parse the request body

      // Update the user's profile in the Postgres database
      const response = await sql`
        UPDATE students
        SET 
          avatar = ${updatedData.avatar}, 
          names = ${updatedData.names},
          email = ${updatedData.email},
          phonenumber = ${updatedData.phonenumber},
          gender = ${updatedData.gender},
          password = ${updatedData.password}
        WHERE id = ${JSON.stringify(id)}
        RETURNING *;
      `;

      if (response.rows.length > 0) {
        res.status(200).json({ message: 'User profile updated successfully', user: response.rows[0] });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  
}
