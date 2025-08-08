import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import AdminProducts from "./pages/AdminProducts";
import CartPage from "./pages/CartPage.jsx"
import RegisterAdminPage from "./pages/RegisterAdminPage.jsx";

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedProducts />
    <CategoriesSection />
  </>
);

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<HomePage />} />
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