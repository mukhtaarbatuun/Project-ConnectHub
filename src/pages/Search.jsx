export default function Search() {
  return (
    <div>
      <h2>Discover People</h2>

      <input placeholder="Search users..." />

      <div style={{ marginTop: "20px" }}>
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}