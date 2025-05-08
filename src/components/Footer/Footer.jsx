import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import images from "../../assets/images.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h1 className="footer-logo"><img src={images.logo1} alt="Logo" /></h1>
          <p className="footer-description">
            Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa
            justo. Cras eget lorem nunc. Fusce nec urna tempus tempus.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-section ">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Services Offered</a></li>
            <li><a href="#">Product Catalog</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-links">
            <li><a href="#">FAQ/Return</a></li>
            <li><a href="#">Privacy/Terms</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Sizing Guide</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Press Release</a></li>
            <li><a href="#">Return Centre</a></li>
            <li><a href="#">App Download</a></li>
            <li><a href="#">Advertisements</a></li>
          </ul>
        </div>

        {/* Instagram Images */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow @Instagram</h3>
          <div className="footer-images">
            <img src={images.insta1} alt="Instagram 1" />
            <img src={images.insta2} alt="Instagram 2" />
            <img src={images.insta3} alt="Instagram 3" />
            <img src={images.insta4} alt="Instagram 4" />
            <img src={images.insta5} alt="Instagram 5" />
            <img src={images.insta6} alt="Instagram 6" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Teapoy Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
