import React from 'react';
import { Icon } from '@iconify/react';
import './BookingSection.css';

const BookingSection: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section id="booking" className="booking-section section-padding">
            <div className="container">
                <div className="booking-card">
                    <div className="booking-form-area">
                        <div className="booking-header">
                            <h3 className="booking-title">Book Your Appointment</h3>
                            <p className="booking-desc">Fill out the form and we'll confirm your visit via SMS.</p>
                        </div>

                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" placeholder="John Doe" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="form-input" required />
                            </div>
                            <div className="form-group full-width">
                                <label className="form-label">Preferred Date</label>
                                <input type="date" className="form-input input-date" required />
                            </div>
                            <div className="form-group full-width">
                                <label className="form-label">Message / Symptoms</label>
                                <textarea rows={4} placeholder="Briefly describe your concern..." className="form-input form-textarea"></textarea>
                            </div>
                            <button type="submit" className="submit-btn full-width">
                                Confirm Appointment Request
                            </button>
                        </form>
                    </div>

                    <div className="booking-info-area">
                        <div className="info-block">
                            <div className="info-header">
                                <Icon icon="solar:clock-circle-linear" className="info-icon" width="24" />
                                <h4 className="info-title">Clinic Timings</h4>
                            </div>
                            <div className="timing-list">
                                <div className="timing-item">
                                    <span className="timing-day">Monday - Friday</span>
                                    <span className="timing-time">08:00 AM - 08:00 PM</span>
                                </div>
                                <div className="timing-item">
                                    <span className="timing-day">Saturday</span>
                                    <span className="timing-time">09:00 AM - 05:00 PM</span>
                                </div>
                                <div className="timing-item">
                                    <span className="timing-day">Sunday</span>
                                    <span className="timing-time timing-closed">Closed / Emergencies</span>
                                </div>
                            </div>
                        </div>

                        <div className="emergency-card">
                            <h5 className="emergency-title">Emergency Call</h5>
                            <div className="emergency-number">+1 (800) 999 123</div>
                            <p className="emergency-desc">Available 24/7 for urgent medical needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
