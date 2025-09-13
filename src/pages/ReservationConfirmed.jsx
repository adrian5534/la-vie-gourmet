import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Global.css";
import "../styles/ReservationConfirmed.css";

export default function ReservationConfirmed() {
  const location = useLocation();
  const navigate = useNavigate();
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

  // State for managing edit/cancel UI
  const [isEditing, setIsEditing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [editData, setEditData] = useState({
    guests,
    date,
    time,
    occasion,
    requests,
  });

  // Button handlers
  const handleDownloadPDF = () => {
    alert("Your reservation PDF will be downloaded.");
  };

  const handleAddToCalendar = () => {
    alert("Add to Calendar link will be sent to your email.");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(reservationCode);
    alert("Reservation code copied to clipboard.");
  };

  const handleShareDetails = () => {
    alert("Reservation details shared.");
  };

  const handleEditReservation = () => {
    setIsEditing(true);
  };

  const handleCancelReservation = () => {
    setIsCancelling(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Here you would send updated data to your backend
    setIsEditing(false);
    alert("Reservation updated!");
    // Optionally, update displayed data or navigate
  };

  const handleCancelConfirm = () => {
    setIsCancelling(false);
    alert("Reservation cancelled.");
    navigate("/"); // Redirect to home or reservations page
  };

  const handleCancelAbort = () => {
    setIsCancelling(false);
  };

  const handleAddGiftCard = () => {
    alert("Gift card option selected.");
  };

  const handleSaveToProfile = () => {
    alert("Reservation saved to your profile.");
  };

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
            <button className="custom-btn secondary" onClick={handleDownloadPDF}>Download PDF</button>
            <button className="custom-btn primary add-calendar-btn" onClick={handleAddToCalendar}>Add to Calendar</button>
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
                  <button className="custom-btn secondary copy-btn" onClick={handleCopyCode}>Copy Code</button>
                  <button className="custom-btn primary share-btn" onClick={handleShareDetails}>Share Details</button>
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
                <button className="custom-btn secondary me-2" onClick={handleEditReservation}>Edit Reservation</button>
                <button className="custom-btn secondary" onClick={handleCancelReservation}>Cancel Reservation</button>
              </div>
              {/* Edit Reservation Form */}
              {isEditing && (
                <form className="edit-reservation-form mt-3" onSubmit={handleEditSubmit}>
                  <div className="form-group">
                    <label className="form-label">Guests</label>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      value={editData.guests}
                      onChange={e => setEditData({ ...editData, guests: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input
                      className="form-control"
                      type="date"
                      value={editData.date}
                      onChange={e => setEditData({ ...editData, date: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Time</label>
                    <input
                      className="form-control"
                      type="time"
                      value={editData.time}
                      onChange={e => setEditData({ ...editData, time: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Occasion</label>
                    <input
                      className="form-control"
                      type="text"
                      value={editData.occasion}
                      onChange={e => setEditData({ ...editData, occasion: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Special Requests</label>
                    <input
                      className="form-control"
                      type="text"
                      value={editData.requests}
                      onChange={e => setEditData({ ...editData, requests: e.target.value })}
                    />
                  </div>
                  <div className="edit-actions mt-2">
                    <button type="submit" className="custom-btn primary me-2">Save Changes</button>
                    <button type="button" className="custom-btn secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                </form>
              )}
              {/* Cancel Reservation UI */}
              {isCancelling && (
                <div className="cancel-reservation-confirm mt-3">
                  <div className="fw-bold mb-2">Cancel Reservation</div>
                  <div className="mb-2">Are you sure you want to cancel your reservation?</div>
                  <div className="cancel-actions">
                    <button className="custom-btn primary me-2" onClick={handleCancelConfirm}>Yes, Cancel</button>
                    <button className="custom-btn secondary" onClick={handleCancelAbort}>Keep Reservation</button>
                  </div>
                </div>
              )}
            </div>
            <div className="map-card">
              <div className="map-title">Getting Here</div>
              <div className="map-image">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=120+Orchard+St,+NYC&output=embed"
                  className="map-iframe"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
            <button className="custom-btn secondary me-2" onClick={handleAddGiftCard}>Add a Gift Card</button>
            <button className="custom-btn primary save-profile-btn" onClick={handleSaveToProfile}>Save to Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}