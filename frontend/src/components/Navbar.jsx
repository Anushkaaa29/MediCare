import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">
          Medi<span>Care</span>
        </span>

        {token && (
          <input
            className="search-input"
            type="text"
            placeholder="Search doctor / specialization"
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
      </div>

      {token && (
        <div className="nav-right">
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
