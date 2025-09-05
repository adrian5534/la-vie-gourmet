import React from "react";
import "../styles/Global.css";

export default function Footer() {
  return (
    <footer style={{ background: "var(--foreground)", color: "var(--card)", padding: "18px 0" }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span style={{
            background: "var(--secondary)",
            borderRadius: "50%",
            width: 18,
            height: 18,
            display: "inline-block",
            marginRight: 10
          }} />
          <span style={{ fontWeight: 700 }}>La Vie Gourmet</span>
        </div>
        <div>
          <span className="mx-3">Menu</span>
          <span className="mx-3">Reservations</span>
          <span className="mx-3">Contact</span>
        </div>
        <div style={{ fontSize: "0.95rem" }}>© La Vie Gourmet</div>
      </div>
    </footer>
  );
} 