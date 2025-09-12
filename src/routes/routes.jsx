import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import ReservationConfirmed from "../pages/ReservationConfirmed";
import EmailConfirmation from "../pages/EmailConfirmation";
// import AboutChef from "./pages/AboutChef";
// import Contact from "./pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reservation-confirmed" element={<ReservationConfirmed />} />
      <Route path="/email-confirmation" element={<EmailConfirmation />} />
      {/* <Route path="/about-chef" element={<AboutChef />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}

    </Routes>
  );
}