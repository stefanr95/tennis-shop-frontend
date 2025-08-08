import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = ({ onSearch }) => {
  const navItems = [
    { path: "/login", label: "Login" },
    { path: "/register-admin", label: "Register Admin" }
  ];

  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if(onSearch) {
      onSearch(value); 
    }
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        <Link to="/" className="logo">Tennis Shop</Link>

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          aria-label="Search products"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <nav className="nav-links">
          {navItems.map(({ path, label }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}

          <Link to="/cart" className="cart-link" style={{ position: "relative" }}>
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;