import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Global.css";
import "../styles/ReservationConfirmed.css";

export default function ReservationConfirmed() {
  const location = useLocation();
  const {
    guests = 2,
    date,
    time,
    occasion = "None",
    name = "",
    email = "",
    phone = "",
    requests = "",
    emailSent = false,
  } = location.state || {};

  // Format date and time
  const formattedDate = date
    ? new Date(date).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })
    : "—";
  const formattedTime = time
    ? new Date(time).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    : "—";

  // Example reservation code (could be generated)
  const reservationCode = "LVG-8F42-TASTING";

  return (
    <div className="reservation-confirmed-page" style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h1 className="mb-1">Reservation Confirmed</h1>
            <div className="text-muted">
              Thank you. Your table has been secured. A confirmation email has been sent{emailSent ? " (Email sent)" : ""}.
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">Download PDF</button>
            <button className="btn btn-primary add-calendar-btn">Add to Calendar</button>
          </div>
        </div>
        <div className="row g-4">
          {/* Left: Confirmation Card */}
          <div className="col-12 col-lg-4">
            <div className="confirm-card">
              <div className="alert alert-success mb-3">
                <span>You're all set. We look forward to hosting you.</span>
              </div>
              <div className="reservation-details-card">
                <div className="reservation-code-row">
                  <div className="reservation-code">
                    {reservationCode}
                  </div>
                  <div className="qr-code-placeholder">
                    QR CODE
                  </div>
                </div>
                <div className="reservation-info-grid">
                  <div className="info-block gold">{formattedDate}<br />{formattedTime}</div>
                  <div className="info-block gold">{guests} {guests === 1 ? "Guest" : "Guests"}</div>
                  <div className="info-block gold">120 Orchard St, NYC</div>
                  <div className="info-block gold">{occasion !== "None" ? occasion : "Chef's Tasting Menu"}</div>
                </div>
                <div className="reservation-contact mt-3">
                  <div><strong>Name:</strong> {name || "—"}</div>
                  <div><strong>Email:</strong> {email || "—"}</div>
                  <div><strong>Phone:</strong> {phone || "—"}</div>
                </div>
                <div className="reservation-actions mt-3">
                  <button className="btn btn-outline-secondary copy-btn">Copy Code</button>
                  <button className="btn btn-primary share-btn">Share Details</button>
                </div>
              </div>
              <div className="dining-notes mt-4">
                <div className="fw-bold mb-2">Dining Notes</div>
                <div className="note-text">
                  Please arrive 10 minutes early. We'll hold your table for 15 minutes.<br />
                  Kindly inform us of any allergies in advance.<br />
                  Dress code: smart casual.<br />
                  {requests && <span>Special Requests: {requests}</span>}
                </div>
              </div>
            </div>
          </div>
          {/* Right: Manage + Map */}
          <div className="col-12 col-lg-8">
            <div className="manage-card mb-3">
              <div className="manage-title">Manage Reservation</div>
              <div className="manage-subtitle">Modify time or party size<br />Message the restaurant<br />Get day-of reminders</div>
              <div className="manage-actions">
                <button className="btn btn-outline-secondary me-2">Edit Reservation</button>
                <button className="btn btn-outline-secondary">Cancel Reservation</button>
              </div>
            </div>
            <div className="map-card">
              <div className="map-title">Getting Here</div>
              <div className="map-image">
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=Golden+Gate+Park,San+Francisco,CA&zoom=13&size=600x400&key=YOUR_API_KEY" alt="Map" style={{ width: "100%", borderRadius: "12px" }} />
              </div>
              <div className="map-notes">
                <div className="map-note gold">Valet available on arrival</div>
                <div className="map-note gold">Subway F to Delancey St</div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer: Enhance Your Evening */}
        <div className="enhance-footer mt-4">
          <div className="enhance-title">Enhance Your Evening</div>
          <div className="enhance-options">
            <span>Wine Pairing</span>
            <span>Occasion Flowers</span>
            <span>Special Request</span>
          </div>
          <div className="enhance-actions">
            <button className="btn btn-outline-secondary me-2">Add a Gift Card</button>
            <button className="btn btn-primary save-profile-btn">Save to Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}