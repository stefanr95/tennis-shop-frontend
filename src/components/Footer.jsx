import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterSection title="Tennis Shop">
          <p>Tvoja omiljena destinacija za tenisku opremu.</p>
        </FooterSection>

        <FooterSection title="Linkovi">
          <ul>
            <li><Link to="/">Početna</Link></li>
            <li><Link to="/products">Proizvodi</Link></li>
          </ul>
        </FooterSection>

        <FooterSection title="Kontakt">
          <p>Email: info@tennisshop.rs</p>
          <p>Telefon: +381 11 123456</p>
        </FooterSection>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tennis Shop. Sva prava zadržana.</p>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, children }) => (
  <div className="footer-section">
    <h3>{title}</h3>
    {children}
  </div>
);

export default Footer;