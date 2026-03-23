import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../css/GetStarted.css';

function GetStarted() {
    const [formData, setFormData] = useState({
        name: localStorage.getItem('userName') || '',
        email: '',
        interest: 'general'
    });
    const [isSubmitted, setIsSubmitted] = useState(!!localStorage.getItem('userName'));
    const { isLoggedIn, login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", interest: "general" });
            console.log("GetStarted: Form reset due to logout");
        }
    }, [isLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('GetStarted: Form submitted:', formData);
        const userData = {
            id: `user_${Date.now()}`,
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase()
        };
        localStorage.setItem('userName', formData.name);
        localStorage.setItem('user', JSON.stringify(userData));
        login(userData);
        setIsSubmitted(true);
        navigate('/home');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name' && isSubmitted) return;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="get-started-container">
            <div className="get-started-header">
                <h1>Get Started Today</h1>
                <p>Take the first step towards your goals</p>
            </div>

            <div className="get-started-content">
                <div className="features-section">
                    <h2>Why Choose Us?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Expert Guidance</h3>
                            <p>Get personalized support from our experienced team</p>
                        </div>
                        <div className="feature-card">
                            <h3>Flexible Solutions</h3>
                            <p>Tailored approaches to meet your specific needs</p>
                        </div>
                        <div className="feature-card">
                            <h3>Quick Setup</h3>
                            <p>Start your journey in minutes, not days</p>
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h2>Start Your Journey</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                readOnly={isSubmitted}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="interest">Area of Interest</label>
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="general">General Inquiry</option>
                                <option value="business">Business Solutions</option>
                                <option value="personal">Personal Services</option>
                                <option value="consultation">Consultation</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-button" disabled={isSubmitted}>
                            Get Started Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;