import express, { Request, Response } from "express";
import client from "./db";
import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";
//import dotenv from "dotenv";
const port = 3000;
//started the app
const app = express();
//middleware added
app.use(express.json());
//routes added here to go to ==> /register routes
app.post("/register", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    // query to inser the data
    const insertQuery = client.query(
      "INSERT INTO users ( email, password) VALUES ($1, $2) RETURNING* ",
      [email, hashedPassword],
    );
    // ==>calling this    insertQuery;

    const values = [email, hashedPassword];
    console.log("Register success:");
    res.send({ values });
  } catch (err: any) {
    console.log(err.message);
    res.sendStatus(503);
  }
});
app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const getUser = client.query("SELECT * FROM users WHERE email=?");
  } catch (err: any) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
