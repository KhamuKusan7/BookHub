import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./MyComponents/Navbar.jsx";
import Footer from "./MyComponents/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
