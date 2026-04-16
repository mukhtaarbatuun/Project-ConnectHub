export default function Notifications() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h3>Notifications</h3>

      <div style={{ marginTop: "20px", color: "#555" }}>
        <div style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
          Sarah liked your post ❤️
        </div>
        <div style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
          Mike followed you 👤
        </div>
        <div style={{ padding: "10px 0" }}>
          Emma commented on your post 💬
        </div>
      </div>
    </div>
  );
}