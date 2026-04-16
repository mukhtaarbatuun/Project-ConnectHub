import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CreatePostModal from "../components/CreatePostModal";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar openModal={() => setShowModal(true)} />

      <div style={{ flex: 1 }}>
        <Topbar />

      <div
  style={{
    flex: 1,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "700px",
    }}
  >
    <Outlet context={{ posts }} />
  </div>
</div>
      </div>
{showModal && (
  <CreatePostModal
    closeModal={() => setShowModal(false)}
    onCreate={(newPost) => {
      setPosts([newPost, ...posts]);
    }}
  />
)}
    
    </div>
  );
}