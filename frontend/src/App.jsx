import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import Navbar from "./components/Navbar";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar onSearch={setSearch} />

      <Routes>
        {/* 🔹 FIRST PAGE */}
        <Route path="/" element={<Navigate to="/register" />} />

        {/* 🔹 REGISTER PAGE */}
        <Route path="/register" element={<Register />} />

        {/* 🔹 LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* 🔹 PROTECTED PAGE */}
        <Route
          path="/doctors"
          element={
            <PrivateRoute>
              <Doctors search={search} />
            </PrivateRoute>
          }
        />

        {/* 🔹 FALLBACK */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
