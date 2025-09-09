import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Navbar.css";
import "../styles/Global.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ color: "var(--foreground)", fontWeight: 700 }}
        >
          <span className="navbar-logo" />
          La Vie Gourmet
        </NavLink>
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
            <NavLink className="nav-link nav-home" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reservations">
              Reservations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-chef">
              About Chef
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Mobile Slide-out Menu */}
        {menuOpen && (
          <>
            <div className="mobile-menu open">
              <button className="close-btn" onClick={() => setMenuOpen(false)}>
                <span className="fas fa-times"></span>
              </button>
              <ul className="mobile-nav-list">
                <li>
                  <NavLink
                    className="nav-link nav-home"
                    to="/"
                    end
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/reservations"
                    onClick={() => setMenuOpen(false)}
                  >
                    Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/about-chef"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Chef
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Overlay for mobile menu */}
            <div
              className="mobile-menu-overlay"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </div>
    </nav>
  );
}