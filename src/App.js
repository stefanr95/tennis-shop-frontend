import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
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
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
         <Route path="/register-admin" element={<RegisterAdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;