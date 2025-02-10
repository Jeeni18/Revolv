import "./Footer.css"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <section id='contact'>
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright */}
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Resolv. All rights reserved.</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-right">
          <a href="#" className="social-icon">
            <Facebook />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="social-icon">
            <Twitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="social-icon">
            <Linkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="social-icon">
            <Instagram />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
    </section>
  )
}

export default Footer

