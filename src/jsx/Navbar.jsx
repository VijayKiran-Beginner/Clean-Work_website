import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import "../css/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, user, logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

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
                <Link to="/home" className={isActive("/home")}>Home</Link>
                <Link to="/about" className={isActive("/about")}>About</Link>
                <Link to="/services" className={isActive("/services")}>Services</Link>
                <Link to="/contact" className={isActive("/contact")}>Contact</Link>
                {isLoggedIn ? (
                    <span className="cta-button">{user?.name || 'User'}</span>
                ) : (
                    <Link 
                        to="/getstarted" 
                        className="cta-button"
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </Link>
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