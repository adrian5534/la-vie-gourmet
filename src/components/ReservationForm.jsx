import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ReservationForm({
  values,
  onChange,
  onConfirm,
  onEmail,
}) {
  const {
    guests,
    date,
    time, // Date object representing time-of-day
    occasion,
    name,
    email,
    phone,
    requests,
  } = values;

  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();
    // Basic validation
    if (!guests) return toast.error("Please select party size.");
    if (!date) return toast.error("Please select a date.");
    if (!time) return toast.error("Please select a time.");
    if (!name) return toast.error("Please enter your name.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email.");
    if (!phone) return toast.error("Please enter your phone.");

    onConfirm?.();
    navigate("/reservation-confirmed", { state: { ...values } });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email to send confirmation.");
    onEmail?.();
    navigate("/email-confirmation", { state: { ...values, emailSent: true } });
  };

  // Helpers to keep inputs controlled
  const set = (field) => (val) => onChange(field, val);

  // For DatePicker time-only control, ensure we pass a Date
  const timeIntervals = 30; // 30-minute intervals

  return (
    <form className="reserve-card reservation-form">
      <div className="form-group">
        <label className="form-label">Party Size</label>
        <select
          className="form-select"
          value={guests}
          onChange={(e) => set("guests")(Number(e.target.value))}
        >
          {[...Array(12)].map((_, i) => {
            const n = i + 1;
            return (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Date</label>
          <DatePicker
            selected={date}
            onChange={(d) => set("date")(d)}
            minDate={new Date()}
            placeholderText="Select date"
            className="form-control"
            calendarStartDay={1}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Time</label>
          <DatePicker
            selected={time}
            onChange={(t) => set("time")(t)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={timeIntervals}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Select time"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Occasion</label>
        <select
          className="form-select"
          value={occasion}
          onChange={(e) => set("occasion")(e.target.value)}
        >
          {["None", "Birthday", "Anniversary", "Business", "Other"].map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => set("name")(e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => set("email")(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            type="tel"
            placeholder="(555) 000-0000"
            value={phone}
            onChange={(e) => set("phone")(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Special Requests</label>
        <textarea
          className="form-control"
          rows={4}
          placeholder="Allergies, seating preferences..."
          value={requests}
          onChange={(e) => set("requests")(e.target.value)}
        />
      </div>

      <div className="reserve-actions">
        <button
          className="btn btn-primary reserve-primary"
          onClick={handleConfirm}
          type="button"
        >
          Confirm Reservation
        </button>
        <button
          className="btn btn-secondary reserve-secondary"
          onClick={handleEmail}
          type="button"
        >
          Email Confirmation
        </button>
      </div>
      <div className="reserve-note">
        By confirming, you agree to our 24-hour cancellation policy.
      </div>
    </form>
  );
}