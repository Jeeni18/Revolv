import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright */}
        <div className="footer-left">
          <p>&copy; 2025 Revolv. All Rights Reserved.</p>
        </div>

        {/* Contact Section */}
        <div className="footer-middle">
          <h4>Contact Us</h4>
          <p>We’d love to hear from you! Reach out to us anytime.</p>
          <ul className="contact-info">
            <li><a href="mailto:support@revolv.com">support@revolv.com</a></li>
            <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/revolv" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            <a href="https://twitter.com/revolv" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://www.linkedin.com/company/revolv" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/revolv" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
