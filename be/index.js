import express from "express";
import authMiddleware from "./src/middleware/authMiddlwares.js";
import authRoutes from "./src/routes/authRoutes.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Authentication routes (unprotected)
app.use("/auth", authRoutes);

// Protected routes example
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
