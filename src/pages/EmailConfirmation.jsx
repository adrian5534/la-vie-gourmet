import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Global.css";
import "../styles/emailConfirmation.css";

export default function EmailConfirmation() {
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
    reservationCode = "LVG-8F42-TASTING",
  } = location.state || {};

  // Format date and time
  const formattedDate = date
    ? new Date(date).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })
    : "—";
  const formattedTime = time
    ? new Date(time).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    : "—";

  const [recipients, setRecipients] = useState(email || "");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState(
    `Your La Vie Gourmet Reservation — ${formattedDate} - ${formattedTime}`
  );
  const [message, setMessage] = useState(
    `Reservation      ${reservationCode}
Date & Time      ${formattedDate} - ${formattedTime}
Guests           ${guests}
Experience       ${occasion !== "None" ? occasion : "Chef’s Tasting Menu"}
Location         120 Orchard St, NYC

Name             ${name}
Email            ${email}
Phone            ${phone}
${requests ? `Special Requests  ${requests}` : ""}

Dear ${name || "Guest"},

We're delighted to confirm your reservation at La Vie Gourmet. We look forward to hosting you for an unforgettable evening.

Please arrive 10 minutes early. We will hold your table for 15 minutes. Kindly inform us of any allergies in advance. Dress code: smart casual.

Warm regards,
La Vie Gourmet Team`
  );

  return (
    <div className="email-confirmation-page" style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="mb-1">Send Email Confirmation</h1>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">Send to Me</button>
            <button className="btn btn-primary send-email-btn">Send Email</button>
          </div>
        </div>
        <div className="row g-4">
          {/* Left: Email Form */}
          <div className="col-12 col-lg-7">
            <form className="email-card">
              <div className="form-group">
                <label className="form-label">Recipients</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="To guest@example.com"
                  value={recipients}
                  onChange={e => setRecipients(e.target.value)}
                />
                <input
                  className="form-control mt-2"
                  type="email"
                  placeholder="CC Optional"
                  value={cc}
                  onChange={e => setCc(e.target.value)}
                />
                <input
                  className="form-control mt-2"
                  type="email"
                  placeholder="BCC Optional"
                  value={bcc}
                  onChange={e => setBcc(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-control"
                  type="text"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <div className="message-toolbar mb-2">
                  <span className="badge confirmed-badge">Confirmed</span>
                  <button type="button" className="btn btn-outline-secondary btn-sm ms-2">Preview</button>
                  <button type="button" className="btn btn-outline-secondary btn-sm ms-2">Copy Text</button>
                </div>
                <textarea
                  className="form-control message-area"
                  rows={10}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                {/* Display phone and requests below the textarea for lint and user clarity */}
                <div className="mt-2" style={{ fontSize: "0.95rem", color: "var(--muted-foreground)" }}>
                  <div><strong>Phone:</strong> {phone || "—"}</div>
                  {requests && <div><strong>Special Requests:</strong> {requests}</div>}
                </div>
              </div>
              <div className="ready-banner mt-3">
                Ready to send confirmation email.
              </div>
            </form>
          </div>
          {/* Right: Attachments & Options */}
          <div className="col-12 col-lg-5">
            <div className="email-card">
              <div className="attachments-section mb-3">
                <div className="fw-bold mb-2">Attachments</div>
                <div className="attachment-row">
                  <span>Reservation PDF</span>
                  <button className="btn btn-outline-secondary btn-sm">Remove</button>
                </div>
                <div className="attachment-row">
                  <span>QR Code Image</span>
                  <button className="btn btn-outline-secondary btn-sm">Remove</button>
                </div>
              </div>
              <div className="delivery-section mb-3">
                <div className="fw-bold mb-2">Delivery Options</div>
                <div className="delivery-options">
                  <button className="btn gold-btn me-2">Email</button>
                  <button className="btn gold-btn">SMS Link</button>
                </div>
                <div className="delivery-note mt-2">
                  We will send a copy to your profile email and any additional recipients listed above.
                </div>
              </div>
              <div className="after-section mb-3">
                <div className="fw-bold mb-2">After Sending</div>
                <div className="after-options">
                  <div>Include "Add to Calendar" link</div>
                  <div>Suggest Wine Pairing Add-on</div>
                </div>
              </div>
              <div className="send-actions d-flex justify-content-end gap-2">
                <button className="btn btn-outline-secondary">Cancel</button>
                <button className="btn btn-primary send-confirmation-btn">Send Confirmation</button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer: Save Draft / Send Now */}
        <div className="email-footer mt-4 d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">Save Draft</button>
          <button className="btn btn-primary send-email-btn">Send Now</button>
        </div>
      </div>
    </div>
  );
}