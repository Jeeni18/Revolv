// import React from 'react';
// import './Footer.css';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Copyright */}
//         <div className="footer-left">
//           <p>&copy; 2025 Revolv. All Rights Reserved.</p>
//         </div>

//         {/* Contact Section */}
//         <div className="footer-middle">
//           <h4>Contact Us</h4>
//           <p>We’d love to hear from you! Reach out to us anytime.</p>
//           <ul className="contact-info">
//             <li><a href="mailto:support@revolv.com">support@revolv.com</a></li>
//             <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className="footer-right">
//           <h4>Follow Us</h4>
//           <div className="social-links">
//             <a href="https://www.facebook.com/revolv" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
//             <a href="https://twitter.com/revolv" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
//             <a href="https://www.linkedin.com/company/revolv" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
//             <a href="https://www.instagram.com/revolv" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul>
                <li>contact@resolv.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Business Ave, Suite 100</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Resolv. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;