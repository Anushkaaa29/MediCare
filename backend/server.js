import express from "express";
import dotenv from "dotenv";
import cors from "cors";              // ✅ 1. import cors
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* 🔥 CORS MUST BE HERE */
app.use(
  cors({
    origin: "http://localhost:5173",  // frontend
    credentials: true
  })
);

app.use(express.json());              // AFTER cors

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;
