import React, { useState, useEffect } from "react";
import "../css/Booking.css"; // Import for consistent styling

function ServiceCard({ title, shortInfo, onSelect, slug }) {
  const [hasBooking, setHasBooking] = useState(false);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const isBooked = bookings.some((booking) => booking.service === title);
    setHasBooking(isBooked);
    console.log(`ServiceCard (${title}): Has booking: ${isBooked}`);
  }, [title]);

  return (
    <div className="service-card">
      <h2 className="service-card-title">{title}</h2>
      <p className="service-card-info">{shortInfo}</p>
      {hasBooking && (
        <p className="booking-indicator">✅ Booking Active</p>
      )}
      <button
        onClick={onSelect}
        className="book-button"
        aria-label={`Book ${title} service`}
      >
        Book Now
      </button>
    </div>
  );
}

export default ServiceCard;