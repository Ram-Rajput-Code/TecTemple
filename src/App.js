import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
