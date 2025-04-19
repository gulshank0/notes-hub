import express from "express";
import authMiddlware from "./src/middleware/authMiddlwares.js";
const app = express();
const PORT = process.env.PORT || 3000;
//middlware to use
//
app.use(express.json());
// authentication routes middlware
app.use("/auth", authMiddlware);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
