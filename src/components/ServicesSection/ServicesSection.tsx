import React from 'react';
import { Icon } from '@iconify/react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: "solar:stethoscope-linear",
            title: "General Consultation",
            desc: "Personalized primary care visits for routine checkups, illness, and preventative health guidance."
        },
        {
            icon: "solar:case-minimalistic-linear",
            title: "Pediatric Care",
            desc: "Comprehensive healthcare for infants, children, and adolescents in a friendly environment."
        },
        {
            icon: "solar:heart-pulse-linear",
            title: "Health Checkups",
            desc: "Full body screening and diagnostic tests to ensure all vital organs are functioning perfectly."
        },
        {
            icon: "solar:mask-h-linear",
            title: "Skin Treatment",
            desc: "Advanced dermatological care for various skin conditions and aesthetic treatments."
        },
        {
            icon: "solar:test-tube-linear",
            title: "Preventive Care",
            desc: "Immunizations, screenings, and lifestyle counseling to prevent diseases before they start."
        },
        {
            icon: "solar:bacteria-linear",
            title: "Diagnostics",
            desc: "Equipped with modern lab technology for accurate and rapid blood work and analysis."
        }
    ];

    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <div className="services-header text-center">
                    <h2 className="section-subtitle">Our Expertise</h2>
                    <h3 className="section-title">Comprehensive Medical Services</h3>
                    <p className="services-description">We offer a wide range of specialized treatments to keep you and your family healthy.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card group">
                            <div className="service-icon-wrapper">
                                <Icon icon={service.icon} width="28" strokeWidth="1.5" />
                            </div>
                            <h4 className="service-title">{service.title}</h4>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
