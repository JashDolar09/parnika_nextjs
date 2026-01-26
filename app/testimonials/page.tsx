import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testimonials - Customer Reviews & Feedback | Parnika',
};

export default function Testimonials() {
    return (
        <>
            <link rel="stylesheet" href="/css/review.css" />

            {/* Testimonials Hero */}
            <section className="testimonials-hero" id="testimonialsHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up">Voices of Satisfaction</h1>
                    <p className="hero-subtitle fade-in-up">One Stop Solution For Wholesaler and Retailer</p>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="customer-reviews" id="customerReviews">
                <div className="container">
                    <h2 className="section-title fade-in-up">Customer Reviews</h2>
                    <div className="reviews-grid">
                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <img src="/images/product/review/La.jpg" alt="Customer Logo" />
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">We selected in video call. The ethnic wear was beautifully designed and
                                tailored. Fit was perfect and the fabric felt luxurious. The women&apos;s collection is classy and
                                vibrant. Would surely recommend this brand!
                            </p>
                            <p className="review-author">- Lakshmi B, Retail Buyer, Mumbai</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">Recently purchased a beautiful collection of sarees from Parnika India and
                                had a truly pleasant experience. The staff were courteous, attentive and ensured a smooth
                                shopping experience.</p>
                            <p className="review-author">- Atanu Bhowmik, Customer, Ahmedabad</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">Its quality over quantity everything come as they show the person that help
                                me out was himanshu and it was easy you just have to trust the process!!!! They also do video
                                calls to show the products!! I have taken from new york usa and everything was easy ..</p>
                            <p className="review-author">- OG Fashion LLC, Retailer, Hyderabad</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">Truly a delightful experience! The women&apos;s ethnic wear I ordered was of
                                superb quality. Great fit and finish. Highly recommended for anyone looking for authentic and
                                fashionable traditional attire.</p>
                            <p className="review-author">- Maa Vindhyawasini, Customer, Delhi</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <img src="/images/product/review/jt.jpg" alt="Customer Logo" />
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">Parnika ki saree classy aur festive look ke liye perfect thi. Colour vibrant
                                tha aur fabric soft. Staff was cooperative and delivery fast. Loved the service!</p>
                            <p className="review-author">- Jyoti Swarnkar, Customer, Pune</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <img src="/images/product/review/sunil.jpg" alt="Customer Logo" />
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">I’ve been sourcing ladies’ wear from Parnika India for a while and am very
                                happy with their products and service. Their designs are trendy and quality is consistent.
                            </p>
                            <p className="review-author">- Sunil rajput Rajput, Customer, Bangalore</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <img src="/images/product/review/amol.jpg" alt="Customer Logo" />
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">I’m very impressed by Parnika India’s collection of ladies’ wear. The fabrics
                                are premium quality, and the styles are modern and elegant. Their customer service team is very
                                supportive and responsive. I’ve placed several bulk orders with timely delivery and consistent
                                quality.</p>
                            <p className="review-author">- Amol Shinde, Customer, Jaipur</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">Parnika India se lehenga liya. Bahot achaa lga. Quickly sell bhi ho gya...
                                elegance design tha. We will visit again.. one of the best manufacturing in surat. Thank you.
                            </p>
                            <p className="review-author">- Saurabh Shirkar, Customer, Chennai</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <img src="/images/product/review/amit.jpg" alt="Customer Logo" />
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">We visited the Head Office of Parvati and Parnika. They have best collection
                                in the Surat
                                City. We visited many such places but this one proved to be the one which we were looking for.
                                You name any
                                style, design, fabrics, Lehenga, Saree and they have huge range of collections.</p>
                            <p className="review-author">-Amit Thakur, Customer, Chennai</p>
                        </div>

                        <div className="review-card fade-up">
                            <div className="review-photo">
                                <img src="/images/product/review/review_logo.jpg" alt="Parnika Logo" />
                            </div>
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">See more customer reviews and experiences with our company on Google.</p>
                            <p className="review-author">-Parnika India, Google Review</p>
                            <p className="review-author">
                                <a className="google-link"
                                    href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMozyDbJKqwyYLRSNagwTko1MEkzsbBMTjYzNki1tDKoSDZONEi2ME5NMUhOsUhONvbiLUgsysvMTlTIzEvJTAQAvpsVCw&q=parnika+india&oq=par&gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDwyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg2MTExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3be04f489cc630e9:0xc3a0c83ed0cd8cc3,1,,,,"
                                    target="_blank" rel="noopener noreferrer">
                                    See more Google reviews
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wholesaler Feedback */}
            <section className="wholesaler-feedback" id="wholesalerFeedback">
                <div className="container">
                    <h2 className="section-title fade-in-up">Wholesaler Feedback</h2>
                    <div className="feedback-grid">
                        <div className="feedback-card fade-up">
                            <div className="feedback-icon">
                                <img src="/images/product/review/shital.jpg" alt="Wholesaler Logo" />
                            </div>
                            <div className="feedback-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="feedback-text">I am from ankleshwar. Sarees bahot acchi he. Design is elegance. Fir se
                                aayege. Best for wholesale purpose. Thank you</p>
                            <p className="feedback-author">- shital chahwala, Wholesaler, Ankleshwar</p>
                            <div className="feedback-highlight">
                                <i className="fas fa-check-circle"></i> Quality & Delivery
                            </div>
                        </div>

                        <div className="feedback-card fade-up">
                            <div className="feedback-icon">
                                <img src="/images/product/review/arjita.jpg" alt="Wholesaler Logo" />
                            </div>
                            <div className="feedback-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="feedback-text">Parnika India’s ladies’ wear collection is both fashionable and affordable.
                                I’ve been ordering regularly and have never been disappointed. The quality is consistent, and
                                the fabrics are comfortable. Their team handles orders efficiently and communicates well.
                            </p>
                            <p className="feedback-author">-Arjita Kulkarni, Wholesaler, Surat</p>
                            <div className="feedback-highlight">
                                <i className="fas fa-check-circle"></i> Stock Consistency
                            </div>
                        </div>

                        <div className="feedback-card fade-up">
                            <div className="feedback-icon">
                                <i className="fas fa-store"></i>
                            </div>
                            <div className="feedback-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="feedback-text">Parnika India has a wonderful selection of ladies’ wear that appeals to a
                                wide audience. Their fabrics are comfortable and durable, and the designs are elegant and
                                fashionable. I highly recommend them to anyone looking for a reliable wholesale ladies’ wear
                                supplier.</p>
                            <p className="feedback-author">- Chandan Parashar, Wholesaler, Ludhiana</p>
                            <div className="feedback-highlight">
                                <i className="fas fa-check-circle"></i> Reliable Partner
                            </div>
                        </div>

                        <div className="feedback-card fade-up">
                            <div className="feedback-icon">
                                <img src="/images/product/review/azhar.png" alt="Wholesaler Logo" />
                            </div>
                            <div className="feedback-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="feedback-text">Parnika India is a dependable supplier for wholesale ladies’ wear. Their
                                products are high quality and very fashionable. The fabrics used are comfortable and durable.
                            </p>
                            <p className="feedback-author">-Azharuddin Pathan, Wholesaler, Kanpur</p>
                            <div className="feedback-highlight">
                                <i className="fas fa-check-circle"></i> Competitive Pricing
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="testimonials-cta" id="testimonialsCta">
                <div className="container">
                    <h2 className="cta-title fade-in-up">Loved These Reviews?</h2>
                    <p className="cta-text fade-in-up">Join our satisfied customers, wholesalers, and franchise partners today!</p>
                    <div className="cta-buttons fade-in-up">
                        <a href="/contact" className="btn btn-primary">
                            <i className="fas fa-envelope"></i> Contact Us
                        </a>
                        <a href="/contact" className="btn btn-review">
                            <i className="fas fa-handshake"></i> Become a Franchise Partner
                        </a>
                    </div>
                </div>
            </section>

            {/* Franchise Partner Feedback */}
            <section className="franchise-feedback" id="franchiseFeedback">
                <div className="container">
                    <h2 className="section-title fade-in-up">Franchise Partner Feedback</h2>
                    <div className="franchise-grid">
                        <div className="franchise-card fade-up">
                            <div className="franchise-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div className="franchise-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="franchise-text">&quot;Joining as a franchise partner was the best decision. Great support,
                                quality products, and growing sales! The training and marketing assistance have been
                                invaluable.&quot;
                            </p>
                            <p className="franchise-author">- Ravi Malhotra, Franchise Partner, Bangalore</p>
                            <div className="franchise-stats">
                                <div className="stat">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">150%</span>
                                    <span className="stat-label">Growth</span>
                                </div>
                            </div>
                        </div>

                        <div className="franchise-card fade-up">
                            <div className="franchise-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div className="franchise-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="franchise-text">&quot;Excellent franchise opportunity! The brand reputation is strong and the
                                support team is always ready to help. Our store has become a trusted destination in the area.&quot;
                            </p>
                            <p className="franchise-author">- Priyanka Desai, Franchise Partner, Pune</p>
                            <div className="franchise-stats">
                                <div className="stat">
                                    <span className="stat-number">2</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">200%</span>
                                    <span className="stat-label">Growth</span>
                                </div>
                            </div>
                        </div>

                        <div className="franchise-card fade-up">
                            <div className="franchise-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div className="franchise-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="franchise-text">&quot;Outstanding partnership! The quality products and brand support have
                                helped us build a successful business. Customer satisfaction is high and sales keep growing.&quot;
                            </p>
                            <p className="franchise-author">- Anil Joshi, Franchise Partner, Indore</p>
                            <div className="franchise-stats">
                                <div className="stat">
                                    <span className="stat-number">4</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">180%</span>
                                    <span className="stat-label">Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Script src="/js/common.js" strategy="lazyOnload" />
            <Script src="/js/review.js" strategy="lazyOnload" />
        </>
    );
}
