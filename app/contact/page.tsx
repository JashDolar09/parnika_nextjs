import Script from 'next/script';
import type { Metadata } from 'next';
import '../styles/contact.css';
import { ContactFormLogic } from '@/components/ClientAnimations';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch | Parnika India',
    description: 'Have questions or interested in our ethnic wear collection? Contact Parnika India for retail, wholesale, or franchise inquiries. Reach us via phone, email, or WhatsApp.',
    openGraph: {
        title: "Contact Parnika India - Premium Ethnic Wear",
        description: "Connect with us for all your ethnic wear needs. We're here to help.",
        url: "https://parnikaindia.com/contact",
    },
};

export default function Contact() {
    return (
        <>
            <ContactFormLogic />

            {/* Contact Hero */}
            <section className="contact-hero" id="contactHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up">Get in Touch</h1>
                    <p className="hero-subtitle fade-in-up">We&apos;d love to hear from you. Reach out to us for inquiries, orders, or
                        partnership opportunities.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contactSection">
                <div className="container">
                    <div className="contact-wrapper">
                        {/* Contact Information */}
                        <div className="contact-info fade-in-left">
                            <h2 className="info-title">Contact Information</h2>
                            <p className="info-description">Feel free to reach out to us through any of these channels. We&apos;re here
                                to help!</p>

                            <div className="contact-items">
                                <div className="contact-item pop-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h3>Phone</h3>
                                        <p><a href="tel:+917430022000">+91 74300 22000</a></p>
                                        <p><a href="tel:+919265282488">+91 92652 82488</a></p>
                                    </div>
                                </div>

                                <div className="contact-item pop-up">
                                    <div className="contact-icon">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h3>WhatsApp</h3>
                                        <p><a href="https://wa.me/917590048900" target="_blank" rel="noreferrer">+91 75900 48900</a></p>
                                        <p className="whatsapp-note">Quick response guaranteed</p>
                                    </div>
                                </div>

                                <div className="contact-item pop-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h3>Email</h3>
                                        <p><a href="mailto:parnikaindia@gmail.com">parnikaindia@gmail.com</a></p>
                                        <p><a href="mailto:contact@parnikaindia.com">contact@parnikaindia.com</a></p>
                                    </div>
                                </div>

                                <div className="contact-item pop-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h3>Address</h3>
                                        <p>Delhi Gate, PARVATI FABRIC LIMITED - PARNIKA INDIA<br />F-Tower, Shree Kuberji Textile Market<br />B/h Belgium Tower, Surat, Gujarat 395001</p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="business-hours fade-in-left">
                                <h3 className="hours-title">
                                    <i className="fas fa-clock"></i> Business Hours
                                </h3>
                                <div className="hours-list">
                                    <div className="hours-item">
                                        <span className="day">Monday - Saturday</span>
                                        <span className="time">10:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span className="day">Sunday</span>
                                        <span className="time">Closed / By Appointment</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="social-section fade-in-left">
                                <h3 className="social-title">Follow Us</h3>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/parnikaindia" className="social-icon" aria-label="Facebook" target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/parnikaindia/" className="social-icon" aria-label="Instagram" target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://wa.me/917590048900" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noreferrer">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper fade-in-right">
                            <h2 className="form-title">Send Us a Message</h2>
                            <form className="contact-form" id="contactForm">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="fas fa-user"></i> Full Name
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="fas fa-envelope"></i> Email / Phone
                                    </label>
                                    <input type="text" id="email" name="email" placeholder="Enter your email or phone number"
                                        required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="interest">
                                        <i className="fas fa-hand-pointer"></i> Interest
                                    </label>
                                    <select id="interest" name="interest" required>
                                        <option value="">Select your interest</option>
                                        <option value="retail">Retail Purchase</option>
                                        <option value="wholesale">Wholesale/Bulk Order</option>
                                        <option value="franchise">Franchise Opportunity</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        <i className="fas fa-comment-alt"></i> Message
                                    </label>
                                    <textarea id="message" name="message" rows={5} placeholder="Tell us how we can help you..."
                                        required></textarea>
                                </div>

                                <button type="submit" className="btn btn-submit micro-bounce">
                                    <i className="fas fa-paper-plane"></i> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" id="mapSection">
                <div className="container">
                    <h2 className="section-title fade-in-up">Find Us</h2>
                    <div className="map-wrapper fade-in-up">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7760633903627!2d72.83729527503637!3d21.201053080491793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f489cc630e9%3A0xc3a0c83ed0cd8cc3!2sParnika%20India%20-%20Best%20Designer%20Sarees%2C%20Wedding%20Lehenga%2C%20Kurti%20%26%20Fabrics%20Manufacturer%20in%20Surat!5e0!3m2!1sen!2sin!4v1764586698003!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="map-iframe">
                            </iframe>
                            <div className="map-pin">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page-specific JavaScript */}
            <Script src="/js/contact.js" strategy="lazyOnload" />
        </>
    );
}
