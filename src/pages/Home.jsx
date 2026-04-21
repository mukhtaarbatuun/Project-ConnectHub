import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getPosts } from "../api/posts";

export default function Home() {
  const { posts, setPosts } = useOutletContext();

  useEffect(() => {
    getPosts()
      .then((data) => {
        if (data && data.length > 0) {
          setPosts(data);
        }
      })
      .catch((err) => {
        console.error("API ERROR:", err);
      });
  }, []);

  return (
    <div>
  
      <div
        style={{
          background: "#2d6cdf",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>🏠</span>
          <span style={{ fontSize: "14px", opacity: 0.9 }}>Home</span>
        </div>

        <h2 style={{ margin: "10px 0 0" }}>
          Welcome back, Jordan Martinez!
        </h2>

        <p
          style={{
            margin: "5px 0 0",
            fontSize: "13px",
            opacity: 0.8,
          }}
        >
          Discover what's happening in your network.
        </p>
      </div>

   
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>0</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
            Your Posts
          </p>
        </div>

        <div
          style={{
            flex: 1,
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>3</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
            Following
          </p>
        </div>

        <div
          style={{
            flex: 1,
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>{posts.length}</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
            Feed Posts
          </p>
        </div>
      </div>

   
      <div style={{ marginTop: "10px" }}>
        {posts.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={post.id || index}
              post={{
                user: post.user?.name || post.user || "User",
                text: post.text || post.content || "No content",
                image: post.imageUrl || post.image || "",
                likes: post.likesCount || post.likes || 0,
                comments: post.commentsCount || post.comments || 0,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}