import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import AdminProducts from "./pages/AdminProducts";
import CartPage from "./pages/CartPage.jsx";
import RegisterAdminPage from "./pages/RegisterAdminPage.jsx";

const HomePage = ({ searchTerm }) => (
  <>
    <HeroSection />
    <FeaturedProducts searchTerm={searchTerm} />
    <CategoriesSection />
  </>
);

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-admin" element={<RegisterAdminPage />} />
        <Route path="/products" element={<ProductPage searchTerm={searchTerm} />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;