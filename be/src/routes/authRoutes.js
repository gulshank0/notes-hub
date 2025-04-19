import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../prismaClient";

const router = express.Router();
//
//// Register new User End point
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // password encrypted
  const hashedPassword = bcrypt.hashSync(password, 8);
  //
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    // create a token
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.json({ token });
    //
  } catch (err) {
    console.log(err.message);
    res.sendStatus(503);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    //if user not found
    if (!user) {
      return res.sendStatus(404).send({ message: "User not found" });
      //checking password
      const 
    }
  } catch (err) {
    console.log(err.message);
    res.sendStatus(503);
  }
});
