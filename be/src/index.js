import express from "express";
import authMiddleware from "./middleware/authMiddlwares.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Authentication routes (unprotected)
app.use("/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
