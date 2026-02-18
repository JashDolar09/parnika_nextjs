'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';
import { defaultCity } from '../data/cities';
import LocationContent from './LocationContent';

// Hero images data
const heroImages = [
    '/images/product/home/wb 4.png',
    '/images/product/home/wb 5.png'
];

interface HomeClientProps {
    city?: string;
}

export default function HomeClient({ city }: HomeClientProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Slideshow Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Animation Logic
    useEffect(() => {
        // Elements to animate
        const animatedElements = document.querySelectorAll(
            `.${styles.categoryCard}, .${styles.featureItem}, .${styles.testimonialCard}, .${styles.sectionTitle}, .${styles.ctaTitle}, .${styles.ctaButtons}, .${styles.aboutText}, .${styles.MomoSignatureWord}`
        );

        // Add 'isHidden' class initially to allow animation (Progressive Enhancement)
        animatedElements.forEach((el) => {
            if (!el.classList.contains(styles.isVisible)) {
                el.classList.add(styles.isHidden);
            }
        });

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.classList.remove(styles.isHidden);
                    target.classList.add(styles.isVisible);

                    if (target.classList.contains(styles.featureItem)) {
                        target.style.transitionDelay = `${Math.random() * 0.3}s`;
                    }

                    observerRef.current?.unobserve(target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        animatedElements.forEach((el) => observerRef.current?.observe(el));

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    return (
        <>
            {/* SEO H1 - Hidden visually if needed, but semantic is required */}
            <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Premium Indian Ethnic Wear {city ? `in ${city}` : ''} - Parnika India
            </h1>

            {/* Hero Banner */}
            <section className={styles.hero} id="hero">
                <div className={styles.heroSlideshow}>
                    {heroImages.map((src, index) => (
                        <div key={index}
                            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
                            style={{ display: index === currentSlide ? 'block' : 'none' }}>
                            <Image
                                src={src}
                                alt={`Premium Indian Ethnic Wear Collection ${index + 1}`}
                                width={1920}
                                height={1080}
                                priority={index === 0}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.heroContainer}></div>
            </section>

            {/* About Preview */}
            <section className={styles.aboutPreview} id="aboutPreview">
                <div className={styles.container}>
                    <div className={styles.aboutPreviewContent}>
                        <h2 className={styles.sectionTitle}><span className={styles.MomoSignatureWord}>About</span> us</h2>
                        <p className={styles.aboutText}>
                            For four decades we&apos;ve been manufacturing premium ethnic wear that blends tradition with today&apos;s
                            style. From finely crafted sarees to stylish kurtis, suits, and gowns, our products reflect quality,
                            design, and trust—now available through retail, wholesale,
                            and franchise partners nationwide.
                        </p>
                    </div>
                </div>
            </section>

            {city && <LocationContent city={city} />}

            {/* Top Categories */}
            <section className={styles.categories} id="categories">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}><span className={styles.MomoSignatureWord}>Our</span> Top Categories</h2>

                    <div className={styles.categoriesGrid}>
                        <div className={styles.categoryCard}>
                            <Link href="/collection#sarees">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/saree/saree 1.webp"
                                        alt="Premium Collection Sarees"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Premium Sarees</h3>
                                <p className={styles.categoryDesc}>Luxurious weaves artisanal heritage finesse</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#delivery_sarees">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/delivery_saree/Delivery_Saree 1.webp"
                                        alt="Uniform Sarees manufacturer and supplier"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Uniform Sarees</h3>
                                <p className={styles.categoryDesc}>Swift doorstep drapes curated elegance</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#suits">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/suits/image_home.webp"
                                        alt="Designer Ethnic Suits"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Designer Suits</h3>
                                <p className={styles.categoryDesc}>Modern cuts elevate signature suits</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#pakistani_suits">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/pakistani_suits/Pakistani suit 1.webp"
                                        alt="Authentic Pakistani Suits"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Pakistani Suits</h3>
                                <p className={styles.categoryDesc}>Regal cultural heritage exquisite craftsmanship</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#kurtis">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/kurti/image_collection.webp"
                                        alt="Stylish Women's Kurtis"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Stylish Kurtis</h3>
                                <p className={styles.categoryDesc}>Efffortless everyday silhouettes vibrant comfort</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#salwar_kameez">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/salwar_kameez/salwar_kameez 23.webp"
                                        alt="Traditional Salwar Kameez"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Salwar Kameez</h3>
                                <p className={styles.categoryDesc}>Regal flowing salwar kameez exquisite craftsmanship</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#lehenga">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/lehenga/Lehenga 15.webp"
                                        alt="Elegant Bridal Lehenga"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Elegant Lehenga</h3>
                                <p className={styles.categoryDesc}>Grand lehengas crafted for celebrations</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#fabric">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/home/fabric_saree.png"
                                        alt="Premium Textile Fabrics"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Fabric</h3>
                                <p className={styles.categoryDesc}>Premium textiles versatile textures enduring quality</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#indo_western">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/festive_season/festive_season 3.webp"
                                        alt="Indo-Western Fusion Wear"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Indo-Western</h3>
                                <p className={styles.categoryDesc}>Fusion aesthetics global flair modernity</p>
                            </Link>
                        </div>

                        <div className={styles.categoryCard}>
                            <Link href="/collection#coat_set">
                                <div className={styles.categoryImage}>
                                    <Image
                                        src="/images/product/coat_set/coat_set 5.webp"
                                        alt="Structured Coat Sets"
                                        className={styles.categoryImg}
                                        width={400}
                                        height={600}
                                    />
                                </div>
                                <h3 className={styles.categoryTitle}>Coat-Set</h3>
                                <p className={styles.categoryDesc}>Sharp structured layering power dressing</p>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.textCenter}>
                        <Link href="/collection" className={`${styles.btn} ${styles.btnPrimary}`}>
                            Explore Full Collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyChooseUs} id="whyChooseUs">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Why Choose Us</h2>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3 className={styles.featureTitle}>40+ Years Legacy</h3>
                            <p className={styles.featureText}>Deep experience and trust</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <i className="fas fa-industry"></i>
                            </div>
                            <h3 className={styles.featureTitle}>Own Manufacturing</h3>
                            <p className={styles.featureText}>Quality control, skilled artisans</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <i className="fas fa-globe-asia"></i>
                            </div>
                            <h3 className={styles.featureTitle}>Pan-India Franchise Growth</h3>
                            <p className={styles.featureText}>Proven brand network</p>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <i className="fas fa-star"></i>
                            </div>
                            <h3 className={styles.featureTitle}>Modern Designs & Premium Fabrics</h3>
                            <p className={styles.featureText}>Everyday + occasion wear</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonialsPreview} id="testimonialsPreview">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>What <span className={styles.MomoSignatureWord}>Our</span> Customers Say</h2>

                    <div className={styles.testimonialsGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialStars}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p className={styles.testimonialText}>"Excellent quality sarees! The fabric and workmanship are outstanding. Highly recommended for retail buyers."</p>
                            <p className={styles.testimonialAuthor}>- Retail Buyer, Mumbai</p>
                        </div>

                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialStars}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p className={styles.testimonialText}>"Consistent quality and timely delivery. Perfect for our wholesale business. Great partnership!"</p>
                            <p className={styles.testimonialAuthor}>- Wholesaler, Delhi</p>
                        </div>

                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialStars}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p className={styles.testimonialText}>"Joining as a franchise partner was the best decision. Great support, quality products, and growing sales!"</p>
                            <p className={styles.testimonialAuthor}>- Franchise Partner, Bangalore</p>
                        </div>
                    </div>

                    <div className={styles.textCenter}>
                        <Link href="/testimonials" className={`${styles.btn} ${styles.btnSecondary}`}>
                            See All Testimonials
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalCta} id="finalCta">
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Ready to shop, partner, or franchise?</h2>
                    <div className={styles.ctaButtons}>
                        <a href="https://wa.me/917590048900" className={`${styles.btn} ${styles.btnWhatsapp}`} target="_blank">
                            WhatsApp to Order
                        </a>
                        <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
