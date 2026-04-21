import { FiLogOut } from "react-icons/fi";

export default function Topbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#fff",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 25px",
      }}
    >
      {/* RIGHT: USER ONLY */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />

        <span style={{ fontSize: "14px", color: "#333" }}>
          Jordan Martinez
        </span>

        <FiLogOut style={{ cursor: "pointer", color: "#666" }} />
      </div>
    </div>
  );
}