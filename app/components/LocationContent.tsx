'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';
import { cities } from '../data/cities';

interface LocationContentProps {
    city: string;
}

const LocationContent: React.FC<LocationContentProps> = ({ city }) => {
    return (
        <>
            {/* Trusted Saree Seller */}
            <section className={styles.trustedSection} id="trustedSareeSeller">
                <div className={styles.container}>
                    <div className={styles.trustedGrid}>
                        <div className={styles.trustedImageWrapper}>
                            <Image
                                src="/images/product/saree/saree 1.webp"
                                alt={`Trusted Saree Seller in ${city} - Parnika India`}
                                width={600}
                                height={700}
                                className={styles.trustedImage}
                            />
                        </div>
                        <div className={styles.trustedContent}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.MomoSignatureWord}>Indian Sarees</span> Manufacturers in {city}
                            </h2>
                            <p className={styles.trustedParagraph}>
                                Welcome to Parnika India, your reliable place to buy beautiful and high-quality sarees in {city}. We offer a wide range of traditional and modern sarees designed for comfort, elegance, and every special occasion.
                            </p>
                            <ul className={styles.trustedList}>
                                <li className={styles.trustedListItem}>
                                    <strong>Craftsmanship and Quality:</strong> Every saree is carefully selected to ensure premium fabric, fine stitching, and excellent finishing standards.
                                </li>
                                <li className={styles.trustedListItem}>
                                    <strong>Wide Range of Designs:</strong> Our {city} collection includes silk sarees, designer sarees, printed sarees, party wear sarees, and wedding collections.
                                </li>
                                <li className={styles.trustedListItem}>
                                    <strong>Customization Options:</strong> Choose from various colors, patterns, and fabrics to match your personal style and event needs.
                                </li>
                                <li className={styles.trustedListItem}>
                                    <strong>Premium Fabric Selection:</strong> We focus on comfort, durability, and elegant designs suitable for weddings, festivals, office wear, and daily wear.
                                </li>
                            </ul>
                            <div style={{ marginTop: '2rem' }}>
                                <a href="https://wa.me/917590048900" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank">
                                    Know More & Order on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default LocationContent;
