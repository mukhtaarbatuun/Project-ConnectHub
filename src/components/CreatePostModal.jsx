import { useState } from "react";
import { createPost } from "../api/posts";
export default function CreatePostModal({ closeModal, onCreate }) {
  const [text, setText] = useState("");

 const handleSubmit = async () => {
  if (!text) return;

  let newPost = await createPost(text);




  if (!newPost) {
    newPost = {
      id: Date.now(),
      user: "You",
      text: text,
      image: "",
      likes: 0,
      comments: 0,
    };
  }

  onCreate(newPost);
  closeModal();
};
  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: "300px"
      }}
    >
      <h3>Create Post</h3>

      <textarea
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", minHeight: "80px"  }}
      />

      <button onClick={handleSubmit}>Post</button>
      <button onClick={closeModal} style={{ marginLeft: "10px" }}>
        Close
      </button>
    </div>
  );
}