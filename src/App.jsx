import { Routes, Route } from "react-router-dom";
import BookDetail from "./MyComponents/BookDetail";
import BookProfile from "./MyComponents/BookProfile";
import Home from "./MyComponents/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BookProfile" element={<BookProfile />} />
      <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
  );
}

export default App;
