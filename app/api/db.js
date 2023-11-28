// lib/db.js

import { Pool } from "pg";

export const pool = new Pool({
  user: 'postgres',
  host: '5432',
  database: 'mgmAcademy',
  password: 'postgres',
  port: 5432, // Change this if your PostgreSQL server is running on a different port
});
