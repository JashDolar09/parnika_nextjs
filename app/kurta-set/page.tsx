import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { kurtaSetImages } from '@/app/data/kurta_set';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Ethnic Kurta Sets for Women | Parnika India',
    description: 'Shop elegant kurta sets for women at Parnika India. Our collection features designer tunics paired with stylish bottoms, perfect for work, daily wear, and small gatherings.',
    openGraph: {
        title: "Ethnic Kurta Sets | Parnika India",
        description: "Our kurta sets blend tradition and style, designed to bring out your grace.",
        url: "https://parnikaindia.com/kurta-set",
    },
};

export default function KurtaSet() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Elegant Kurta Set Collections</h1>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
                <p className="hero-subtitle fade-in-up ubuntu-regular" style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Our kurta sets blend tradition and style, designed to bring out your grace, confidence and timeless beauty.
                    From breathable cottons to elegant rayons, find your perfect everyday ethnic wear at Parnika India.
                </p>
            </div>

            <Gallery images={kurtaSetImages} />

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
