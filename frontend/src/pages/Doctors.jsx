import { useEffect, useState } from "react";
import api from "../services/api";
import BookAppointment from "../components/BookAppointment";
import "./Doctors.css";

export default function Doctors({ search = "" }) {
  const [doctors, setDoctors] = useState([]);
  const [openFor, setOpenFor] = useState(null);

  useEffect(() => {
    api.get("/doctors")
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredDoctors = doctors.filter(doc =>
    doc.specialization
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="doctors-page">
      <h2>Available Doctors</h2>

      <div className="doctor-grid">
        {filteredDoctors.map(doc => (
          <div className="doctor-card" key={doc._id}>

            {/* 🔵 LETTER AVATAR */}
            <div className="avatar">
              {doc.specialization.charAt(0).toUpperCase()}
            </div>

            <h3>{doc.specialization}</h3>
            <p>🩺 Experience: {doc.experience} yrs</p>
            <p>💰 Fees: ₹{doc.fees}</p>

            <button onClick={() => setOpenFor(doc._id)}>
              Book Appointment
            </button>

          </div>
        ))}
      </div>

      {openFor && (
        <BookAppointment
          doctorId={openFor}
          onClose={() => setOpenFor(null)}
        />
      )}
    </div>
  );
}
