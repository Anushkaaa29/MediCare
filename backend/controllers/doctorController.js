import Doctor from "../models/Doctor.js";

// GET all doctors (frontend ke liye)
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ available: true });
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
