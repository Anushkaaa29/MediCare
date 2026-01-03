# MediCare – Doctor Appointment Booking Application

MediCare is a full-stack MERN application designed to simplify the process of booking doctor appointments.  
Users can securely log in, browse available doctors, and book appointments through an intuitive and responsive interface.

---

## 🚀 Features

- User authentication using JWT
- Protected routes for authorized users
- View list of available doctors
- Book appointments with selected doctors
- Clean and responsive UI (white + purple theme)
- RESTful backend APIs

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Axios
- CSS (no Tailwind)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---


---

## 🔐 Authentication Flow

- Users log in using email and password
- A JWT token is generated and stored in localStorage
- Protected routes are accessible only when the token is present

---

## 📅 Appointment Flow

1. User logs in
2. Doctors list is fetched from the backend
3. User selects a doctor and books an appointment
4. Appointment data is stored in MongoDB

---

