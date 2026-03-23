import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import ServiceCard from "./servicecard";
import OfficeCleaningForm from "./OfficeCleaningForm";
import KitchenCleaningForm from "./KitchenCleaningForm";
import CarWashingForm from "./CarWashingForm";
import FactoryCleaningForm from "./FactoryCleaningForm";
import "../css/Services.css";
import "../css/Booking.css";

function Services() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [selectedService, setSelectedService] = useState(null);
  const [bookings, setBookings] = useState([]);

  const services = [
    {
      title: "Office Cleaning",
      shortInfo: "Professional staff for tidy and hygienic office spaces.",
      slug: "office-cleaning",
    },
    {
      title: "Kitchen Cleaning",
      shortInfo: "Spotless kitchens for homes and restaurants.",
      slug: "kitchen-cleaning",
    },
    {
      title: "Car Washing",
      shortInfo: "Affordable and water-efficient car cleaning.",
      slug: "car-washing",
    },
    {
      title: "Factory Cleaning",
      shortInfo: "Heavy-duty industrial cleaning for safety and standards.",
      slug: "factory-cleaning",
    },
  ];

  useEffect(() => {
    if (isLoggedIn && user?.email) {
      const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const userBookings = storedBookings.filter(
        (booking) => booking.email === user.email
      );
      console.log("Services: Loaded user bookings for email:", user.email, userBookings);
      setBookings(userBookings);
    } else {
      console.log("Services: Clearing bookings due to logout");
      setBookings([]);
    }
  }, [isLoggedIn, user]);

  const handleSelectService = (slug) => {
    setSelectedService(slug);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const renderForm = () => {
    switch (selectedService) {
      case "office-cleaning":
        return <OfficeCleaningForm serviceTitle="Office Cleaning" slug="office-cleaning" />;
      case "kitchen-cleaning":
        return <KitchenCleaningForm serviceTitle="Kitchen Cleaning" slug="kitchen-cleaning" />;
      case "car-washing":
        return <CarWashingForm serviceTitle="Car Washing" slug="car-washing" />;
      case "factory-cleaning":
        return <FactoryCleaningForm serviceTitle="Factory Cleaning" slug="factory-cleaning" />;
      default:
        return null;
    }
  };

  return (
    <div className="services-page">
      {selectedService ? (
        <div className="form-container">
          <button className="back-button" onClick={handleBack}>
            Back to Services
          </button>
          {renderForm()}
        </div>
      ) : (
        <div className="services-container">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              shortInfo={service.shortInfo}
              slug={service.slug}
              onSelect={() => handleSelectService(service.slug)}
            />
          ))}
        </div>
      )}
      {isLoggedIn && (
        <div className="progress-container">
          <h3 className="progress-title">Booking Progress</h3>
          {bookings.length === 0 ? (
            <p className="progress-empty">No bookings yet.</p>
          ) : (
            <ul className="progress-list">
              {bookings.map((booking, index) => (
                <li key={index} className="progress-item">
                  <p><strong>Name:</strong> {booking.name}</p>
                  <p><strong>Service:</strong> {booking.service}</p>
                  <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                  <p><strong>Total Cost:</strong> ${booking.totalCost}</p>
                  <p className="progress-item-date"><strong>Date:</strong> {booking.date || "N/A"}</p>
                  <p className="progress-item-time"><strong>Time:</strong> {booking.time || "N/A"}</p>
                  <p><strong>Agent Name:</strong> {booking.agent?.name || "N/A"}</p>
                  <p><strong>Agent Phone:</strong> {booking.agent?.phone || "N/A"}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Services;