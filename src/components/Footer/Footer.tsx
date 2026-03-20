import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-slate-50">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand space-y-6">
                        <div className="footer-logo">
                            CP<span className="logo-dark">CARE.</span>
                        </div>
                        <p className="footer-desc">
                            Dedicated to providing premium healthcare services with a focus on empathy, innovation, and trust.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">
                                <Icon icon="solar:camera-linear" width="18" />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Icon icon="solar:link-round-linear" width="18" />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Icon icon="solar:mention-circle-linear" width="18" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-list space-y-4">
                            <li><a href="#about" className="footer-link">About Us</a></li>
                            <li><a href="#services" className="footer-link">Our Services</a></li>
                            <li><a href="#booking" className="footer-link">Book Appointment</a></li>
                            <li><a href="#" className="footer-link">Medical Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Patient Resources</h4>
                        <ul className="footer-list space-y-4">
                            <li><a href="#" className="footer-link">Health Insurance</a></li>
                            <li><a href="#" className="footer-link">Patient Portal</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4 className="footer-title">Newsletter</h4>
                        <p className="footer-newsletter-desc mb-4">Stay updated with our latest health tips.</p>
                        <div className="newsletter-form flex-gap-2">
                            <input type="email" placeholder="Email" className="newsletter-input" />
                            <button className="newsletter-btn" aria-label="Subscribe">
                                <Icon icon="solar:arrow-right-linear" width="18" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2024 CarePlus Medical Clinic. All rights reserved.</p>
                    <div className="footer-legal flex-gap-6">
                        <a href="#" className="legal-link">Terms of Service</a>
                        <a href="#" className="legal-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
