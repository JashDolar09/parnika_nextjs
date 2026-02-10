import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { sareeImages } from '@/app/data/sarees';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Premium Indian Sarees Collection | Parnika India',
    description: 'Discover Parnika India\'s premium saree collection. From traditional Banarasi and silk sarees to modern party wear and printed georgettes. Handcrafted excellence from Surat.',
    openGraph: {
        title: "Premium Indian Sarees Collection | Parnika India",
        description: "Explore our handpicked saree collection where tradition meets modern elegance.",
        url: "https://parnikaindia.com/saree",
    },
};

export default function Saree() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">See Our Saree Curated Collections</h1>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
                <p className="hero-subtitle fade-in-up ubuntu-regular" style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Explore our handpicked saree collection where tradition meets modern elegance. Each piece is thoughtfully
                    crafted to enhance your beauty, elevate your style and give you a touch of timeless sophistication.
                    From heritage weaves to contemporary designs, Parnika India offers the finest sarees for every occasion.
                </p>
            </div>

            <Gallery images={sareeImages} />

            <section className="collection-cta" id="collectionCta">
                <div className="container">
                    <h2 className="cta-title fade-in-up">Ready to Explore Our Collections ?</h2>
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
