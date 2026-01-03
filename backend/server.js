import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

// ================== CONFIG ==================
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// ================== MIDDLEWARE ==================

// JSON body parser
app.use(express.json());

// CORS
// 👉 Local development ke liye localhost allow
// 👉 Production me frontend (Vercel) ka URL add karna
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : "*",
    credentials: true
  })
);

// ================== API ROUTES ==================
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// ================== PRODUCTION ==================
// ⚠️ Agar frontend Vercel pe deploy hai,
// to ye block optional hai (error nahi karega)

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // ✅ FIXED wildcard (NO app.get("*"))
  app.use((req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

// ================== SERVER START ==================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
