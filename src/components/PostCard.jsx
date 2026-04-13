export default function PostCard({ user , text}) {
  return (
    <div style={{
      border: "1px solid #eee",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}>
      <h4>{user}</h4>
      <p>{text}</p>

      <img
        src="https://via.placeholder.com/400"
        alt=""
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <div style={{ marginTop: "10px" }}>
        ❤️ 0 | 💬 0
      </div>
    </div>
  );
}