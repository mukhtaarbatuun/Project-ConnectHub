import PostCard from "../components/PostCard";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { posts } = useOutletContext();

  return (
    <div>
      <h2>Welcome back</h2>

      <div style={{ marginTop: "30px" }}>
        {posts.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              user={post.user}
              text={post.text}
            />
          ))
        )}
      </div>
    </div>
  );
}