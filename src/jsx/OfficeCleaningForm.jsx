import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "../css/Booking.css";

function OfficeCleaningForm({ serviceTitle, slug }) {
  const { user } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    officeSize: "",
    numRooms: "",
    frequency: "One-time",
    date: "",
    time: "",
    notes: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
        // Use booking date/time only if not in the past
        setFormData((prev) => ({
          ...prev,
          date: selectedDate >= today ? selectedDate : today,
          time: selectedDate > today ? selectedTime : selectedDate === today && selectedTime >= currentTime ? selectedTime : currentTime,
        }));
        console.log("OfficeCleaningForm: Pre-filled date/time from latest booking:", {
          date: selectedDate,
          time: selectedTime,
        });
      }
    }
  }, [user]);

  const calculateCost = () => {
    const baseCost = 100;
    const sizeCost = formData.officeSize ? parseInt(formData.officeSize) * 0.05 : 0;
    const roomCost = formData.numRooms ? parseInt(formData.numRooms) * 10 : 0;
    const frequencyMultiplier =
      formData.frequency === "Weekly" ? 0.9 : formData.frequency === "Monthly" ? 0.8 : 1;
    return (baseCost + sizeCost + roomCost) * frequencyMultiplier;
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
    if (!/^\d+$/.test(formData.officeSize) || formData.officeSize <= 0)
      newErrors.officeSize = "Office size must be a positive number";
    if (!/^\d+$/.test(formData.numRooms) || formData.numRooms <= 0)
      newErrors.numRooms = "Number of rooms must be a positive number";
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
    if (!formData.frequency) newErrors.frequency = "Frequency is required";
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
        const totalCost = calculateCost().toFixed(2);
        const agent = agents[Math.floor(Math.random() * agents.length)];
        const bookingData = {
          service: serviceTitle,
          ...formData,
          bookingId: Math.random().toString(36).substr(2, 9),
          totalCost,
          email: user?.email || formData.email,
          agent,
        };
        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
        bookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        console.log("OfficeCleaningForm: Saving to localStorage:", bookingData);
        navigate("/booking-details", { state: { bookingData } });
      } catch (error) {
        console.error("Submission error:", error);
        setErrors({ submit: "Failed to process booking. Please try again." });
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <div className="booking-container">
      <h2 className="booking-title">{serviceTitle} Booking</h2>
      <div className="step-indicator">
        <span className={step === 1 ? "step active" : "step"}>1. Details</span>
        <span className={step === 2 ? "step active" : "step"}>2. Payment</span>
      </div>
      {errors.submit && <p className="error-message">{errors.submit}</p>}
      {step === 1 ? (
        <div className="form-section">
          <h3 className="form-heading">Customer Information</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="1234567890"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          <h3 className="form-heading">Address</h3>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="123 Main St"
              value={formData.street}
              onChange={handleChange}
            />
            {errors.street && <span className="error-message">{errors.street}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Springfield"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="IL"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="62701"
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && <span className="error-message">{errors.zip}</span>}
          </div>
          <h3 className="form-heading">Service Details</h3>
          <div className="form-group">
            <label htmlFor="officeSize">Office Size (sq ft)</label>
            <input
              type="number"
              id="officeSize"
              name="officeSize"
              placeholder="1000"
              value={formData.officeSize}
              onChange={handleChange}
            />
            {errors.officeSize && <span className="error-message">{errors.officeSize}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="numRooms">Number of Rooms</label>
            <input
              type="number"
              id="numRooms"
              name="numRooms"
              placeholder="5"
              value={formData.numRooms}
              onChange={handleChange}
            />
            {errors.numRooms && <span className="error-message">{errors.numRooms}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select id="frequency" name="frequency" value={formData.frequency} onChange={handleChange}>
              <option value="">Select frequency</option>
              <option value="One-time">One-time</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            {errors.frequency && <span className="error-message">{errors.frequency}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="2025-05-20"
              value={formData.date}
              onChange={handleChange}
              min={today}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder="11:00"
              value={formData.time}
              onChange={handleChange}
              min={formData.date === today ? currentTime : undefined}
            />
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="E.g., Focus on conference rooms"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-group">
            <button type="button" className="next-button" onClick={handleNext} disabled={isSubmitting}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="form-section">
          <h3 className="form-heading">Payment Information</h3>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234567890123456"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="expiration">Expiration Date</label>
            <input
              type="text"
              id="expiration"
              name="expiration"
              placeholder="MM/YY"
              value={formData.expiration}
              onChange={handleChange}
            />
            {errors.expiration && <span className="error-message">{errors.expiration}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <span className="error-message">{errors.cvv}</span>}
          </div>
          <p className="total-cost">Total Cost: ${calculateCost().toFixed(2)}</p>
          <div className="button-group">
            <button type="button" className="back-button" onClick={handleBack} disabled={isSubmitting}>
              Back
            </button>
            <button
              type="button"
              className="submit-button"
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

export default OfficeCleaningForm;