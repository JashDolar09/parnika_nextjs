import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { deliverySareeImages } from '@/app/data/delivery_saree';

export const metadata: Metadata = {
    title: 'Our Collection - Delivery Saree | Parnika',
};

export default function DeliverySaree() {
    return (
        <>
            <link rel="stylesheet" href="/css/seemore.css" />
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">See Our Saree Curated Collections</h1>
                </div>
            </section>

            <p className="hero-subtitle fade-in-up ubuntu-regular">Explore our handpicked saree collection where tradition
                meets modern elegance each piece thoughtfully crafted to enhance your beauty, elevate your style and give you a
                touch of timeless sophistication.</p>

            <Gallery images={deliverySareeImages} />

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
        </>
    );
}
