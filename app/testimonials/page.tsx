import Script from 'next/script';
import Image from 'next/image';
import type { Metadata } from 'next';
import '../styles/review.css';

const customerReviews = [
    { name: "Lakshmi B, Retail Buyer, Mumbai", text: "We selected in video call. The ethnic wear was beautifully designed and tailored. Fit was perfect and the fabric felt luxurious. The women's collection is classy and vibrant. Would surely recommend this brand!", img: "/images/product/review/La.jpg" },
    { name: "Atanu Bhowmik, Customer, Ahmedabad", text: "Recently purchased a beautiful collection of sarees from Parnika India and had a truly pleasant experience. The staff were courteous, attentive and ensured a smooth shopping experience.", icon: "fas fa-user-circle" },
    { name: "OG Fashion LLC, Retailer, Hyderabad", text: "Its quality over quantity everything come as they show the person that help me out was himanshu and it was easy you just have to trust the process!!!! They also do video calls to show the products!! I have taken from new york usa and everything was easy ..", icon: "fas fa-user-circle" },
    { name: "Maa Vindhyawasini, Customer, Delhi", text: "Truly a delightful experience! The women's ethnic wear I ordered was of superb quality. Great fit and finish. Highly recommended for anyone looking for authentic and fashionable traditional attire.", icon: "fas fa-user-circle" },
    { name: "Jyoti Swarnkar, Customer, Pune", text: "Parnika ki saree classy aur festive look ke liye perfect thi. Colour vibrant tha aur fabric soft. Staff was cooperative and delivery fast. Loved the service!", img: "/images/product/review/jt.jpg" },
    { name: "Sunil rajput Rajput, Customer, Bangalore", text: "I’ve been sourcing ladies’ wear from Parnika India for a while and am very happy with their products and service. Their designs are trendy and quality is consistent.", img: "/images/product/review/sunil.jpg" },
    { name: "Amol Shinde, Customer, Jaipur", text: "I’m very impressed by Parnika India’s collection of ladies’ wear. The fabrics are premium quality, and the styles are modern and elegant. Their customer service team is very supportive and responsive. I’ve placed several bulk orders with timely delivery and consistent quality.", img: "/images/product/review/amol.jpg" },
    { name: "Saurabh Shirkar, Customer, Chennai", text: "Parnika India se lehenga liya. Bahot achaa lga. Quickly sell bhi ho gya... elegance design tha. We will visit again.. one of the best manufacturing in surat. Thank you.", icon: "fas fa-user-circle" },
    { name: "Amit Thakur, Customer, Chennai", text: "We visited the Head Office of Parvati and Parnika. They have best collection in the Surat City. We visited many such places but this one proved to be the one which we were looking for. You name any style, design, fabrics, Lehenga, Saree and they have huge range of collections.", img: "/images/product/review/amit.jpg" },
    { name: "Parnika India, Google Review", text: "See more customer reviews and experiences with our company on Google.", img: "/images/product/review/review_logo.jpg", googleLink: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMozyDbJKqwyYLRSNagwTko1MEkzsbBMTjYzNki1tDKoSDZONEi2ME5NMUhOsUhONvbiLUgsysvMTlTIzEvJTAQAvpsVCw&q=parnika+india&oq=par&gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDwyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg2MTExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3be04f489cc630e9:0xc3a0c83ed0cd8cc3,1,,,," }
];

const wholesalerReviews = [
    { name: "shital chahwala, Wholesaler, Ankleshwar", text: "I am from ankleshwar. Sarees bahot acchi he. Design is elegance. Fir se aayege. Best for wholesale purpose. Thank you", img: "/images/product/review/shital.jpg", highlight: "Quality & Delivery" },
    { name: "Arjita Kulkarni, Wholesaler, Surat", text: "Parnika India’s ladies’ wear collection is both fashionable and affordable. I’ve been ordering regularly and have never been disappointed. The quality is consistent, and the fabrics are comfortable. Their team handles orders efficiently and communicates well.", img: "/images/product/review/arjita.jpg", highlight: "Stock Consistency" },
    { name: "Chandan Parashar, Wholesaler, Ludhiana", text: "Parnika India has a wonderful selection of ladies’ wear that appeals to a wide audience. Their fabrics are comfortable and durable, and the designs are elegant and fashionable. I highly recommend them to anyone looking for a reliable wholesale ladies’ wear supplier.", icon: "fas fa-store", highlight: "Reliable Partner" },
    { name: "Azharuddin Pathan, Wholesaler, Kanpur", text: "Parnika India is a dependable supplier for wholesale ladies’ wear. Their products are high quality and very fashionable. The fabrics used are comfortable and durable.", img: "/images/product/review/azhar.png", highlight: "Competitive Pricing" }
];

const franchiseReviews = [
    { name: "Ravi Malhotra, Franchise Partner, Bangalore", text: "\"Joining as a franchise partner was the best decision. Great support, quality products, and growing sales! The training and marketing assistance have been invaluable.\"", years: "3", growth: "150%" },
    { name: "Priyanka Desai, Franchise Partner, Pune", text: "\"Excellent franchise opportunity! The brand reputation is strong and the support team is always ready to help. Our store has become a trusted destination in the area.\"", years: "2", growth: "200%" },
    { name: "Anil Joshi, Franchise Partner, Indore", text: "\"Outstanding partnership! The quality products and brand support have helped us build a successful business. Customer satisfaction is high and sales keep growing.\"", years: "4", growth: "180%" }
];

export const metadata: Metadata = {
    title: 'Customer Reviews & Testimonials | Parnika India',
    description: 'Read what our customers, wholesalers, and franchise partners have to say about Parnika India\'s quality, designs, and business support. Over 42 years of excellence.',
    openGraph: {
        title: "Testimonials - Parnika India Reviews",
        description: "Voices of satisfaction from our global community of customers and partners.",
        url: "https://parnikaindia.com/testimonials",
    },
};

export default function Testimonials() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

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
                        {customerReviews.map((review, index) => (
                            <div className="review-card fade-up" key={index}>
                                <div className="review-photo">
                                    {review.icon ? (
                                        <i className={review.icon}></i>
                                    ) : (
                                        <Image
                                            src={review.img || ''}
                                            alt={`${review.name} - Reviewer Image`}
                                            width={100}
                                            height={100}
                                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    )}
                                </div>
                                <div className="review-stars">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </div>
                                <p className="review-text">{review.text}</p>
                                <p className="review-author">-{review.name}</p>
                                {review.googleLink && (
                                    <p className="review-author">
                                        <a className="google-link" href={review.googleLink} target="_blank" rel="noopener noreferrer">
                                            See more Google reviews
                                        </a>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wholesaler Feedback */}
            <section className="wholesaler-feedback" id="wholesalerFeedback">
                <div className="container">
                    <h2 className="section-title fade-in-up">Wholesaler Feedback</h2>
                    <div className="feedback-grid">
                        {wholesalerReviews.map((review, index) => (
                            <div className="feedback-card fade-up" key={index}>
                                <div className="feedback-icon">
                                    {review.icon ? (
                                        <i className={review.icon}></i>
                                    ) : (
                                        <Image
                                            src={review.img || ''}
                                            alt={`${review.name} - Wholesaler Image`}
                                            width={80}
                                            height={80}
                                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    )}
                                </div>
                                <div className="feedback-stars">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </div>
                                <p className="feedback-text">{review.text}</p>
                                <p className="feedback-author">-{review.name}</p>
                                <div className="feedback-highlight">
                                    <i className="fas fa-check-circle"></i> {review.highlight}
                                </div>
                            </div>
                        ))}
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
                        {franchiseReviews.map((review, index) => (
                            <div className="franchise-card fade-up" key={index}>
                                <div className="franchise-icon">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <div className="franchise-stars">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </div>
                                <p className="franchise-text">{review.text}</p>
                                <p className="franchise-author">-{review.name}</p>
                                <div className="franchise-stats">
                                    <div className="stat">
                                        <span className="stat-number">{review.years}</span>
                                        <span className="stat-label">Years</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">{review.growth}</span>
                                        <span className="stat-label">Growth</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Script src="/js/common.js" strategy="lazyOnload" />
            <Script src="/js/review.js" strategy="lazyOnload" />
        </>
    );
}

