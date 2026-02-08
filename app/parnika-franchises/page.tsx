import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Parnika Franchises - Building Successful Partnerships | Parnika',
};

export default function ParnikaFranchises() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css" />
            <link rel="stylesheet" href="/css/parnika_franchises.css" />
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            {/* Top Banner */}
            <section className="about-banner" id="aboutBanner">
                <div className="banner-background"></div>
                <div className="banner-content">
                    <h1 className="banner-title fade-in-up">Building Successful Franchise Partnerships with Quality and Dedication</h1>
                    <p className="banner-subtitle fade-in-up">Where detail, design and dependability define a nationwide brand</p>
                </div>
            </section>

            {/* Franchise Intro */}
            <section className="franchise-intro">
                <div className="container">
                    <div className="intro-content">
                        <h2 className="section-title"><span className="Momo-Signature-word">Our</span> Franchise</h2>
                        <div className="intro-text">
                            <p>Parnika India, Surat’s leading textile brand with 42+ years of trust and excellence, brings you a
                                rewarding franchise opportunity in the booming ethnic wear and textile industry. With a strong
                                presence across 68+ countries, serving over 1,50,000+ customers, and delivering to 10,000+ pin
                                codes, we are one of the most trusted names in quality fabrics at competitive prices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="container">
                    <h2 className="section-title">Why <span className="Momo-Signature-word">Choose</span> Parnika India Franchise?</h2>
                    <div className="why-grid">
                        {/* Bullet Points */}
                        <ul className="why-list">
                            <li><i className="fas fa-check-circle"></i> Established & trusted brand name</li>
                            <li><i className="fas fa-check-circle"></i> Wide range of trendy ethnic wear</li>
                            <li><i className="fas fa-check-circle"></i> High demand & strong profit margins</li>
                            <li><i className="fas fa-check-circle"></i> Centralized marketing & promotions</li>
                            <li><i className="fas fa-check-circle"></i> Advanced billing & inventory software</li>
                            <li><i className="fas fa-check-circle"></i> Easy store setup & training support</li>
                            <li><i className="fas fa-check-circle"></i> Reliable pan-India supply chain</li>
                        </ul>
                        {/* Image */}
                        <div className="why-img-box">
                            <img
                                src="/images/frenchises_image.png"
                                alt="Parnika Store Front"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Franchise Presence (Gallery) */}
            <section className="franchise-presence">
                <div className="container">
                    <h2 className="section-title">Inside <span className="Momo-Signature-word">Our</span> Franchise Layout</h2>
                    <div className="presence-grid">
                        <div className="presence-item">
                            <img
                                src="/images/product/frenchise/frenchise_layout_1.png"
                                alt="Showroom Interior"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className="presence-item">
                            <img
                                src="/images/product/frenchise/frenchise_layout_2.png"
                                alt="Product Display"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className="presence-item">
                            <img
                                src="/images/product/frenchise/frenchise_layout_3.png"
                                alt="Store Branding"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Franchise Models */}
            <section className="franchise-models">
                <div className="container">
                    <h2 className="section-title"><span className="Momo-Signature-word">Our</span> Franchise Models</h2>
                    <div className="models-grid">

                        {/* Model A: Bronze */}
                        <div className="model-card bronze">
                            <div className="model-header">
                                <h3>BRONZE</h3>
                                <span>Model A</span>
                            </div>
                            <div className="model-body">
                                <span className="price-tag">₹ 9,90,000</span>
                                <span className="area-tag">250-350 Sq Ft</span>
                                <button className="btn-model view-model-btn" data-model="bronze">View Details</button>
                            </div>
                        </div>

                        {/* Model B: Silver */}
                        <div className="model-card silver">
                            <div className="model-header">
                                <h3>SILVER</h3>
                                <span>Model B</span>
                            </div>
                            <div className="model-body">
                                <span className="price-tag">₹ 19,90,000</span>
                                <span className="area-tag">600-800 Sq Ft</span>
                                <button className="btn-model view-model-btn" data-model="silver">View Details</button>
                            </div>
                        </div>

                        {/* Model C: Gold */}
                        <div className="model-card gold">
                            <div className="model-header">
                                <h3>GOLD</h3>
                                <span>Model C</span>
                            </div>
                            <div className="model-body">
                                <span className="price-tag">₹ 37,90,000</span>
                                <span className="area-tag">1000-1200 Sq Ft</span>
                                <button className="btn-model view-model-btn" data-model="gold">View Details</button>
                            </div>
                        </div>

                        {/* Model D: Platinum */}
                        <div className="model-card platinum">
                            <div className="model-header">
                                <h3>PLATINUM</h3>
                                <span>Model D</span>
                            </div>
                            <div className="model-body">
                                <span className="price-tag">₹ 49,90,000</span>
                                <span className="area-tag">1600-1800 Sq Ft</span>
                                <button className="btn-model view-model-btn" data-model="platinum">View Details</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="franchise-comparison">
                <div className="container">
                    <h2 className="section-title">Franchise Comparison</h2>
                    <div className="comparison-image-container">
                        <img
                            src="/images/product/frenchise/frachise_compressed.jpg"
                            alt="Franchise Comparison"
                            className="comparison-img"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <p className="text-center mt-3" style={{ color: 'var(--gray)', marginTop: '2rem' }}>
                        * All models include No Royalty Fee and 5 KM Exclusivity Radius.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="franchise-faq">
                <div className="container">
                    <h2 className="section-title">Franchise <span className="Momo-Signature-word">FAQs</span></h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <div className="faq-question">
                                How much time does it take to set up the franchise?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                It typically takes 45–60 days from the day of payment received and the first offline visit.
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                What is the exclusivity radius provided?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                Bronze: 2 km, Silver: 3 km, Gold: 5 km, Platinum: 15 km
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                Does Parnika India help with recruitment?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                Recruitment is not included, but employee training support is provided.
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                Who is the franchise opportunity suitable for?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                It is recommended for entrepreneurs, homemakers, students, women, retirees, and full-time and
                                Part Time business aspirants.
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                Is software support provided?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                Yes, franchisees get free ₹50,000 worth billing & CRM software.
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                Is operational training included?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                Yes, training is provided on store setup, staff management, billing, returns, and sales.
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                Will franchise owners get access to business coaching?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                Yes, franchise partners get free access to business sessions conducted by expert coaches to
                                improve productivity.
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                Will I get assistance in location selection?
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                Yes, Parnika India helps in identifying and finalizing store locations.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Structure */}
            <div className="modal-overlay" id="franchiseModal">
                <div className="modal-content">
                    <span className="close-btn">&times;</span>
                    <div className="modal-body-content">
                        <img id="modalImg" className="modal-img" src="" alt="Franchise Detail" />
                    </div>
                </div>
            </div>

            <Script src="/js/about.js" strategy="lazyOnload" />
            <Script src="/js/parnika_franchises.js" strategy="lazyOnload" />
        </>
    );
}
