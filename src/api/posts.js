// 👉 FAKE API (UI ONLY — no backend)

export const getPosts = async () => {
  return [
    {
      id: 1,
      user: "Alex Chen",
      text: "Just shipped a new feature 🚀",
      image: "",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      user: "Mike Rodriguez",
      text: "Amazing sunset today 🌅",
      image: "",
      likes: 5,
      comments: 1,
    },
    {
      id: 3,
      user: "Sarah Williams",
      text: "Working on my new project 💻",
      image: "",
      likes: 8,
      comments: 2,
    },
  ];
};

export const createPost = async (text) => {
  return {
    id: Date.now(),
    user: "You",
    text: text,
    image: "",
    likes: 0,
    comments: 0,
  };
};