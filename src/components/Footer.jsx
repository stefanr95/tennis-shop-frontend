import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>Tennis Shop</h2>
          <p>Tvoja omiljena destinacija za tenisku opremu.</p>
        </div>

        <div className="footer-section links">
          <h3>Linkovi</h3>
          <ul>
            <li><Link to="/">Početna</Link></li>
            <li><Link to="/products">Proizvodi</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Kontakt</h3>
          <p>Email: info@tennisshop.rs</p>
          <p>Telefon: +381 11 123456</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tennis Shop. Sva prava zadržana.</p>
      </div>
    </footer>
  );
};

export default Footer;