import React, { useState } from "react";
import "../styles/Global.css";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  return (
    <div className="contact-page" style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="container py-4">
        <h1 className="contact-title">Contact the Concierge</h1>
        <div className="contact-subtitle">
          We’re here to help with reservations, private dining, dietary requests, and special occasions.
        </div>
        <div className="contact-main-row">
          <div className="contact-col contact-general-card">
            <h3 className="section-title">General Inquiries</h3>
            <div className="contact-info-list">
              <span className="custom-btn gold block">concierge@laviegourmet.com</span>
              <span className="custom-btn gold block">+1 (555) 014-2210</span>
              <span className="custom-btn gold block">Mon–Sat, 10:00–22:00</span>
            </div>
          </div>
          <div className="contact-col contact-location-card">
            <h3 className="section-title">Location</h3>
            <div className="contact-location-address">
              128 Rue des Arts, Suite 5, San Francisco, CA
            </div>
            <div className="contact-map">
              <img src="/images/map-sf.png" alt="Map" className="contact-map-img" />
            </div>
          </div>
          <div className="contact-col contact-events-card">
            <h3 className="section-title">Private Events</h3>
            <div className="contact-events-desc">
              Host intimate celebrations for 8–30 guests. Seasonal menus, curated wine pairings, and dedicated service.
            </div>
            <div className="contact-events-actions">
              <button className="custom-btn primary small">Request a Date</button>
              <button className="custom-btn secondary small">View Brochure</button>
            </div>
            <div className="contact-access-section">
              <div className="contact-access-title">Dietary & Accessibility</div>
              <div className="contact-access-list">
                <span className="custom-btn gold block small">Vegetarian, vegan, and gluten-free menus with 48h notice</span>
                <span className="custom-btn gold block small">Step-free access and ADA-compliant restrooms</span>
                <span className="custom-btn gold block small">Kindly inform us of severe allergies in advance</span>
              </div>
            </div>
            <div className="contact-social-section">
              <div className="contact-social-title">Stay Connected</div>
              <div className="contact-social-list">
                <button className="custom-btn secondary small">Instagram</button>
                <button className="custom-btn secondary small">WhatsApp</button>
                <button className="custom-btn secondary small">Join Newsletter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-row">
          <form className="contact-form-card">
            <h3 className="section-title">Send a Message</h3>
            <div className="contact-form-fields">
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="form-control"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="form-control"
                type="tel"
                placeholder="+1"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Private dining"
                value={form.topic}
                onChange={e => setForm({ ...form, topic: e.target.value })}
              />
              <textarea
                className="form-control message-area"
                rows={4}
                placeholder="I'd like to inquire about..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="contact-form-actions">
              <button type="button" className="custom-btn secondary small">Add attachment</button>
              <button type="submit" className="custom-btn primary">Send Message</button>
            </div>
          </form>
        </div>
        <div className="contact-footer-row">
          <div className="contact-footer-card">
            <div className="contact-footer-info">
              <div className="contact-footer-title">Concierge Response Time</div>
              <div className="contact-footer-desc">
                We typically reply within 2 hours during service days.
              </div>
            </div>
            <div className="contact-footer-actions">
              <button className="custom-btn secondary small">Check Today's Hours</button>
              <button className="custom-btn primary small">Call Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}