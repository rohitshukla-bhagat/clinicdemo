import React from 'react';
import { Icon } from '@iconify/react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section relative">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <Icon icon="solar:shield-check-linear" strokeWidth="1.5" />
                        Trusted by over 5,000+ local patients
                    </div>
                    <h1 className="hero-title">
                        Quality Healthcare <br /><span className="text-red-primary">You Can Trust</span>
                    </h1>
                    <p className="hero-description">
                        At CarePlus Medical Clinic, we combine expert medical care with a patient-first approach to ensure you and your family live healthier lives.
                    </p>
                    <div className="hero-actions">
                        <a href="#booking" className="btn-primary hero-btn flex-center">
                            Book Appointment
                            <Icon icon="solar:calendar-add-linear" strokeWidth="1.5" />
                        </a>
                        <a href="tel:+123456789" className="btn-outline hero-btn flex-center">
                            Call Now
                            <Icon icon="solar:phone-calling-linear" strokeWidth="1.5" />
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1629909606655-324f01811eaf?auto=format&fit=crop&q=80&w=1000"
                            alt="Clinic Interior"
                            className="hero-image"
                        />
                        <div className="hero-floating-card">
                            <div className="floating-card-icon">
                                <Icon icon="solar:verified-check-linear" width="24" strokeWidth="1.5" />
                            </div>
                            <div className="floating-card-text">
                                <div className="floating-card-title">Certified Excellence</div>
                                <div className="floating-card-subtitle">Board certified medical practitioners</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-glow"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
