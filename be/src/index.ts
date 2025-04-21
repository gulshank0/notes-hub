import express, { Request, Response } from "express";
import client from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
app.post("/register",async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try{
const result = await client.query(
  'INSERT INTO users(email,password) VALUES($1,$2) RETURNING id',
  [email, hashedPassword]
);
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token=jwt.sign(
    {id:result.rows[0].id}, process.env.JWT_SECRET, {expiresIn:'24h'});
  res.json({ token }); 
} catch(err:any) {
  console.log(err.message);
  res.sendStatus(503);
}
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
