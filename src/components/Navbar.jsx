import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Navbar.css";
import "../styles/Global.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: "var(--foreground)", fontWeight: 700 }}>
          <span className="navbar-logo" />
          La Vie Gourmet
        </a>
        {/* Burger Icon */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="fas fa-bars"></span>
        </button>
        {/* Desktop Menu */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link active nav-home" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reservations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Chef</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
        {/* Mobile Slide-out Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <span className="fas fa-times"></span>
          </button>
          <ul className="mobile-nav-list">
            <li>
              <a className="nav-link active nav-home" href="#" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>Menu</a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>Reservations</a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>About Chef</a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
        {/* Overlay for mobile menu */}
        {menuOpen && <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />}
      </div>
    </nav>
  );
}