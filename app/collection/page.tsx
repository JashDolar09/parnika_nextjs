import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Collection - Premium Indian Ethnic Wear | Parnika',
};

export default function Collection() {
    return (
        <>
            <link rel="stylesheet" href="/css/collection.css" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            {/* Collection Hero */}
            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up">Discover Our Exclusive Picks</h1>
                    <p className="hero-subtitle fade-in-up ubuntu-regular">
                        Each piece is made with premium fabrics, thoughtful design, and attention to detail. Perfect for
                        everyday wear, events, weddings, or wholesale orders.
                    </p>
                </div>
            </section>

            {/* Collection Categories */}
            <section className="collection-categories" id="collectionCategories">
                <div className="container">
                    <div className="categories-grid">
                        {/* Sarees */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/saree/saree%202.webp"
                                        alt="Premium Sarees"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Sarees</h3>
                                <p className="category-description">
                                    From classic to modern, festive to everyday, made with soft, high-quality fabrics and fine details
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i>Elegant</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i>Premium Fabric</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/saree" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Lehenga */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/lehenga/Lehenga%2013.webp"
                                        alt="Party & Bridal Gowns"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Party & Bridal Lehenga</h3>
                                <p className="category-description">
                                    Elegant silhouettes with stunning designs, perfect for weddings, parties and grand celebrations
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Elegant</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Premium Finishes</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/lehenga" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Kurtis */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/kurti/image_collection.webp"
                                        alt="Stylish Kurtis"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Stylish Kurtis</h3>
                                <p className="category-description">
                                    Casual, office and trendy styles crafted for comfort, elegance, charm and the modern lifestyle
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i>Casual</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i>Trendy Designs</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/kurtis" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Suits */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/suits/image_collection.webp"
                                        alt="Designer Suits"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Designer Suits</h3>
                                <p className="category-description">
                                    Modern and traditional styles with beautiful embroidery, perfect for parties and special occasions
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Modern</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Beautiful Embroidery</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/suits" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Pakistani Suits */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/pakistani_suits/Pakistani suit 1.webp"
                                        alt="Pakistani Suits"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Pakistani Suits</h3>
                                <p className="category-description">
                                    Exquisite designs with rich cultural heritage, featuring heavy embroidery and luxurious fabrics
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Regally Crafted</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Luxurious </span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/pakistani-suits" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Saree */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/delivery_saree/Delivery_Saree 1.webp"
                                        alt="Delivery Saree"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Delivery Saree</h3>
                                <p className="category-description">
                                    Affordable and high-quality sarees, ideal for businesses seeking reliable and consistent suppliers
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Affordable</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> High Quality</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/delivery-saree" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Silk Collection */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/saree/saree%205.webp"
                                        alt="Silk Saree"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Silk Saree</h3>
                                <p className="category-description">
                                    Regal pieces for your special day, adorned with sumptuous fabrics and delicate detailing
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Exclusive</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Sacred Silk</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/silk-saree" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Festive Season */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/festive_season/festive_season%202.webp"
                                        alt="Festive Season"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Festive Season</h3>
                                <p className="category-description">
                                    Elegant styles with fine details and vibrant accents, perfect for weddings, parties and festive celebrations
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Elegant</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Fine Details</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/festive" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Coat Set */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/coat_set/coat_set%203.webp"
                                        alt="Coat Set"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Coat Set</h3>
                                <p className="category-description">
                                    Stylish designs with unique accents and subtle elegance, perfect for parties, events and special occasions
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Stylish</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Unique Accents</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/coat-set" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Kurta Set */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/kurta_set/kurta_set%204.webp"
                                        alt="Kurta Set"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Kurta Set</h3>
                                <p className="category-description">
                                    Comfortable and trendy kurta sets, crafted for a perfect blend of style and everyday elegance
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Stylish</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Elegant Details</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/kurta-set" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Salwar Kameez */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/salwar_kameez/salwar_kameez%202.webp"
                                        alt="Salwar Kameez"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Salwar Kameez</h3>
                                <p className="category-description">
                                    Trendy and elegant designs, carefully crafted with care for a stylish, comfortable and timeless look
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Graceful</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Stylish Comfort</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/salwar-kameez" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Short Kurti */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/short_kurti/short_kurti%202.webp"
                                        alt="Short Kurti"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Short Kurti</h3>
                                <p className="category-description">
                                    Chic and vibrant short kurtis, carefully crafted for everyday wear with a stylish, comfortable twist
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Chic</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Vibrant Style</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/short-kurti" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>

                        {/* Girls Top */}
                        <div className="category-card fade-up">
                            <div className="category-image-wrapper">
                                <div className="category-image">
                                    <img
                                        src="/images/product/top/top%201.webp"
                                        alt="Girls Top"
                                        className="category-img"
                                    />
                                </div>
                                <div className="category-overlay">
                                    <a href="https://wa.me/917590048900" className="btn-whatsapp-card" target="_blank">
                                        <i className="fab fa-whatsapp"></i> WhatsApp to Order
                                    </a>
                                </div>
                            </div>
                            <div className="category-info">
                                <h3 className="category-title">Girls Top</h3>
                                <p className="category-description">
                                    Cute and playful tops designed for comfort and style, perfect for school or casual outings
                                </p>
                                <div className="category-features">
                                    <span className="feature-tag"><i className="fas fa-check"></i> Cute</span>
                                    <span className="feature-tag"><i className="fas fa-check"></i> Playful Style</span>
                                    <span className="feature-tag"><i className="fa-solid fa-angles-right"></i> <a href="/top" className="see-more-link">Explore Collection</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Form Wrapper */}
            <div id="popupFormWrapper" className="popup-form-wrapper" style={{ display: 'none' }}>
                <div className="popup-form-content">
                    <span className="popup-close">&times;</span>
                    <h2>Send Us a Message</h2>
                    <form id="popupForm">
                        <div className="form-group">
                            <label htmlFor="popupName">Full Name</label>
                            <input type="text" id="popupName" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="popupEmail">Email / Phone</label>
                            <input type="text" id="popupEmail" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="popupInterest">Interest</label>
                            <select id="popupInterest" name="interest" required>
                                <option value="">Select your interest</option>
                                <option value="retail">Retail Purchase</option>
                                <option value="wholesale">Wholesale/Bulk Order</option>
                                <option value="franchise">Franchise Opportunity</option>
                                <option value="other">Other Inquiry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="popupMessage">Message</label>
                            <textarea id="popupMessage" name="message" rows={5} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-submit">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Call to Action */}
            <section className="collection-cta" id="collectionCta">
                <div className="container">
                    <h2 className="cta-title fade-in-up">Ready to Explore Our Collections?</h2>
                    <p className="cta-text fade-in-up">Contact us for retail purchases, wholesale orders, or franchise opportunities.</p>
                    <div className="cta-buttons fade-in-up">
                        <a href="https://wa.me/917590048900" className="btn btn-whatsapp pulse-glow" target="_blank">
                            <i className="fab fa-whatsapp"></i> WhatsApp to Order
                        </a>
                        <a href="/contact" className="btn btn-secondary">
                            <i className="fas fa-envelope"></i> Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Fabric & Quality Info */}
            <section className="fabric-quality" id="fabricQuality">
                <div className="container">
                    <h2 className="section-title fade-in-up">Premium Fabrics & Quality</h2>
                    <div className="fabric-grid">
                        <div className="fabric-item bounce-in">
                            <div className="fabric-icon">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <h3>Premium Materials</h3>
                            <p>We source only the finest fabrics ensuring durability and comfort in every piece.</p>
                        </div>
                        <div className="fabric-item bounce-in">
                            <div className="fabric-icon">
                                <i className="fas fa-palette"></i>
                            </div>
                            <h3>Thoughtful Design</h3>
                            <p>Each design is carefully crafted to blend tradition with modern aesthetics.</p>
                        </div>
                        <div className="fabric-item bounce-in">
                            <div className="fabric-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <h3>Attention to Detail</h3>
                            <p>Meticulous finishing and quality checks ensure perfection in every garment.</p>
                        </div>
                        <div className="fabric-item bounce-in">
                            <div className="fabric-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Quality Guarantee</h3>
                            <p>42 Years of experience ensures consistent quality and customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Script src="/js/common.js" strategy="lazyOnload" />
            <Script src="/js/collection.js" strategy="lazyOnload" />
        </>
    );
}
