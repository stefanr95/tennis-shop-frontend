import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navItems = [
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
    { path: "/cart", label: "Cart" }
  ];

  return (
    <header className="main-header">
      <div className="container header-container">
        <Link to="/" className="logo">Tennis Shop</Link>

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          aria-label="Search products"
        />

        <nav className="nav-links">
          {navItems.map(({ path, label }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;