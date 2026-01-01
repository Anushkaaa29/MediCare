import express from "express";
import { getAllDoctors } from "../controllers/doctorController.js";

const router = express.Router();

// frontend ke liye doctor list
router.get("/", getAllDoctors);

export default router;
