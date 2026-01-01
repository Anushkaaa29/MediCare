import { useState } from "react";
import api from "../services/api";
import "./BookAppointment.css";

export default function BookAppointment({ doctorId, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!date || !time) return;

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      await api.post(
        "/appointments/book",
        { doctor: doctorId, date, time },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMsg("Appointment booked successfully ✔");
      setTimeout(onClose, 1200);
    } catch {
      setMsg("Booking failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="appointment-card">
        <h3>Book Appointment</h3>

        <form onSubmit={submit}>
          <label>Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />

          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <option value="">Select time</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
          </select>

          <button type="submit">
            {loading ? "Booking..." : "Confirm Appointment"}
          </button>
        </form>

        {msg && <p className="msg">{msg}</p>}

        <span className="close" onClick={onClose}>Cancel</span>
      </div>
    </div>
  );
}
