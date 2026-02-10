import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <Image
                                src="/images/company_logo.jpg"
                                alt="Parnika India - Premium Indian Ethnic Wear Logo"
                                width={142}
                                height={90}
                                className="logo-img-footer drop-shadow"
                            />
                        </div>
                        <p>42 Years of crafting elegance in Indian ethnic wear. Premium quality, trusted by customers nationwide.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/collection">Collection</Link></li>
                            <li><Link href="/testimonials">Testimonials</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Categories</h3>
                        <ul>
                            <li><Link href="/saree">Sarees</Link></li>
                            <li><Link href="/suits">Suits</Link></li>
                            <li><Link href="/pakistani-suits">Pakistani Suits</Link></li>
                            <li><Link href="/kurtis">Kurtis</Link></li>
                            <li><Link href="/lehenga">Lehenga</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect With Us</h3>
                        <div className="social-links">
                            <a href="https://www.youtube.com/@ParnikaIndia" className="social-icon yt-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/parnikaindia/" className="social-icon ig-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/917590048900" className="social-icon wt-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.facebook.com/parnikaindia" className="social-icon fb-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://in.linkedin.com/company/parnika-india" className="social-icon li-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <p className="footer-info">Delhi Gate, PARVATI FABRIC LIMITED - PARNIKA INDIA F-Tower, Shree Kuberji Textile Market B/h Belgium Tower, Surat, Gujarat 395001</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Parnika. All rights reserved. | 42 Years of Excellence in Ethnic Wear</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
