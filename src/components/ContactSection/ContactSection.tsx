import React from 'react';
import { Icon } from '@iconify/react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container md-container">
                <div className="contact-grid">
                    <div className="contact-info space-y-12">
                        <div className="contact-header space-y-4">
                            <h2 className="section-subtitle">Get In Touch</h2>
                            <h3 className="section-title text-slate-900">Visit Our Facility</h3>
                            <p className="contact-desc">We are located in the heart of the city, easily accessible by public transport.</p>
                        </div>

                        <div className="contact-details space-y-8">
                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <Icon icon="solar:map-point-linear" width="24" strokeWidth="1.5" />
                                </div>
                                <div>
                                    <h4 className="contact-item-title">Our Address</h4>
                                    <p className="contact-item-desc">123 Medical Avenue, Healthcare District, Cityville, NY 10001</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <Icon icon="solar:letter-linear" width="24" strokeWidth="1.5" />
                                </div>
                                <div>
                                    <h4 className="contact-item-title">Email Us</h4>
                                    <p className="contact-item-desc">hello@careplusclinic.com</p>
                                </div>
                            </div>

                            <div className="contact-action">
                                <a href="https://wa.me/123456789" className="btn-whatsapp">
                                    <Icon icon="solar:whatsapp-linear" width="20" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
                        <div className="map-placeholder">
                            <Icon icon="solar:map-linear" width="48" />
                            <span className="map-loading-text">Interactive Map Loading...</span>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4282201990626!2d-73.9850125!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            className="map-iframe"
                            allowFullScreen
                            loading="lazy"
                            title="Clinic Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
