import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
const client = new Client({
  connectionString: process.env.DATABASE_URL
});

async function initDb() {
  try {
    await client.connect();

    // Check if table exists before creating
    const tableExists = await client.query(
      "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users')",
    );

    if (!tableExists.rows[0].exists) {
      await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
      `);
      console.log("Users table created");
    } else {
      console.log("Users table already exists");
    }
  } catch (error) {
    console.error("Database initialization error:", error);
  }
}

initDb();

export default client;
