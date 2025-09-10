import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Global.css";
import "../styles/Menu.css";

const menuSections = [
  { icon: "fas fa-utensils", label: "Tasting Menu" },
  { icon: "fas fa-seedling", label: "Starters" },
  { icon: "fas fa-drumstick-bite", label: "Mains" },
  { icon: "fas fa-ice-cream", label: "Desserts" },
  { icon: "fas fa-wine-glass-alt", label: "Wine Pairings" },
];

const tastingMenu = [
  { img: "/amuse.jpg", name: "Amuse-Bouche", desc: "Seasonal bite to awaken the palate", included: true },
  { img: "/tuna.jpg", name: "Tuna Crudo", desc: "Citrus, fennel pollen, olive oil" },
  { img: "/garden.jpg", name: "Garden Composition", desc: "Heirloom vegetables, herbal emulsion" },
  { img: "/wagyu.jpg", name: "Wagyu", desc: "Charred leek, red wine jus" },
];

const starters = [
  { img: "/beet.jpg", name: "Roasted Beet Salad", desc: "Goat cheese, pistachio, citrus", price: "$18" },
  { img: "/lobster.jpg", name: "Lobster Bisque", desc: "Cognac cream, chive", price: "$22" },
];

const mains = [
  { img: "/scallops.jpg", name: "Seared Scallops", desc: "Cauliflower purée, caper raisin", price: "$42" },
  { img: "/duck.jpg", name: "Duck Breast", desc: "Cherry gastrique, farro", price: "$44" },
];

const desserts = [
  { img: "/souffle.jpg", name: "Chocolate Soufflé", desc: "Vanilla crème anglaise", price: "$14" },
  { img: "/panna.jpg", name: "Elderflower Panna Cotta", desc: "Macerated berries", price: "$13" },
];

const winePairings = [
  { img: "/classic.jpg", name: "Classic Pairing", desc: "A balanced journey across regions", price: "$65" },
  { img: "/reserve.jpg", name: "Reserve Pairing", desc: "Featuring limited allocations", price: "$110" },
];

export default function Menu() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "36px" }}>
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="fw-bold mb-0">Our Menu</h2>
          <div className="menu-header-actions">
            <button className="menu-header-btn me-2">
              <i className="fas fa-utensils me-2"></i> Chef's Tasting
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-calendar-alt me-2"></i> Reserve a Table
            </button>
          </div>
        </div>
        <div className="mb-2" style={{ color: "var(--muted-foreground)" }}>
          A refined selection crafted nightly with seasonal ingredients.
        </div>
        {/* Filters */}
        <div className="menu-filter-bar mb-4">
          <button className="menu-filter-btn">All</button>
          <button className="menu-filter-btn">Tasting</button>
          <button className="menu-filter-btn">A La Carte</button>
          <button className="menu-filter-btn">Wine</button>
          <button className="menu-filter-btn">Vegetarian</button>
        </div>
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="bg-white rounded-3 p-3" style={{ border: "1px solid var(--border)" }}>
              <div className="fw-bold mb-3">Sections</div>
              {menuSections.map((section, idx) => (
                <button key={idx} className="btn btn-outline-secondary w-100 mb-2 text-start">
                  <i className={`${section.icon} me-2`}></i>
                  {section.label}
                </button>
              ))}
            </div>
          </div>
          {/* Main Menu Content */}
          <div className="col-12 col-lg-9">
            {/* Tasting Menu */}
            <div className="menu-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">Chef’s Tasting Menu</h5>
                <span style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>
                  7 courses • available nightly
                </span>
              </div>
              <div className="row g-3">
                {tastingMenu.map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="menu-card d-flex align-items-center p-2 rounded-3" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                      <img src={item.img} alt={item.name} className="rounded-3 me-3" style={{ width: 56, height: 56, objectFit: "cover" }} />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{item.name}</div>
                        <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{item.desc}</div>
                      </div>
                      {item.included && <span className="badge ms-3">Included</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2" style={{ color: "var(--muted-foreground)", fontSize: "0.9rem" }}>
                Optional wine pairing available
              </div>
            </div>
            {/* Starters */}
            <div className="menu-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">Starters</h5>
                <span style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>Choose to begin</span>
              </div>
              <div className="row g-3">
                {starters.map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="menu-card d-flex align-items-center p-2 rounded-3" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                      <img src={item.img} alt={item.name} className="rounded-3 me-3" style={{ width: 56, height: 56, objectFit: "cover" }} />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{item.name}</div>
                        <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{item.desc}</div>
                      </div>
                      <span className="fw-bold ms-3" style={{ color: "var(--muted-foreground)" }}>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mains */}
            <div className="menu-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">Mains</h5>
                <span style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>Signature plates</span>
              </div>
              <div className="row g-3">
                {mains.map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="menu-card d-flex align-items-center p-2 rounded-3" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                      <img src={item.img} alt={item.name} className="rounded-3 me-3" style={{ width: 56, height: 56, objectFit: "cover" }} />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{item.name}</div>
                        <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{item.desc}</div>
                      </div>
                      <span className="fw-bold ms-3" style={{ color: "var(--muted-foreground)" }}>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Desserts */}
            <div className="menu-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">Desserts</h5>
                <span style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>A sweet finish</span>
              </div>
              <div className="row g-3">
                {desserts.map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="menu-card d-flex align-items-center p-2 rounded-3" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                      <img src={item.img} alt={item.name} className="rounded-3 me-3" style={{ width: 56, height: 56, objectFit: "cover" }} />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{item.name}</div>
                        <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{item.desc}</div>
                      </div>
                      <span className="fw-bold ms-3" style={{ color: "var(--muted-foreground)" }}>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Wine Pairings */}
            <div className="menu-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">Wine Pairings</h5>
                <span style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>Curated by our sommelier</span>
              </div>
              <div className="row g-3">
                {winePairings.map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="menu-card d-flex align-items-center p-2 rounded-3" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                      <img src={item.img} alt={item.name} className="rounded-3 me-3" style={{ width: 56, height: 56, objectFit: "cover" }} />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{item.name}</div>
                        <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{item.desc}</div>
                      </div>
                      <span className="fw-bold ms-3" style={{ color: "var(--muted-foreground)" }}>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}