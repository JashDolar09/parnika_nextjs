import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { uniformSareeImages } from '@/app/data/uniform_saree';
import '../styles/seemore.css';

export const metadata: Metadata = {
    title: 'Uniform Saree Manufacturer & Supplier | Parnika India',
    description: 'Parnika India is a trusted uniform saree manufacturer and supplier in India, offering premium quality corporate, office, hospital, and staff uniform sarees.',
    openGraph: {
        title: "Uniform Saree Manufacturer & Supplier",
        description: "Premium quality corporate and staff uniform sarees at wholesale prices.",
        url: "https://parnikaindia.com/uniform-saree",
    },
};

export default function UniformSaree() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Premium Uniform Saree Collection</h1>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
                <p className="hero-subtitle fade-in-up ubuntu-regular" style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Explore our handpicked uniform saree collection where tradition meets modern elegance. Each piece is
                    thoughtfully crafted by Parnika India to enhance professionalism and provide all-day comfort
                    for staff and corporate teams.
                </p>
            </div>

            <Gallery images={uniformSareeImages} />

            {/* SEO Content Section */}
            <section className="seo-content-section" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Trusted Uniform Saree Manufacturer in India</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
                            Parnika India is a trusted uniform saree manufacturer and supplier in India, offering premium quality corporate, office, hospital, and staff uniform sarees in cotton, linen, and easy-maintenance fabrics at wholesale prices.
                        </p>
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
