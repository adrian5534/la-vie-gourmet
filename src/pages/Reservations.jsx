import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Global.css";
import "../styles/Reservations.css";
import ReservationForm from "../components/ReservationForm.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reservations() {
  // Initial state
  const [values, setValues] = useState({
    guests: 2,
    date: null,
    time: null, // Date object (time-of-day)
    occasion: "None",
    name: "",
    email: "",
    phone: "",
    requests: "",
  });

  const availability = useMemo(
    () => ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"],
    []
  );

  const setField = (field, value) =>
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

  // Convert a "7:00 PM" label into a Date storing only the time
  const parseTimeLabel = (label) => {
    // Build a date for today just to hold the time
    const base = new Date();
    const [time, meridian] = label.split(" ");
    let [h, m] = time.split(":").map((n) => parseInt(n, 10));
    if (meridian.toLowerCase() === "pm" && h !== 12) h += 12;
    if (meridian.toLowerCase() === "am" && h === 12) h = 0;
    base.setHours(h, m || 0, 0, 0);
    return new Date(base);
  };

  const formatTime = (date) =>
    date ? date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "";

  const formatDate = (date) =>
    date ? date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" }) : "";

  const handleConfirm = () => {
    toast.success("Reservation confirmed! We look forward to hosting you.");
  };

  const handleEmail = () => {
    toast.info("A confirmation email has been sent.");
  };

  const selectedTimeLabel = values.time ? formatTime(values.time) : "";

  return (
    <div className="reservations-page" style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Header */}
        <div className="reserve-header d-flex align-items-center justify-content-between mb-3">
          <div>
            <h1 className="mb-1">Reserve a Table</h1>
            <div className="text-muted">
              An intimate dining experience awaits. Please share your details below.
            </div>
          </div>
          <button className="btn call-host-btn">
            Call the Host
          </button>
        </div>

        <div className="row g-4">
          {/* Left: Form */}
          <div className="col-12 col-lg-5">
            <ReservationForm
              values={values}
              onChange={setField}
              onConfirm={handleConfirm}
              onEmail={handleEmail}
            />
          </div>

          {/* Right: Availability + Summary */}
          <div className="col-12 col-lg-7">
            <div className="reserve-card availability-card">
              <div className="availability-header">
                <div className="title">Availability</div>
                <div className="subtitle">
                  Popular times fill quickly. Suggested times for your party size:
                </div>
              </div>

              <div className="time-slots">
                {availability.map((slot) => {
                  const selected = selectedTimeLabel === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      className={`time-slot ${selected ? "selected" : ""}`}
                      onClick={() => setField("time", parseTimeLabel(slot))}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              <div className="summary">
                <div className="summary-title">Reservation Summary</div>

                <div className="summary-item">
                  <span>Guests</span>
                  <span>{values.guests}</span>
                </div>

                <div className="summary-item">
                  <span>Date</span>
                  <span>{formatDate(values.date) || "—"}</span>
                </div>

                <div className="summary-item">
                  <span>Time</span>
                  <span>{selectedTimeLabel || "—"}</span>
                </div>

                <div className="summary-item">
                  <span>Occasion</span>
                  <span>{values.occasion || "None"}</span>
                </div>

                <div className="summary-note">
                  Dress code is smart casual. Please arrive 10 minutes early.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toasts */}
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}