import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Collection - Tops | Parnika',
};

export default function Top() {
    return (
        <>
            <link rel="stylesheet" href="/css/seemore.css" />
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Celebrate every moment with colors, charm and designs</h1>
                </div>
            </section>

            <p className="hero-subtitle fade-in-up ubuntu-regular">Our tops blend tradition and style, designed to bring out
                your grace, confidence and timeless beauty.</p>

            <div className="gallery-main">
                <ul id="galleryList" data-caption="Premium Top"></ul>
            </div>

            <div className="load-more-container">
                <button className="ubuntu-regular" id="loadMoreBtn">Load More</button>
            </div>

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

            <Script src="/js/top_images.js" strategy="lazyOnload" />
            <Script src="/js/see_more_common.js" strategy="lazyOnload" />
        </>
    );
}
