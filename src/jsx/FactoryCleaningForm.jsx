import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "../css/Booking.css";

function FactoryCleaningForm({ serviceTitle, slug }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    time: "",
    notes: "",
    factoryArea: "",
    machineryTypes: "",
    safetyReqs: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const agents = [
    { name: "Alice Johnson", phone: "555-1234" },
    { name: "Bob Smith", phone: "555-5678" },
    { name: "Charlie Brown", phone: "555-9012" },
    { name: "Diana Prince", phone: "555-3456" },
  ];

  useEffect(() => {
    if (user?.email) {
      const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const userBookings = storedBookings
        .filter((booking) => booking.email === user.email)
        .sort((a, b) => b.bookingId.localeCompare(a.bookingId));
      if (userBookings.length > 0) {
        const latestBooking = userBookings[0];
        const today = new Date().toISOString().split("T")[0];
        const currentTime = new Date().toTimeString().slice(0, 5);
        const selectedDate = latestBooking.date || today;
        const selectedTime = latestBooking.time || currentTime;
        setFormData((prev) => ({
          ...prev,
          date: selectedDate >= today ? selectedDate : today,
          time: selectedDate > today ? selectedTime : selectedDate === today && selectedTime >= currentTime ? selectedTime : currentTime,
        }));
        console.log("FactoryCleaningForm: Pre-filled date/time from latest booking:", {
          date: selectedDate,
          time: selectedTime,
        });
      }
    }
  }, [user]);

  const calculateTotalCost = () => {
    const baseCost = 200;
    const areaCost = parseInt(formData.factoryArea) || 0 * 0.1;
    return (baseCost + areaCost).toFixed(2);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.street.trim()) newErrors.street = "Street is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!/^\d{6}$/.test(formData.zip)) newErrors.zip = "Zip must be 6 digits";
    if (!formData.date) newErrors.date = "Date is required";
    else {
      const today = new Date().toISOString().split("T")[0];
      if (formData.date < today) newErrors.date = "Date cannot be in the past";
    }
    if (!formData.time) newErrors.time = "Time is required";
    else if (formData.date) {
      const today = new Date().toISOString().split("T")[0];
      const currentTime = new Date().toTimeString().slice(0, 5);
      if (formData.date === today && formData.time < currentTime)
        newErrors.time = "Time cannot be in the past for today's date";
    }
    if (!/^\d+$/.test(formData.factoryArea) || formData.factoryArea <= 0)
      newErrors.factoryArea = "Factory area must be a positive number";
    if (!formData.machineryTypes.trim()) newErrors.machineryTypes = "Machinery types are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = "Card number must be 16 digits";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiration))
      newErrors.expiration = "Expiration must be MM/YY";
    if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (validateStep2()) {
      setIsSubmitting(true);
      try {
        const agent = agents[Math.floor(Math.random() * agents.length)];
        const bookingData = {
          service: serviceTitle,
          ...formData,
          agent,
          bookingId: Math.random().toString(36).substr(2, 9),
          totalCost: calculateTotalCost(),
          email: user?.email || formData.email,
        };
        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
        bookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        console.log("FactoryCleaningForm: Saving to localStorage:", bookingData);
        navigate("/booking-details", { state: { bookingData } });
      } catch (error) {
        console.error("Submission error:", error);
        setErrors({ submit: "Failed to process booking. Please try again." });
        setIsSubmitting(false);
      }
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <div className="booking-container">
      <h2 className="booking-title">{serviceTitle}</h2>
      <div className="step-indicator">
        <span className={step === 1 ? "step active" : "step"}>1. Details</span>
        <span className={step === 2 ? "step active" : "step"}>2. Payment</span>
      </div>
      {errors.submit && <p className="error-message">{errors.submit}</p>}
      {step === 1 && (
        <div className="form-section">
          <h3 className="form-heading">Your Details</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              placeholder="1234567890"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <h3 className="form-heading">Address</h3>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              id="street"
              name="street"
              placeholder="123 Main St"
              value={formData.street}
              onChange={handleChange}
            />
            {errors.street && <p className="error-message">{errors.street}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              placeholder="Springfield"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              placeholder="IL"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <p className="error-message">{errors.state}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              id="zip"
              name="zip"
              placeholder="62701"
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && <p className="error-message">{errors.zip}</p>}
          </div>
          <h3 className="form-heading">Factory Details</h3>
          <div className="form-group">
            <label htmlFor="factoryArea">Factory Area (sq ft)</label>
            <input
              id="factoryArea"
              name="factoryArea"
              placeholder="5000"
              value={formData.factoryArea}
              onChange={handleChange}
            />
            {errors.factoryArea && <p className="error-message">{errors.factoryArea}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="machineryTypes">Machinery Types</label>
            <input
              id="machineryTypes"
              name="machineryTypes"
              placeholder="CNC, Conveyors"
              value={formData.machineryTypes}
              onChange={handleChange}
            />
            {errors.machineryTypes && <p className="error-message">{errors.machineryTypes}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="safetyReqs">Safety Requirements</label>
            <textarea
              id="safetyReqs"
              name="safetyReqs"
              placeholder="E.g., Hazmat protocols"
              value={formData.safetyReqs}
              onChange={handleChange}
            ></textarea>
          </div>
          <h3 className="form-heading">Schedule</h3>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              placeholder="2025-05-20"
              value={formData.date}
              onChange={handleChange}
              min={today}
            />
            {errors.date && <p className="error-message">{errors.date}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              placeholder="11:00"
              value={formData.time}
              onChange={handleChange}
              min={formData.date === today ? currentTime : undefined}
            />
            {errors.time && <p className="error-message">{errors.time}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="notes">Special Instructions</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="E.g., Avoid production lines"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-group">
            <button className="next-button" onClick={handleNext} disabled={isSubmitting}>
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="form-section">
          <h3 className="form-heading">Payment Information</h3>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              placeholder="1234567890123456"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="expiration">Expiration (MM/YY)</label>
            <input
              id="expiration"
              name="expiration"
              placeholder="MM/YY"
              value={formData.expiration}
              onChange={handleChange}
            />
            {errors.expiration && <p className="error-message">{errors.expiration}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <p className="error-message">{errors.cvv}</p>}
          </div>
          <p className="total-cost animate-slide-in">Total Cost: ${calculateTotalCost()}</p>
          <div className="button-group">
            <button className="back-button" onClick={handleBack} disabled={isSubmitting}>
              Back
            </button>
            <button
              className="submit-button animate-slide-in"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Book Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FactoryCleaningForm;