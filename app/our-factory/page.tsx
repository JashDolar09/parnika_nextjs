import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Factory - Manufacturing Excellence | Parnika',
};

export default function OurFactory() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css" />
            <link rel="stylesheet" href="/css/our_factory.css" />
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            {/* Top Banner */}
            <section className="about-banner" id="aboutBanner">
                <div className="banner-background"></div>
                <div className="banner-content">
                    <h1 className="banner-title fade-in-up">Serving India with Craftsmanship, Quality and Dedication for 42 Years</h1>
                    <p className="banner-subtitle fade-in-up">Turning craftsmanship into a trusted brand serving all of India</p>
                </div>
            </section>

            {/* Factory Introduction */}
            <section className="factory-intro">
                <div className="container">
                    <div className="intro-content">
                        <h2 className="factory-heading fade-in-up"><span className="Momo-Signature-word">Our</span> Manufacturing Excellence</h2>
                        <div className="intro-text fade-in-up ubuntu-regular">
                            <p>At Parnika India, we take immense pride in our state-of-the-art manufacturing facility, where
                                tradition meets technology. With over four decades of expertise, our factory is a hub of
                                creativity and precision, capable of producing a vast array of ethnic wear. From weaving premium
                                Banarasi silks to printing vibrant georgettes and cottons, our facility handles every aspect of
                                production with meticulous care. Our commitment to quality ensures that every piece of fabric
                                that leaves our factory is a testament to superior craftsmanship.</p>
                        </div>
                        <div className="intro-text fade-in-up ubuntu-regular">
                            <p>Our workforce is our greatest asset a team of skilled artisans, master weavers and experienced
                                technicians who bring designs to life. Equipped with modern machinery for kurti printing, saree
                                printing and customized fabric processing, we ensure consistency and scalability without
                                compromising on the intricate details that define Indian ethnic wear. We believe in sustainable
                                practices and continuous innovation, making Parnika India a preferred manufacturing partner for
                                wholesalers and retailers nationwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factory Gallery (Zig-Zag Layout) */}
            <section className="factory-gallery">
                <div className="container">

                    {/* Row 1: Text Left, Image Right */}
                    <div className="gallery-row">
                        <div className="gallery-content">
                            <h3>Saree Production</h3>
                            <p className="ubuntu-regular">Our saree production unit is the heart of Parnika India. Here, we blend
                                age-old weaving
                                techniques with modern looms to create masterpieces. Whether it&apos;s the rich texture of Banarasi
                                silk or the fluid drape of chiffon, each saree goes through rigorous quality checks. Our
                                artisans pay close attention to the border work, pallu design, and overall finish, ensuring that
                                every saree serves as a perfect blend of tradition and contemporary style.</p>
                        </div>
                        <div className="gallery-image-wrapper">
                            <div className="gallery-img-box">
                                <img src="/images/product/factory/saree-weaving-1.jpg" alt="Saree Production" className="gallery-img" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Image Left, Text Right */}
                    <div className="gallery-row reverse">
                        <div className="gallery-content">
                            <h3>Precision Printing</h3>
                            <p className="ubuntu-regular">Colors come alive in our printing division. We utilize advanced screen and
                                digital printing
                                technologies to create stunning patterns on Kurtis and Sarees. From intricate floral motifs to
                                bold geometric designs, our printing process ensures color fastness and sharpness. Our
                                customized printing services allow us to cater to specific market trends and client
                                requirements, offering a versatility that sets us apart in the textile industry.</p>
                        </div>
                        <div className="gallery-image-wrapper">
                            <div className="gallery-img-box">
                                <img src="/images/product/factory/saree-weaving-5.png" alt="Precision Printing" className="gallery-img" />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Text Top, Image Bottom (Centered) */}
                    <div className="gallery-row centered">
                        <div className="gallery-content">
                            <h3>Fabric Processing <span className="Momo-Signature-fw">And</span> Quality <span className="Momo-Signature-fw">Control</span></h3>
                            <p className="ubuntu-regular">Before a garment reaches you, it undergoes specialized fabric processing
                                to enhance its feel and
                                durability. Our quality control team inspects every yard of fabric for defects, ensuring uniform
                                texture and strength. This dedication to excellence is what has built our reputation over 42
                                years. We don&apos;t just manufacture clothes; we craft promises of quality that our partners and
                                customers rely on.</p>
                        </div>
                        <div className="gallery-image-wrapper">
                            <div className="gallery-img-box">
                                <img src="/images/product/factory/saree-weaving-6.png" alt="Quality Control" className="gallery-img" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" id="mapSection">
                <div className="container">
                    <h2 className="section-title fade-in-up">Find Us</h2>
                    <div className="map-wrapper fade-in-up">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.442341598379!2d72.8643172750333!3d21.094923880570924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05182cc5889d7%3A0x6d8afcc3cf4e388b!2sParvati%20Fabrics%20limited-Factory!5e0!3m2!1sen!2sin!4v1767073255398!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="map-iframe">
                            </iframe>
                            <div className="map-pin">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="location-brief text-center mt-4" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <p className="ubuntu-regular"><i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary-teal)' }}></i>
                            Parvati Fabrics limited-Factory , A-B, Plot No. 512, Rd Number 5, GIDC, Sachin, Surat, Sachin INA, Gujarat 394230</p>
                    </div>
                </div>
            </section>

            <Script src="/js/about.js" strategy="lazyOnload" />
            <Script src="/js/our_factory.js" strategy="lazyOnload" />
        </>
    );
}
