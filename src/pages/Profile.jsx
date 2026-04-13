export default function Profile() {
  return (
    <div>
      <h2>Jordan Martinez</h2>
      <p>@jordan_tech</p>

      <div style={{ marginTop: "20px" }}>
        <strong>3 Posts</strong> | <strong>156 Followers</strong> | <strong>89 Following</strong>
      </div>

      <div style={{ marginTop: "30px" }}>
        <PostCard />
      </div>
    </div>
  );
}