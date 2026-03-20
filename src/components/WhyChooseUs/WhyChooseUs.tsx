import React from 'react';
import { Icon } from '@iconify/react';
import './WhyChooseUs.css';

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            icon: "solar:medal-star-linear",
            title: "Experienced Doctors",
            desc: "Highly trained medical professionals with specialized expertise."
        },
        {
            icon: "solar:users-group-two-rounded-linear",
            title: "Patient-Centered",
            desc: "We focus on your needs, ensuring a comfortable and supportive environment."
        },
        {
            icon: "solar:scanner-linear",
            title: "Modern Equipment",
            desc: "Utilizing the latest healthcare technologies for better diagnosis."
        },
        {
            icon: "solar:calendar-date-linear",
            title: "Easy Booking",
            desc: "Seamlessly book appointments online or via our direct hotline."
        },
        {
            icon: "solar:shield-up-linear",
            title: "Clean & Safe",
            desc: "Rigorous sterilization protocols to ensure your safety and hygiene."
        },
        {
            icon: "solar:chat-round-check-linear",
            title: "Quick Consultation",
            desc: "Minimal waiting times and efficient medical services."
        }
    ];

    return (
        <section className="why-choose-us bg-red-600 section-padding">
            <div className="container text-white">
                <div className="wcu-header">
                    <div className="wcu-title-wrapper space-y-4">
                        <h2 className="section-subtitle subtitle-light">Why Choose Us</h2>
                        <h3 className="section-title title-light">Setting the Standard in Personalized Medical Care</h3>
                    </div>
                    <div className="wcu-divider">
                        <div className="divider-bg">
                            <div className="divider-fill"></div>
                        </div>
                    </div>
                </div>

                <div className="wcu-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="wcu-feature space-y-4">
                            <div className="wcu-icon">
                                <Icon icon={feature.icon} width="32" strokeWidth="1.5" />
                            </div>
                            <h4 className="wcu-feature-title">{feature.title}</h4>
                            <p className="wcu-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
