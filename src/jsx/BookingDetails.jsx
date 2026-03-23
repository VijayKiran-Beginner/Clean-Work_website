import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Booking.css";

function BookingDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  // Fallback for date and time
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const defaultTime = "9:00 AM";
  const displayDate = bookingData?.date || currentDate;
  const displayTime = bookingData?.time || defaultTime;

  if (!bookingData) {
    return (
      <div className="booking-details-container">
        <div className="booking-details-card animate-slide-in">
          <h2 className="booking-details-title">Error</h2>
          <p className="booking-details-error">No booking details found.</p>
          <button
            className="back-button"
            onClick={() => navigate("/services")}
            aria-label="Return to services page"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-details-container">
      <div className="booking-details-card animate-slide-in">
        <div className="booking-details-icon">✅</div>
        <h2 className="booking-details-title">Booking Confirmed</h2>
        <div className="booking-details-content">
          <div className="booking-details-section">
            <h3 className="booking-details-section-title">Customer Information</h3>
            <p><strong>Name:</strong> {bookingData.name || "N/A"}</p>
            <p><strong>Email:</strong> {bookingData.email || "N/A"}</p>
            <p><strong>Phone:</strong> {bookingData.phone || "N/A"}</p>
          </div>
          <div className="booking-details-section">
            <h3 className="booking-details-section-title">Address</h3>
            <p><strong>Street:</strong> {bookingData.street || "N/A"}</p>
            <p><strong>City:</strong> {bookingData.city || "N/A"}</p>
            <p><strong>State:</strong> {bookingData.state || "N/A"}</p>
            <p><strong>Zip:</strong> {bookingData.zip || "N/A"}</p>
          </div>
          <div className="booking-details-section">
            <h3 className="booking-details-section-title">Service Details</h3>
            <p><strong>Service:</strong> {bookingData.service || "N/A"}</p>
            <p><strong>Booking ID:</strong> {bookingData.bookingId || "N/A"}</p>
            <p><strong>Total Cost:</strong> ${bookingData.totalCost || "0.00"}</p>
            <p className="date-field"><strong>Date:</strong> {displayDate}</p>
            <p className="time-field"><strong>Time:</strong> {displayTime}</p>
            <p><strong>Frequency:</strong> {bookingData.frequency || "N/A"}</p>
            {bookingData.notes && bookingData.notes !== "None" && (
              <p><strong>Notes:</strong> {bookingData.notes}</p>
            )}
            {bookingData.officeSize && (
              <p><strong>Office Size:</strong> {bookingData.officeSize} sq ft</p>
            )}
            {bookingData.numRooms && (
              <p><strong>Number of Rooms:</strong> {bookingData.numRooms}</p>
            )}
            {bookingData.kitchenSize && (
              <p><strong>Kitchen Size:</strong> {bookingData.kitchenSize} sq ft</p>
            )}
            {bookingData.numAppliances && (
              <p><strong>Number of Appliances:</strong> {bookingData.numAppliances}</p>
            )}
            {bookingData.carType && (
              <p><strong>Car Type:</strong> {bookingData.carType}</p>
            )}
            {bookingData.factorySize && (
              <p><strong>Factory Size:</strong> {bookingData.factorySize} sq ft</p>
            )}
            {bookingData.numAreas && (
              <p><strong>Number of Areas:</strong> {bookingData.numAreas}</p>
            )}
          </div>
          <div className="booking-details-section">
            <h3 className="booking-details-section-title">Agent Information</h3>
            <p><strong>Agent Name:</strong> {bookingData.agent?.name || "N/A"}</p>
            <p><strong>Agent Phone:</strong> {bookingData.agent?.phone || "N/A"}</p>
          </div>
        </div>
        <button
          className="back-button"
          onClick={() => navigate("/services")}
          aria-label="Return to services page"
        >
          Back to Services
        </button>
      </div>
    </div>
  );
}

export default BookingDetails;