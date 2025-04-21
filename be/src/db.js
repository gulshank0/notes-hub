import pg from "pg";
import { Client } from "pg";
const client = new Client({
  ConnectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable",
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
`);

  console.log(result);
}
createUserTable();
