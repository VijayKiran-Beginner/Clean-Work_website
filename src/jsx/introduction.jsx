import React from 'react';
import { Link } from 'react-router-dom';
import bubble from '../images/bubble.png';
import '../css/Introduction.css';

function Introduction() {
  return (
    <div className="introduction-container">
    
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="form-heading">Welcome to Clean Work</h1>
        <p className="hero-text">
          At Clean Work, we transform spaces with professional cleaning services tailored to your needs. 
          From sparkling kitchens to pristine offices, our dedicated team ensures every corner shines. 
          Discover why thousands trust us for reliable, high-quality cleaning.
        </p>
        <Link to="/services" className="next-button">Book Your Service Now</Link>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="form-heading">Our Cleaning Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fa-solid fa-building service-icon"></i>
            <h3>Office Cleaning</h3>
            <p>Keep your workplace spotless with our thorough office cleaning, customized for any office size.</p>
            <Link to="/services" className="service-link">Visit Service</Link>
          </div>
          <div className="service-card">
            <i className="fa-solid fa-kitchen-set service-icon"></i>
            <h3>Kitchen Cleaning</h3>
            <p>Deep-clean your residential or commercial kitchen, including appliances, for a hygienic environment.</p>
            <Link to="/services" className="service-link">Visit Service</Link>
          </div>
          <div className="service-card">
            <i className="fa-solid fa-industry service-icon"></i>
            <h3>Factory Cleaning</h3>
            <p>Safe and efficient cleaning for factories, adhering to strict safety and machinery requirements.</p>
            <Link to="/services" className="service-link">Visit Service</Link>
          </div>
          <div className="service-card">
            <i className="fa-solid fa-car service-icon"></i>
            <h3>Car Washing</h3>
            <p>Exterior, interior, or full car cleaning to make your vehicle shine like new.</p>
            <Link to="/services" className="service-link">Visit Service</Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="form-heading">Our Mission</h2>
        <p className="mission-text">
          At Clean Work, our mission is to deliver exceptional cleaning services that enhance the cleanliness and 
          comfort of your spaces. We combine skilled professionals, eco-friendly products, and a commitment to 
          customer satisfaction to make every job a success. Whether it's a one-time deep clean or regular maintenance, 
          we take pride in making your world cleaner, one space at a time.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="form-heading">Ready to Experience Clean Work?</h2>
        <p>Book your cleaning service today and let us handle the rest.</p>
        <Link to="/getstarted" className="submit-button">Get Started</Link>
      </section>
    </div>
  );
}

export default Introduction;