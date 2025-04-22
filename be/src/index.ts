import express from "express";
import client from "./db";
import bcrypt from "bcryptjs";
import cors from "cors";
//import { Session } from "express-session";
//import jwt from "jsonwebtoken";
//import dotenv from "dotenv";
const port = 3000;
//started the app
const app = express();

//middleware added
app.use(cors());
app.use(express.json());
//routes added here to go to ==> /register routes
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    // query to inser the data
    const insertQuery = await client.query(
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

// Change this route to /login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const getUser = await client.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    // declaring  variable user
    //const user = [email];
    //console.log(user);
    if (getUser.rows.length === 0) {
      res.status(404).send({ message: "User not Found " });
      return;
    }

    const passwordIsValid = bcrypt.compareSync(
      password,
      getUser.rows[0].password,
    );
    if (!passwordIsValid) {
      res.status(401).send({ message: "Invalid Password" });
      return;
    }

    console.log(`User logged in: ${email}`);
    res.status(200).send({ message: "Login successful" });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).send({ message: "Server error" });
  }
});
app.post("/logout", (req, res) => {
  // No server-side action needed for JWT logout
  // The client should discard the token
  res.status(200).send({ message: "Logged out successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
