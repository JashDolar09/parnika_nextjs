import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { pakistaniSuitsImages } from '@/app/data/pakistani_suits';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Pakistani Suits - Premium Ethnic Wear | Parnika India',
    description: 'Discover the vibrant Pakistani Multi-Print Cotton 3-Piece Suit set. Ideal for daily wear, festive occasions, and weddings. Premium embroidered ethnic wear.',
    openGraph: {
        title: "Pakistani Suits - Premium Ethnic Wear",
        description: "Vibrant and elegant Pakistani suits with rich embroidery.",
        url: "https://parnikaindia.com/pakistani-suits",
    },
};

export default function PakistaniSuits() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Exquisite Pakistani Suits – Elegance Redeined</h1>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
                <p className="hero-subtitle fade-in-up ubuntu-regular" style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Discover our stunning collection of Pakistani suits, featuring intricate embroidery, rich fabrics, and
                    a perfect blend of tradition and modern flair. Crafted for elegance and comfort by Parnika India.
                </p>
            </div>

            <Gallery images={pakistaniSuitsImages} />

            {/* SEO Content Section */}
            <section className="seo-content-section" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Premium Pakistani Cotton Suits</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
                            The Pakistani Multi-Print Cotton 3-Piece Suit combines vibrant colors with soft, high-quality fabric to ensure all-day comfort. Designed to suit all sizes, this trending Pakistani suit is both stylish and versatile. Featuring rich embroidery, a long straight-cut kameez, and a perfectly matched dupatta, it offers a graceful fall and royal appeal—making it ideal for daily wear, festive occasions, parties, and weddings.
                        </p>
                        <div style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>
                            <strong>Keywords:</strong> Pakistani Cotton Suit, 3 Piece Suit Set, Embroidered Suit, Party Wear Suit, Wedding Wear Suit, Premium Ethnic Wear.
                        </div>
                    </div>
                </div>
            </section>

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
