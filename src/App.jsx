import { Routes, Route } from "react-router-dom";
import Home from "./MyComponents/Home";
import BookProfile from "./MyComponents/BookProfile";
import BookDetail from "./MyComponents/BookDetail";
import Profile from "./MyComponents/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BookProfile" element={<BookProfile />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
