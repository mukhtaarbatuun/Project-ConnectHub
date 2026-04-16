import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSearch, FiPlus, FiBell, FiUser } from "react-icons/fi";

export default function Sidebar({ openModal }) {
  const location = useLocation();

  const getItemStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 15px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    color: location.pathname === path ? "white" : "#444",
    background: location.pathname === path ? "#2d6cdf" : "transparent",
    boxShadow:
      location.pathname === path
        ? "0 4px 10px rgba(45,108,223,0.3)"
        : "none",
  });

  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRight: "1px solid #eee",
        background: "#fff",
        height: "100vh",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "10px",
            background: "#2d6cdf",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          C
        </div>
        <strong>ConnectHub</strong>
      </div>

      {/* MENU */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/" style={getItemStyle("/")}>
          <FiHome /> Home
        </Link>

        <Link to="/search" style={getItemStyle("/search")}>
          <FiSearch /> Search
        </Link>

        <button
          onClick={openModal}
          style={{
            ...getItemStyle("/create"),
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <FiPlus /> Create
        </button>

        <Link to="/notifications" style={getItemStyle("/notifications")}>
          <FiBell /> Notifications
        </Link>

        <Link to="/profile" style={getItemStyle("/profile")}>
          <FiUser /> Profile
        </Link>
      </div>
    </div>
  );
}