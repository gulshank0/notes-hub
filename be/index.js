import express from "express";
import authMiddleware from "./src/middleware/authMiddlwares";
const app = express();
const PORT = process.env.PORT || 3000;
//middlware to use
//
app.use(express.json());
// authentication routes middlware
app.use("/auth", authMiddleware);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
