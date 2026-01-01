import Appointment from "../models/Appointment.js";

export const bookAppointment = async (req, res) => {
  try {
    const { doctor, date, time } = req.body;

    const appointment = await Appointment.create({
      user: req.user._id,
      doctor,
      date,
      time
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
