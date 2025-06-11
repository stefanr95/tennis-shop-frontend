import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" className="logo">Tennis Shop</Link>
        
        <input type="text" placeholder="Search products..." className="search-bar" />
        
        <nav className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;