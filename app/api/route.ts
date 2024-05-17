import { sql } from '@vercel/postgres';

async function testConnection() {
  try {
    const result = await sql`SELECT 1+1 AS result`;
    console.log('Database connected:', result);
    if(result.rows.length!==0){
        console.log("server is on")
        return "server is on"
    }
    else{
        console.log("server is unavailable")
        return "server is unavailable"
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

testConnection();
