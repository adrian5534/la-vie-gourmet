import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Footer.css";
import "../styles/Global.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="/logo.png" alt="La Vie Gourmet Logo" className="footer-logo-img" />
          <span className="footer-title">La Vie Gourmet</span>
        </div>
        <div className="footer-links">
          <span className="mx-3">Menu</span>
          <span className="mx-3">Reservations</span>
          <span className="mx-3">Contact</span>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram" className="footer-social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook" className="footer-social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="footer-social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="footer-copyright">
          © La Vie Gourmet
        </div>
      </div>
      <div className="footer-credits">
        Credits: Adrian Reynolds &nbsp;|&nbsp; Powered by YSB Academy
      </div>
    </footer>
  );
}