import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRouter from "./routes/authRoutes.js";
import motherHealthRouter from "./routes/motherHealthRoutes.js";
import pregnancyRouter from "./routes/pregnancyRoutes.js";
import prenatalRouter from "./routes/prenatalRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Mama Mate API is running",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/mother-health", motherHealthRouter);
app.use("/api/pregnancy", pregnancyRouter);
app.use("/api/prenatal", prenatalRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});