// lib/db.js

import { Pool } from "pg";

export const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Change this if your PostgreSQL server is running on a different port
});
