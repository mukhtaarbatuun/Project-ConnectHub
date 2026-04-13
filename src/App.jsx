import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Protected layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;