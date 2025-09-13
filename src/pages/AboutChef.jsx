import React from "react";
import "../styles/Global.css";
import "../styles/aboutChef.css";

export default function AboutChef() {
  return (
    <div className="about-chef-page" style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="container py-4">
        <div className="chef-header-row">
          <div className="chef-photo-card">
            <img
              src="/images/chef-eloise.jpg"
              alt="Chef Éloise Martin"
              className="chef-photo"
            />
          </div>
          <div className="chef-main-info">
            <h2 className="chef-name">Chef Éloise Martin</h2>
            <div className="chef-subtitle">
              Michelin-starred visionary blending modern French techniques with seasonal, farm-to-table ingredients.
            </div>
            <div className="chef-actions">
              <button className="custom-btn primary">Chef’s Tasting Menu</button>
              <button className="custom-btn gold">Reserve with Chef</button>
            </div>
            <div className="chef-quote gold-banner">
              Cuisine should feel like a whispered secret—intimate, surprising, unforgettable.<br />
              <span className="chef-quote-author">— Chef Éloise Martin</span>
            </div>
          </div>
        </div>
        <div className="chef-info-row">
          <div className="chef-info-col philosophy-card">
            <h3 className="section-title">Philosophy</h3>
            <div className="philosophy-text">
              At La Vie Gourmet, Chef Éloise crafts menus that honor terroir and time. Every plate is built around peak-season produce, sustainable fisheries, and heritage farms. The result is a restrained elegance—minimalist plating that lets flavor lead.
            </div>
            <div className="philosophy-tags">
              <span className="custom-btn gold small">Michelin Star</span>
              <span className="custom-btn gold small">James Beard Finalist</span>
              <span className="custom-btn gold small">Sommelier’s Choice</span>
              <span className="custom-btn gold small">Sustainable Sourcing</span>
            </div>
          </div>
          <div className="chef-info-col journey-card">
            <h3 className="section-title">Journey</h3>
            <div className="journey-list">
              <div className="journey-item">
                <span className="journey-year">2012</span>
                <span className="journey-desc">Stage in Lyon under Chef Moreau, mastering classical sauces.</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2016</span>
                <span className="journey-desc">Opened pop-up series in Paris exploring plant-forward tasting menus.</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2020</span>
                <span className="journey-desc">Joined La Vie Gourmet, earning a Michelin star in the first year.</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2024</span>
                <span className="journey-desc">Launched the “Seasons” menu celebrating micro-regional producers.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chef-info-row signature-team-row">
          <div className="chef-info-col signature-card">
            <h3 className="section-title">Signature Dishes</h3>
            <div className="signature-dishes">
              <img src="/images/dish-1.jpg" alt="Signature Dish 1" className="signature-dish-img" />
              <img src="/images/dish-2.jpg" alt="Signature Dish 2" className="signature-dish-img" />
              <img src="/images/dish-3.jpg" alt="Signature Dish 3" className="signature-dish-img" />
            </div>
          </div>
          <div className="chef-info-col team-card">
            <h3 className="section-title">Meet the Team</h3>
            <div className="team-list">
              <div className="team-member gold-banner">
                <div className="team-name">Amira Solace</div>
                <div className="team-role">Sous Chef, fermentation and broths</div>
              </div>
              <div className="team-member gold-banner">
                <div className="team-name">Noah Leclair</div>
                <div className="team-role">Pastry Chef, layered textures</div>
              </div>
              <div className="team-member gold-banner">
                <div className="team-name">Lucie Durant</div>
                <div className="team-role">Head Sommelier, old-world pairings</div>
              </div>
            </div>
          </div>
        </div>
        <div className="chef-counter-row">
          <div className="chef-counter-card">
            <div className="counter-title">Book the Chef's Counter</div>
            <div className="counter-desc">
              Intimate six-seat counter with a front-row view of the kitchen. Available Thursday–Saturday.
            </div>
            <div className="counter-actions">
              <button className="custom-btn primary">Check Times</button>
              <button className="custom-btn secondary">Email the Concierge</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}