import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import AdminProducts from "./pages/AdminProducts";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/admin/add-product" element={<AddProductPage />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;