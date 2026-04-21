import { useState } from "react";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || 0);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [following, setFollowing] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "15px",
        marginBottom: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
   
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#ccc",
            }}
          />

          <div>
            <strong>{post.user}</strong>
            <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>
              5 min ago
            </p>
          </div>
        </div>

        {/* FOLLOW BUTTON */}
        <button
          onClick={() => setFollowing(!following)}
          style={{
            padding: "5px 10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: following ? "#ddd" : "#2d6cdf",
            color: following ? "#333" : "white",
          }}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>

      {/* 📝 TEXT */}
      <p>{post.text}</p>

      {/* 🖼 IMAGE */}
      {post.image && (
        <img
          src={post.image}
          alt=""
          style={{
            width: "100%",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />
      )}

  
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "10px",
          fontSize: "14px",
        }}
      >
        <span
          onClick={() => {
            if (liked) {
              setLikes(likes - 1);
            } else {
              setLikes(likes + 1);
            }
            setLiked(!liked);
          }}
          style={{
            cursor: "pointer",
            color: liked ? "red" : "#333",
          }}
        >
          ❤️ {likes}
        </span>

        <span
          onClick={() => setShowComments(!showComments)}
          style={{ cursor: "pointer" }}
        >
          💬 {comments}
        </span>
      </div>

    
      {showComments && (
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              width: "70%",
              padding: "5px",
              marginRight: "5px",
            }}
          />

          <button
            onClick={() => {
              if (!newComment) return;
              setComments(comments + 1);
              setCommentList([...commentList, newComment]);
              setNewComment("");
            }}
          >
            Send
          </button>

     
          <div style={{ marginTop: "10px" }}>
            {commentList.map((c, i) => (
              <p key={i} style={{ margin: "5px 0" }}>
                💬 {c}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}