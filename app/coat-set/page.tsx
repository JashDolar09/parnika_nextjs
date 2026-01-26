import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Collection - Coat Set | Parnika',
};

export default function CoatSet() {
    return (
        <>
            <link rel="stylesheet" href="/css/seemore.css" />
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <section className="collection-hero" id="collectionHero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up satisfy-regular">Wrap yourself in style and warmth</h1>
                </div>
            </section>

            <p className="hero-subtitle fade-in-up ubuntu-regular">Step out in a coat set designed to elevate your presence soft in
                feel, strong in style and thoughtfully made to keep you warm while bringing out your natural grace.</p>

            <div className="gallery-main">
                <ul className="gallery-list" id="galleryList" data-caption="Coat Set">
                    <li><figure><img src="/images/product/coat_set/coat_set 1.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 2.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 3.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 4.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 5.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 6.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 7.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 8.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 9.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 10.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 11.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 12.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 13.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 14.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 15.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 16.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 17.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 18.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 19.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 20.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 21.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                    <li><figure><img src="/images/product/coat_set/coat_set 22.webp" alt="Coat Set" loading="lazy" decoding="async" width="300" height="420" /><figcaption>Coat Set</figcaption></figure></li>
                </ul>
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

            <Script src="/js/see_more_common.js" strategy="lazyOnload" />
        </>
    );
}
