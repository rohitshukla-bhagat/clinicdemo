import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="glass-nav fixed-nav">
            <div className="nav-container max-w-screen-xl">
                <div className="nav-logo">
                    CP<span className="logo-dark">CARE.</span>
                </div>

                {/* Desktop Menu */}
                <div className="nav-links-desktop">
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
                    <a href="#booking" className="nav-link" onClick={closeMenu}>Appointments</a>
                    <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
                </div>

                <div className="nav-actions">
                    <a href="#booking" className="btn-primary" onClick={closeMenu}>
                        Book Now
                    </a>

                    {/* Hamburger Icon */}
                    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Navigation">
                        <span className={`hamburger-line ${isOpen ? 'line-1-open' : ''}`}></span>
                        <span className={`hamburger-line ${isOpen ? 'line-2-open' : ''}`}></span>
                        <span className={`hamburger-line ${isOpen ? 'line-3-open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
                <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
                <a href="#services" className="mobile-link" onClick={closeMenu}>Services</a>
                <a href="#booking" className="mobile-link" onClick={closeMenu}>Appointments</a>
                <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
