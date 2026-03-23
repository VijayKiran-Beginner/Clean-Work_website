import React from "react";
import { Link } from "react-router-dom";
import bubble from '../images/bubble.png';

const Footer = () => {
  return (
    <footer className="foot">
      <div className="lcontent">
        <div className="icon">
          <img src={bubble} alt="bubble" height={"80px"} />
        </div>
        <br />
        <div className="options">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <a href="/reviews">Reviews</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="services">
        <div className="ourservices">
          <h1>Our Services</h1>
          <div className="left">
            <Link to="/services">&gt;&gt; Office Cleaning</Link>
            <Link to="/services">&gt;&gt; Kitchen Washing</Link>
          </div>
          <div className="right">
            <Link to="/services">&gt;&gt; Car Cleaning</Link>
            <Link to="/services">&gt;&gt; Factory Cleaning</Link>
          </div>
        </div>
        <div className="officehours">
          <h1>Office</h1>
          <a
            href="https://www.google.com/maps/place/Akershusstranda+20,+0150+Oslo,+Norway"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-location-dot"></i> Akershusstranda 20, 0150 Oslo, Norway
          </a>
          <a href="tel:1102209800">
            <i className="fa-solid fa-phone"></i> 110-220-9800
          </a>
          <a href="mailto:info@company.com">
            <i className="fa-solid fa-envelope"></i> info@company.com
          </a>
          <div className="social">
            <a href="https://twitter.com/company" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://facebook.com/company" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/company" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="servicehours">
          <h1>Service Hours</h1>
          <p>Mon-Fri: 8:00 AM - 5:30 PM</p>
          <p>Sat: 6:00 AM - 2:30 PM</p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2036 Clean Work Co, Ltd.</p>
        <p>// Designed by Vijay //</p>
      </div>
    </footer>
  );
};

export default Footer;