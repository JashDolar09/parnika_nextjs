import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - 42 Years of Heritage & Craftsmanship | Parnika',
};

export default function About() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css" />

            {/* Top Banner */}
            <section className="about-banner" id="aboutBanner">
                <div className="banner-background"></div>
                <div className="banner-content">
                    <h1 className="banner-title fade-in-up">Our Journey: 42 Years of Heritage, Craftsmanship & Nationwide Growth</h1>
                    <p className="banner-subtitle fade-in-up">From a modest workshop to a trusted brand across India</p>
                </div>
            </section>

            {/* About Start */}
            <section className="about-welcome" id="aboutWelcome">
                <div className="container">
                    <div className="welcome-content">
                        <div className="welcome-text">
                            <h2 className="section-title fade-in-up">Welcome To Parnika India</h2>
                            <div className="welcome-paragraphs">
                                <p className="welcome-p fade-in-left">
                                    Where Tradition Meets Trust, and Fashion Becomes a Legacy.
                                </p>
                                <p className="welcome-p fade-in-right">
                                    Hello, and thank you for taking the first step toward a journey filled with style, success and opportunity.
                                </p>
                                <p className="welcome-p fade-in-left">
                                    At Parnika India, we don&apos;t just create ethnic wear we craft stories woven in tradition and tailored for today&apos;s generation.
                                </p>
                                <p className="welcome-p fade-in-left">
                                    Whether you&apos;re an aspiring entrepreneur or a seasoned business mind, you&apos;re invited to grow with a brand that has built its name on loyalty, quality and unmatched customer trust.
                                </p>
                                <span>Let&apos;s build something beautiful—together. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision" id="missionVision">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mission-card fade-in-up">
                            <div className="mv-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h2 className="mv-title"> <span className="Momo-Signature-word">Our</span> <span>Mission</span></h2>
                            <div className="mv-content">
                                <p>To deliver consistent, high-quality ethnic fashion across India, making elegant traditional wear accessible to everyone.</p>
                                <ul className="mission-points">
                                    <li><i className="fas fa-check"></i> Maintain highest quality standards</li>
                                    <li><i className="fas fa-check"></i> Preserve traditional craftsmanship</li>
                                    <li><i className="fas fa-check"></i> Innovate with modern designs</li>
                                    <li><i className="fas fa-check"></i> Build lasting customer relationships</li>
                                </ul>
                            </div>
                        </div>
                        <div className="vision-card fade-in-up">
                            <div className="mv-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h2 className="mv-title"><span className="Momo-Signature-word">Our</span> Vision</h2>
                            <div className="mv-content">
                                <p>To build an accessible retail & franchise ecosystem that blends tradition with evolving modern trends, becoming India&apos;s most trusted ethnic wear brand.</p>
                                <ul className="vision-points">
                                    <li><i className="fas fa-check"></i> Nationwide presence</li>
                                    <li><i className="fas fa-check"></i> Sustainable growth</li>
                                    <li><i className="fas fa-check"></i> Innovation in design</li>
                                    <li><i className="fas fa-check"></i> Community empowerment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="company-story" id="companyStory">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2 className="section-title fade-in-up"><span className="Momo-Signature-word">About</span> PARNIKA INDIA</h2>
                            <div className="story-paragraphs">
                                <p className="story-p fade-in-left">
                                    Parnika India is one of the country&apos;s most trusted and established names in ethnic wear. With over 42 years of expertise, we are proud to be manufacturers and international suppliers, delivering fashion that reflects tradition, elegance and quality.
                                </p>
                                <p className="story-p fade-in-right">
                                    From bridal lehengas to everyday wear, our wide product range is crafted with superior fabrics, intricate detailing and a deep understanding of what today&apos;s customer values most.
                                </p>
                                <p className="story-p fade-in-left">
                                    Known for our premium quality, timely delivery and trend-forward collections, Parnika India serves thousands of retailers, wholesalers and now franchise partners across India. Our in-house production capacity ensures consistency, scalability and excellence in every piece we create.
                                </p>
                            </div>
                        </div>
                        <div className="story-image fade-in-right">
                            <div className="about-img-box">
                                <img
                                    src="/images/product/about/parnika_building.png"
                                    alt="About Image"
                                    className="about-img"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Excellence */}
            <section className="manufacturing" id="manufacturing">
                <div className="container">
                    <h2 className="section-title fade-in-up">Manufacturing Excellence</h2>
                    <div className="manufacturing-content">
                        <div className="manufacturing-list fade-in-left">
                            <div className="excellence-item">
                                <div className="excellence-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="excellence-text">
                                    <h3>In-house Production</h3>
                                    <p>End-to-end manufacturing managed entirely within our facility, giving us complete control over every process and ensuring strict quality checks at each stage for consistent, high-standard results.</p>
                                </div>
                            </div>
                            <div className="excellence-item">
                                <div className="excellence-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="excellence-text">
                                    <h3>Experienced Designers & Artisans</h3>
                                    <p>With 42 years of experience, our products feature unique designs, premium fabrics and exceptional craftsmanship, ensuring unmatched quality and lasting style.</p>
                                </div>
                            </div>
                            <div className="excellence-item">
                                <div className="excellence-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="excellence-text">
                                    <h3>Reliable Fabrics & Finishing</h3>
                                    <p>We use carefully selected, high-quality fabrics that are soft, durable and wash-friendly, ensuring our garments maintain their fit, finish and premium feel even after repeated use.</p>
                                </div>
                            </div>
                            <div className="excellence-item">
                                <div className="excellence-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="excellence-text">
                                    <h3>Wholesaler Production</h3>
                                    <p>We specialize in large-scale production, ensuring that each product maintains the highest standards of quality and meticulous attention to detail throughout the entire process.</p>
                                </div>
                            </div>
                        </div>
                        <div className="manufacturing-image fade-in-right">
                            <div className="about-img-box">
                                <img
                                    src="/images/product/about/about%201.jpg"
                                    alt="Manufacturing 1"
                                    className="about-img-manu"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="about-img-box">
                                <img
                                    src="/images/product/about/about%204.jpg"
                                    alt="Manufacturing 2"
                                    className="about-img-manu"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Franchise Network */}
            <section className="export-network" id="exportNetwork">
                <div className="container">
                    <h2 className="section-title fade-in-up">Exporting Excellence Worldwide</h2>
                    <div className="export-content">
                        <div className="franchise-text fade-in-left">
                            <p className="export-intro">
                                We&apos;ve built our export network on years of trust, consistent quality and a strong product lineup. Our partners around the world rely on us for dependable service and smooth, hassle-free support.
                            </p>
                            <div className="export-benefits">
                                <h3>What Our Export Partners Receive:</h3>
                                <ul className="benefits-list">
                                    <li><i className="fas fa-handshake"></i> Reliable and personalized support at every stage of the export process, ensuring smooth operations and timely deliveries.</li>
                                    <li><i className="fas fa-globe"></i> Comprehensive guidance with clear documentation and full assistance for export compliance, helping you navigate international regulations effortlessly.</li>
                                    <li><i className="fas fa-bullhorn"></i> Professionally designed product brochures, branding assets, and marketing support to strengthen your presence in global markets.</li>
                                    <li><i className="fas fa-chart-line"></i> A steady and consistent supply of products backed by decades of experience, so you never have to worry about stock shortages.</li>
                                    <li><i className="fas fa-box"></i> High-quality, thoroughly inspected products ready for global distribution, meeting international standards and customer expectations.</li>
                                    <li><i className="fas fa-shield-alt"></i> Trust and credibility built over 42 years, providing our partners with confidence and long-term business reliability.</li>
                                </ul>
                            </div>

                            <div className="export-why">
                                <h3>Why It Works:</h3>
                                <p>With over 42 years of industry experience and a trusted product lineup, our export model is built for long-term success. Global partners appreciate our reliability, consistent quality and professional support at every step.</p>
                            </div>

                            <div className="franchise-vision">
                                <h3>Our Vision:</h3>
                                <p>To strengthen our global presence by delivering high-quality products to international markets and building lasting partnerships that help our brand reach customers worldwide.</p>
                            </div>

                            <a href="/contact" className="btn btn-primary franchise-cta">Partner With Us for Exports</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect With Us */}
            <section className="connect-with-us" id="connectWithUs">
                <div className="container">
                    <h2 className="section-title fade-in-up">Connect With us</h2>
                    <div className="connect-grid fade-in-up">
                        <div className="connect-card">
                            <h3>Franchises</h3>
                            <p>No : 78552-96321</p>
                            <p>Email : franchise@parnikaindia.com</p>
                        </div>
                        <div className="connect-divider"></div>
                        <div className="connect-card">
                            <h3>Wholesaler</h3>
                            <p>No : 74185-96324</p>
                            <p>Email : contact@parnikaindia.com</p>
                        </div>
                        <div className="connect-divider"></div>
                        <div className="connect-card">
                            <h3>Retailers</h3>
                            <p>No : 52147-74125</p>
                            <p>Email : parnikaindia@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section" id="statsSection">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item fade-in-up">
                            <div className="stat-number" data-target="42" data-suffix="+">10</div>
                            <div className="stat-label">Years of Excellence</div>
                        </div>
                        <div className="stat-item fade-in-up">
                            <div className="stat-number" data-target="150000" data-suffix="+">15000</div>
                            <div className="stat-label">Customers Trust</div>
                        </div>
                        <div className="stat-item fade-in-up">
                            <div className="stat-number" data-target="68" data-suffix="+">8</div>
                            <div className="stat-label">Export To Countries</div>
                        </div>
                        <div className="stat-item fade-in-up">
                            <div className="stat-number" data-target="10000" data-suffix="+">1090</div>
                            <div className="stat-label">Pincodes Served</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values" id="values">
                <div className="container">
                    <h2 className="section-title fade-in-up"><span className="Momo-Signature-word">Our</span> Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card fade-in-up">
                            <div className="value-icon">
                                <i className="fas fa-gem"></i>
                            </div>
                            <h3>Quality First</h3>
                            <p>We never compromise on quality. Every piece is crafted with attention to detail and premium materials.</p>
                        </div>
                        <div className="value-card fade-in-up">
                            <div className="value-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>Customer Trust</h3>
                            <p>Building lasting relationships through reliability, transparency and exceptional service.</p>
                        </div>
                        <div className="value-card fade-in-up">
                            <div className="value-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Innovation</h3>
                            <p>Blending traditional techniques with modern designs to create timeless yet contemporary pieces.</p>
                        </div>
                        <div className="value-card fade-in-up">
                            <div className="value-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Partnership</h3>
                            <p>Supporting our franchise partners and customers in their journey to success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page-specific JavaScript */}
            <Script src="/js/about.js" strategy="lazyOnload" />
        </>
    );
}
