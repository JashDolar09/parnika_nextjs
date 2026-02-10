import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { kurtiImages } from '@/app/data/kurtis';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Designer Kurtis & Kurta Sets Collection | Parnika India',
    description: 'Explore Parnika India\'s vibrant collection of designer kurtis, ethnic kurta sets, and daily wear tunics. Stylish, comfortable, and crafted with premium fabrics in Surat.',
    openGraph: {
        title: "Designer Kurtis & Kurta Sets | Parnika India",
        description: "Experience style and comfort in every piece of our Kurta set collection.",
        url: "https://parnikaindia.com/kurtis",
    },
};

export default function Kurtis() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Discover the charm of Kurtis & Kurta sets</h1>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
                <p className="hero-subtitle fade-in-up ubuntu-regular" style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Experience style and comfort in every piece of our Kurta set collection, meticulously designed to give you
                    a modern yet timeless look. Whether it&apos;s for daily elegance or festive glamour, Parnika India&apos;s
                    kurtis are the perfect choice for the modern woman.
                </p>
            </div>

            <Gallery images={kurtiImages} />

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
