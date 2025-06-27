import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterSection title="Tennis Shop">
          <p>Your favorite place for tennis equipment.</p>
        </FooterSection>

        <FooterSection title="Links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </FooterSection>

        <FooterSection title="Contact">
          <p>Email: info@tennisshop.rs</p>
          <p>Phone: +381 11 123456</p>
        </FooterSection>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tennis Shop. All rights reserved.</p>
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