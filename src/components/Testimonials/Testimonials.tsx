import React from 'react';
import { Icon } from '@iconify/react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    const reviews = [
        {
            text: "The care I received at CarePlus was exceptional. The staff was attentive and Dr. Sarah really took the time to explain everything clearly.",
            initials: "JM",
            name: "James Miller"
        },
        {
            text: "A modern clinic with a heart. My kids actually enjoy going there! The pediatric team is simply the best in town.",
            initials: "ER",
            name: "Elena Rodriguez"
        },
        {
            text: "Easy booking and zero wait time. I came in for a regular health screening and was out within 45 minutes. Highly efficient.",
            initials: "SW",
            name: "Samuel Wright"
        }
    ];

    return (
        <section className="testimonials-section bg-slate-50 section-padding overflow-hidden">
            <div className="container">
                <div className="testimonials-header text-center mb-16">
                    <h2 className="section-subtitle mb-4">Patient Stories</h2>
                    <h3 className="section-title">What Our Patients Say</h3>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card flex-col-between bg-white">
                            <div>
                                <div className="star-rating mb-6">
                                    <Icon icon="solar:star-bold" width="16" />
                                    <Icon icon="solar:star-bold" width="16" />
                                    <Icon icon="solar:star-bold" width="16" />
                                    <Icon icon="solar:star-bold" width="16" />
                                    <Icon icon="solar:star-bold" width="16" />
                                </div>
                                <p className="testimonial-text">"{review.text}"</p>
                            </div>
                            <div className="testimonial-author mt-8">
                                <div className="author-avatar">{review.initials}</div>
                                <div className="author-name">{review.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
