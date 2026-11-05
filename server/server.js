import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRouter from "./routes/authRoutes.js";
import motherHealthRouter from "./routes/motherHealthRoutes.js";
import pregnancyRouter from "./routes/pregnancyRoutes.js";
import prenatalRouter from "./routes/prenatalRoutes.js";

dotenv.config();

const allowedOrigins = (process.env.CLIENT_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

const app = express();

app.disable("x-powered-by");

connectDB();

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
  }),
);
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

app.use((req, res) => {
  return res.status(404).json({
    message: "Route not found",
  });
});

app.use((error, req, res, next) => {
  console.error("Unhandled Error:", error);

  return res.status(500).json({
    message: "Server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});