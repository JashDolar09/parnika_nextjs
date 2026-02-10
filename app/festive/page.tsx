import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { festiveImages } from '@/app/data/festive';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Festive Wear & Indian Traditional Outfits | Parnika India',
    description: 'Celebrate in style with Parnika India\'s festive collection. Exquisite sarees, lehengas, and designer suits perfect for Diwali, Eid, and weddings. Premium ethnic wear for every celebration.',
    openGraph: {
        title: "Festive Wear Collection | Parnika India",
        description: "Celebrate every moment with colors, charm and designs from our festive collection.",
        url: "https://parnikaindia.com/festive",
    },
};

export default function Festive() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Celebrate every moment with colors, charm and designs</h1>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
                <p className="hero-subtitle fade-in-up ubuntu-regular" style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Our festive collection blends tradition and style, designed to bring out your grace, confidence and
                    timeless beauty. From vibrant silks to intricate handwork, Parnika India ensures you look your best
                    at every celebration.
                </p>
            </div>

            <Gallery images={festiveImages} />

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
