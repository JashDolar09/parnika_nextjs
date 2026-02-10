import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { suitsImages } from '@/app/data/suits';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Designer Salwar Suits & Ethnic Sets | Parnika India',
    description: 'Shop Parnika India\'s collection of designer salwar suits, Readymade ethnic sets, and unstitched dress materials. Elegant designs for daily wear and special occasions.',
    openGraph: {
        title: "Designer Salwar Suits | Parnika India",
        description: "Our suits blend tradition and style, designed to bring out your grace.",
        url: "https://parnikaindia.com/suits",
    },
};

export default function Suits() {
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
                    Our suits blend tradition and style, designed to bring out your grace, confidence and timeless beauty.
                    From intricate embroidery to contemporary prints, discover the perfect ethnic ensemble at Parnika India.
                </p>
            </div>

            <Gallery images={suitsImages} />

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
