import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'danielkojoforson27@gmail.com',
            href: 'mailto:danielkojoforson27@gmail.com'
        },
        {
            icon: <Phone size={20} />,
            label: 'Phone',
            value: '+233 (54) 311-6973',
            href: 'tel:0543116973'
        },
        {
            icon: <MapPin size={20} />,
            label: 'Location',
            value: 'Takoradi, Ghana',
            href: null
        }
    ];

    const socialLinks = [
        {
            icon: <Github size={20} />,
            label: 'GitHub',
            href: 'https://github.com/Eng-DannyKay'
        },
        {
            icon: <Linkedin size={20} />,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/daniel-forson-394b04223/'
        },
        {
            icon: <Twitter size={20} />,
            label: 'Twitter',
            href: 'https://x.com/DanielF12668364'
        }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact__header">
                    <h2 className="contact__title animate-fade-in-up">Get In Touch</h2>
                    <p className="contact__description animate-fade-in-up animation-delay-200">
                        Let's discuss your next project or just say hello
                    </p>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__info-card animate-slide-in-left animation-delay-400">
                            <h3 className="contact__info-title">Contact Information</h3>
                            <p className="contact__info-description">
                                Feel free to reach out through any of these channels. I'm always
                                open to discussing new opportunities and interesting projects.
                            </p>

                            <div className="contact__info-list">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="contact__info-item">
                                        <div className="contact__info-icon">{info.icon}</div>
                                        <div className="contact__info-details">
                                            <span className="contact__info-label">{info.label}</span>
                                            {info.href ? (
                                                <a href={info.href} className="contact__info-value">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <span className="contact__info-value">{info.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="contact__social">
                                <h4>Follow Me</h4>
                                <div className="contact__social-links">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact__social-link"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-container">
                        <form onSubmit={handleSubmit} className="contact__form animate-slide-in-right animation-delay-600">
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form__input"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="email" className="form__label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form__input"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="subject" className="form__label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form__input"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="message" className="form__label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="form__textarea"
                                    placeholder="Tell me about your project or just say hello..."
                                ></textarea>
                            </div>

                            <div className="form__actions">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn btn--primary ${isSubmitting ? 'btn--loading' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="btn__spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form__message form__message--success">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form__message form__message--error">
                                    Sorry, there was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;