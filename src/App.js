import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/Home.jsx";
import ShopAll from "./pages/ShopAll.jsx";
import '../src/App.css';
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
   
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/"element={<HomePage />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/help" element={<h1>Help Center</h1>} />
        <Route path="/computers" element={<h1>Computers</h1>} />
        <Route path="/tablets" element={<h1>Tablets</h1>} />
        <Route path="/drones" element={<h1>Drones & Cameras</h1>} />
        <Route path="/audio" element={<h1>Audio</h1>} />
        <Route path="/mobile" element={<h1>Mobile</h1>} />
        <Route path="/tv-home-cinema" element={<h1>TV & Home Cinema</h1>} />
        <Route path="/wearable-tech" element={<h1>Wearable Tech</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/sale" element={<h1>Sale</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
