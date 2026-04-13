import { Link } from "react-router-dom";

export default function Sidebar({ openModal }) {

  const itemStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    textAlign: "left"
  };

  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRight: "1px solid #eee",
      }}
    >
      <h2>ConnectHub</h2>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link to="/" style={itemStyle}>Home</Link>
        <Link to="/search" style={itemStyle}>Search</Link>

        {/* FIXED BUTTON */}
        <button onClick={openModal} style={itemStyle}>
          Create
        </button>

        <Link to="/notifications" style={itemStyle}>Notifications</Link>
        <Link to="/profile" style={itemStyle}>Profile</Link>
      </div>
    </div>
  );
}