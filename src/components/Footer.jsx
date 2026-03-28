import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <h3>GIG Exquisite Dining</h3>
          <p>Premium quality garri and oven-dried fish, produced with care and excellence.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li>📍 Ijebu Ode, Ogun State, Nigeria</li>
            <li>📞 +234 817 313 2957</li>
            <li>📞 +234 809 552 2771</li>
            <li>📞 +234 812 902 3785</li>
            <li>✉️ gigexdining@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} GIG Exquisite Dining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
