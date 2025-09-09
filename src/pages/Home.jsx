import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Global.css";
import "../styles/Home.css";

const features = [
  {
    icon: (
      <span className="d-inline-block feature-icon">
        <i className="fas fa-utensils" style={{ fontSize: 32, color: "var(--foreground)" }}></i>
      </span>
    ),
    title: "Chef’s Tasting Menu",
    desc: "An immersive, multi-course journey.",
  },
  {
    icon: (
      <span className="d-inline-block feature-icon">
        <i className="fas fa-leaf" style={{ fontSize: 32, color: "var(--foreground)" }}></i>
      </span>
    ),
    title: "Seasonal Ingredients",
    desc: "Sourced at peak freshness.",
  },
  {
    icon: (
      <span className="d-inline-block feature-icon">
        <i className="fas fa-wine-glass-alt" style={{ fontSize: 32, color: "var(--foreground)" }}></i>
      </span>
    ),
    title: "Award-Winning Wine List",
    desc: "Curated pairings from our cellar.",
  },
];

const dishes = [
  {
    img: "/scallops.jpg",
    name: "Seared Day-Boat Scallops",
    price: "$32",
    desc: "Celery root purée, preserved lemon, chive oil.",
  },
  {
    img: "/wagyu.jpg",
    name: "Wagyu Striploin",
    price: "$58",
    desc: "Charred spring onions, red wine jus.",
  },
  {
    img: "/risotto.jpg",
    name: "Spring Pea Risotto",
    price: "$24",
    desc: "Parmesan emulsion, mint oil, pea tendrils.",
  },
];

const critics = [
  {
    quote: "A masterclass in restraint and flavor. Every course sings.",
    source: "City Gazette",
  },
  {
    quote: "Impeccable service and an inspired, seasonal menu.",
    source: "Dining Review",
  },
  {
    quote: "An evening you'll talk about for weeks—refined yet welcoming.",
    source: "Guest Feedback",
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "36px" }}>
      {/* Hero Section */}
      <div className="d-flex justify-content-center">
        <div className="hero-section">
          <div className="overlay" />
          <div className="hero-content">
            <h1 className="hero-title">An Evening to Remember</h1>
            <p className="hero-subtitle">Modern cuisine, impeccable service.</p>
            <div className="hero-cta">
              <button className="btn btn-primary">
                <span className="me-2">
                  <i className="fas fa-book" style={{ fontSize: 20, color: "var(--primary-foreground)" }}></i>
                </span>
                View Menu
              </button>
              <button className="btn btn-secondary">
                <span className="me-2">
                  <i className="fas fa-calendar-alt" style={{ fontSize: 20, color: "var(--secondary-foreground)" }}></i>
                </span>
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="container py-4">
        <h5 className="mb-3 fw-bold">Signature Highlights</h5>
        <div className="row g-4 mb-4 even-row">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-md-4 h-100">
              <div className="feature-card">
                {feature.icon}
                <div>
                  <span
                    style={{
                      color: "var(--card-foreground)",
                      fontWeight: 500,
                      fontSize: "1.15rem",
                    }}
                  >
                    {feature.title}
                  </span>
                  <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>
                    {feature.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* About Section */}
        <h5 className="mb-3 fw-bold">About the Experience</h5>
        <div className="about-card mb-4">
          <div className="about-img-container" style={{ flex: "0 0 40%" }}>
            <img
              src="/about-placeholder.jpg"
              alt="About La Vie Gourmet"
              className="about-img"
              style={{ width: "100%", minHeight: 160, objectFit: "cover", borderRadius: 12 }}
            />
          </div>
          <div className="about-desc px-3 py-2" style={{ flex: 1 }}>
            At La Vie Gourmet, we celebrate modern cuisine rooted in classic technique. Our chefs craft seasonal menus that highlight the purity of exceptional ingredients, while our team provides attentive, unobtrusive service to create a truly memorable evening.
          </div>
        </div>
        {/* Featured Dishes */}
        <h5 className="mb-3 fw-bold">Featured Dishes</h5>
        <div className="row g-4 mb-4 even-row">
          {dishes.map((dish, idx) => (
            <div key={idx} className="col-12 col-md-4 h-100">
              <div className="dish-card">
                <img src={dish.img} alt={dish.name} className="dish-img" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold">{dish.name}</span>
                  <span className="fw-bold" style={{ color: "var(--muted-foreground)" }}>{dish.price}</span>
                </div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{dish.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end mb-4">
          <button className="btn btn-outline-secondary">See Full Menu</button>
        </div>
        {/* Reservation Section */}
        <div className="reservation-card mb-4 d-flex align-items-center justify-content-between">
          <div>
            <span className="fw-bold" style={{ color: "var(--accent-foreground)" }}>Reserve Your Table</span>
            <div style={{ color: "var(--accent-foreground)", fontSize: "0.95rem" }}>
              Evenings fill quickly. Secure your preferred time.
            </div>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ backgroundColor: "var(--card)", padding: "10px 12px", borderRadius: "12px" }}>
            <span>
              <i className="fas fa-calendar-alt" style={{ fontSize: 22, color: "var(--accent-foreground)" }}></i>
            </span>
            <span>Sat, Oct 12 • 7:30 PM • 2 Guests</span>
          </div>
          <button className="btn btn-secondary">Reserve Now</button>
        </div>
        {/* Critics Section */}
        <h5 className="mb-3 fw-bold">What Critics Say</h5>
        <div className="row g-4 mb-4 even-row">
          {critics.map((c, idx) => (
            <div key={idx} className="col-12 col-md-4 h-100">
              <div className="critic-card">
                <div style={{ fontStyle: "italic" }}>"{c.quote}"</div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.95rem", marginTop: "8px" }}>{c.source}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Contact Section */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-lg-8">
            <div className="contact-card">
              <div><b>Address</b><br />120 Orchard St, New York, NY</div>
              <div><b>Hours</b><br />Tue–Sun: 5:30 PM – 10:00 PM</div>
              <div><b>Phone</b><br />(212) 555-0138</div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-outline-secondary">
              <i className="fas fa-envelope me-2"></i>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}