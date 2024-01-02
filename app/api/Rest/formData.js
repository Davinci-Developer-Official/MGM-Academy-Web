// pages/api/postData.js

import { pool } from "./database/db";

export default async function postStudentProfileData(req, res) {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;

      const client = await pool.connect();
      const result = await client.query('INSERT INTO your_table_name (column_name) VALUES ($1)', [data]);

      res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
