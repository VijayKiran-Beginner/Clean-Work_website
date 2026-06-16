import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "../css/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleGetStarted = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate('/getstarted');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>

                <NavLink
                    to="/home"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                >
                    About
                </NavLink>

                <NavLink
                    to="/services"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                >
                    Services
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </NavLink>

                {isLoggedIn ? (
                    <span className="cta-button">{user?.name || 'User'}</span>
                ) : (
                    <NavLink
                        to="/getstarted"
                        className="cta-button"
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </NavLink>
                )}

                {isLoggedIn && (
                    <div className="navbar-logout">
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;