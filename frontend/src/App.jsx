import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
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
      {/* Navbar with search */}
      <Navbar onSearch={setSearch} />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/doctors"
          element={
            <PrivateRoute>
              <Doctors search={search} />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/doctors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
