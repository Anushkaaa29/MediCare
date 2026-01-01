import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "./models/Doctor.js";
import User from "./models/User.js";

dotenv.config();

// 🔗 DB connect
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB Connected for seeding");

// 🔹 PEHLE EK USER BANAYENGE (doctor owner ke liye)
const doctorUser = await User.create({
  name: "Doctor Admin",
  email: "doctoradmin@test.com",
  password: "hashedpassword",
  role: "doctor",
});

console.log("Doctor user created");

// 🔹 10 DOCTORS DATA
const doctors = [
  { specialization: "Cardiologist", experience: 10, fees: 700 },
  { specialization: "Dermatologist", experience: 6, fees: 500 },
  { specialization: "Orthopedic", experience: 8, fees: 650 },
  { specialization: "Pediatrician", experience: 5, fees: 400 },
  { specialization: "Neurologist", experience: 12, fees: 900 },
  { specialization: "ENT Specialist", experience: 7, fees: 450 },
  { specialization: "Gynecologist", experience: 9, fees: 600 },
  { specialization: "Psychiatrist", experience: 11, fees: 800 },
  { specialization: "Dentist", experience: 4, fees: 300 },
  { specialization: "General Physician", experience: 6, fees: 350 },
];

// 🔹 INSERT INTO DB
const doctorDocs = doctors.map((doc) => ({
  user: doctorUser._id,
  ...doc,
}));

await Doctor.insertMany(doctorDocs);

console.log("✅ 10 Doctors inserted successfully");

process.exit();
