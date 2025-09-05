import React from "react";
import "../styles/Global.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: "var(--foreground)", fontWeight: 700 }}>
          <span style={{
            background: "var(--secondary)",
            borderRadius: "50%",
            width: 22,
            height: 22,
            display: "inline-block",
            marginRight: 10
          }} />
          La Vie Gourmet
        </a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link active" style={{ color: "var(--card)", background: "var(--primary)", borderRadius: "8px", padding: "6px 18px" }} href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "var(--foreground)" }} href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "var(--foreground)" }} href="#">Reservations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "var(--foreground)" }} href="#">About Chef</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "var(--foreground)" }} href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}