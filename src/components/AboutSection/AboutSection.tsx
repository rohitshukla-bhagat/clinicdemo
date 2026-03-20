import React from 'react';
import { Icon } from '@iconify/react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section bg-slate-50 section-padding">
            <div className="container">
                <div className="about-grid">

                    <div className="about-images">
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                                alt="Doctor"
                                className="about-image"
                            />
                        </div>
                        <div className="about-stats-container">
                            <div className="stat-card stat-light">
                                <div className="stat-number stat-red">15+</div>
                                <div className="stat-label">Years Exp</div>
                            </div>
                            <div className="stat-card stat-brand">
                                <div className="stat-number">10k+</div>
                                <div className="stat-label stat-label-light">Patients</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-content space-y-6">
                        <h2 className="section-subtitle">About Our Clinic</h2>
                        <h3 className="section-title">Your Health is Our Highest Priority</h3>
                        <p className="section-description">
                            Founded by Dr. Sarah Mitchell, CarePlus Medical Clinic has been a beacon of healthcare excellence for over a decade. We believe in treating patients, not just symptoms. Our holistic approach ensures that you receive personalized care tailored to your unique lifestyle and needs.
                        </p>
                        <ul className="about-features">
                            <li className="feature-item">
                                <Icon icon="solar:check-circle-linear" className="feature-icon" width="20" />
                                Board Certified Physicians
                            </li>
                            <li className="feature-item">
                                <Icon icon="solar:check-circle-linear" className="feature-icon" width="20" />
                                State-of-the-Art Medical Facilities
                            </li>
                            <li className="feature-item">
                                <Icon icon="solar:check-circle-linear" className="feature-icon" width="20" />
                                Compassionate Patient Care
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
