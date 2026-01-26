import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media & Recognition | Parnika - 42 Years of Excellence',
};

export default function Media() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css" />
            <link rel="stylesheet" href="/css/media.css" />
            <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Satisfy&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            {/* Top Banner */}
            <section className="about-banner" id="aboutBanner">
                <div className="banner-background"></div>
                <div className="banner-content">
                    <h1 className="banner-title fade-in-up">Media & Recognition</h1>
                    <p className="banner-subtitle fade-in-up">Celebrating 42 Years of Excellence and National Recognition</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="media-intro">
                <div className="container fade-in">
                    <h2><span className="Momo-Signature-hd">Our</span> Journey of Growth</h2>
                    <div className="intro-paragraphs">
                        <p className="intro-p">
                            Founded over four decades ago, Parnika has evolved from a local craftsmanship center into a national
                            leader in Indian ethnic wear. Our journey is defined by an unwavering commitment to quality,
                            authenticity, and the celebration of Indian heritage. As we continue to expand our footprint across
                            India, our growth story remains rooted in the trust of millions of customers who choose Parnika for
                            their most special occasions.
                        </p>
                        <p className="intro-p">
                            In recent years, Parnika has been at the forefront of the ethnic wear revolution, blending
                            traditional weaving techniques with modern design sensibilities. Our innovative approach and rapid
                            market expansion have been covered by leading business journals and news channels, highlighting our
                            role as a trendsetter in the fashion industry and a beacon of manufacturing excellence in India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image & Media Highlight Section */}
            <section className="media-highlights">
                <div className="container grid highlights-grid">
                    <div className="highlights-text fade-in">
                        <h3>A Legacy in the Limelight</h3>
                        <p>
                            Parnika&apos;s presence in the media reflects our standing as a premium ethnic wear brand. From fashion
                            runways to exclusive interviews, our collections have consistently captured the imagination of
                            critics and enthusiasts alike. Our dedication to preserving traditional crafts while empowering
                            artisans has made us a subject of numerous features and editorial covers in the fashion world.
                        </p>
                        <div className="quote-box"
                            style={{ borderLeft: '4px solid var(--secondary-teal)', paddingLeft: '1rem', marginTop: '1rem', fontStyle: 'italic', color: 'var(--primary-teal)' }}>
                            &quot;Parnika represents the perfect bridge between ancestral craftsmanship and contemporary elegance.&quot;
                        </div>
                    </div>
                    <div className="highlights-images fade-in">
                        <div className="main-image-box">
                            <img src="/images/product/media/media1.jpg" alt="Parnika Store Highlight" />
                        </div>
                        <div className="sub-images-row">
                            <div className="sub-image-box">
                                <img src="/images/product/media/media2.jpg" alt="Media Feature 1" />
                            </div>
                            <div className="sub-image-box sub-image-box-3">
                                <img src="/images/product/media/media3.jpg" alt="Media Feature 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Presence In India */}
            <section className="media-logos-section">
                <div className="container">
                    <h2 className="fade-in"><span className="Momo-Signature-hd">Our</span> Presence In Media</h2>
                    <div className="logos-grid">

                        {/* ETNOW */}
                        <a href="https://retail.economictimes.indiatimes.com/blog/reinventing-retail-indian-businesses-transforming-consumer-experiences-by-2025/125379406"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/et-retail-logo.png" alt="ETNOW" />
                            </div>
                            <span className="logo-name">ET NOW</span>
                        </a>

                        {/* THE ECONOMIC TIMES */}
                        <a href="https://economictimes.indiatimes.com/small-biz/sme-sector/parnika-india-to-expand-its-operations-to-southern-and-eastern-india/articleshow/119289440.cms"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/the_economics_times.jpg" alt="Economic Times" />
                            </div>
                            <span className="logo-name">The Economic Times</span>
                        </a>

                        {/* INDIA Shipping */}
                        <a href="https://indiashippingnews.com/rupee-slide-offers-little-relief-to-textile-exporters-as-us-tariffs-hit-volumes-margins/"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/india-shipping-news.png" alt="India Today" />
                            </div>
                            <span className="logo-name">India Shipping</span>
                        </a>

                        {/* APPAREL VIEWS */}
                        <a href="https://www.apparelviews.com/indian-ethnic-fashion-a-new-force-in-global-retail-trends"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/appareal_news.jpg" alt="Apparel Views" />
                            </div>
                            <span className="logo-name">Apparel Views</span>
                        </a>

                        {/* Ahmedabad News */}
                        <a href="https://www.ahmedabadmirror.com/parnika-india-launches-menstrual-hygiene-awareness-drive-to-empower-underprivileged-women/81877244.html"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/ahmedabad_logo.png" alt="Fashion Network" />
                            </div>
                            <span className="logo-name">Ahmedabad News</span>
                        </a>

                        {/* CXO News */}
                        <a href="https://cxotoday.com/press-release/parnika-india-empowers-10000-women-entrepreneurs-through-its-womens-support-program/"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/cxo-logo.png" alt="Your Story" />
                            </div>
                            <span className="logo-name">CXO News</span>
                        </a>

                        {/* DD News */}
                        <a href="https://x.com/ddnewslive/status/1994433339214930278?s=48&t=evRTXVlytcibWR5VL6siSA"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/dd_news_b.png" alt="IBC 24" />
                            </div>
                            <span className="logo-name">DD News</span>
                        </a>

                        {/* Financial_Express */}
                        <a href="https://www.financialexpress.com/business/qco-withdrawal-to-lower-input-costs-widen-sourcing-base-for-textile-msmes-4044870/"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/financial_express.png" alt="IBC 24" />
                            </div>
                            <span className="logo-name">Financial_Express</span>
                        </a>

                        {/* Hindustan_Times */}
                        <a href="https://www.hindustantimes.com/lifestyle/fashion/freezing-at-wedding-ceremonies-5-tips-for-layering-your-ethnic-looks-to-stay-warm-and-stylish-101765714331520.html"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/hindustan_times.png" alt="Hindustan Times" />
                            </div>
                            <span className="logo-name">Hindustan_Times</span>
                        </a>

                        {/* smb_story */}
                        <a href="https://yourstory.com/smbstory/how-parnika-grew-from-commission-work-to-manufacturing-womens-ethnic-wear"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/smb_story.png" alt="smb_story" />
                            </div>
                            <span className="logo-name">smb_story</span>
                        </a>

                        {/* The_CSR */}
                        <a href="https://thecsruniverse.com/articles/parnika-india-empowers-over-10k-women-entrepreneurs"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/the_csr.png" alt="The_CSR" />
                            </div>
                            <span className="logo-name">The_CSR</span>
                        </a>

                        {/* Her_Zindagi */}
                        <a href="https://www.herzindagi.com/fashion/parnika-india-sarees-detailed-review-price-where-to-buy-article-1034659"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/her_zindagi.png" alt="Her_Zindagi" />
                            </div>
                            <span className="logo-name">Her_Zindagi</span>
                        </a>

                        {/* Hindi_FIRST_news */}
                        <a href="https://english.hindfirst.in/economy/from-surat-to-the-world-parnika-indias-journey-in-ethnic-fashion-excellence/45040"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/hindi_first_news_b.png" alt="Hindi_FIRST_news" />
                            </div>
                            <span className="logo-name">Hindi_FIRST_news</span>
                        </a>

                        {/* Youli_Loan */}
                        <a href="https://www.u-lead.com.tw/news/qco-%E9%80%80%E5%87%BA%E4%BB%A5%E9%99%8D%E4%BD%8E%E6%8A%95%E5%85%A5%E6%88%90%E6%9C%AC%EF%BC%8C%E6%89%A9%E5%A4%A7%E7%BA%BA%E7%BB%87%E4%B8%AD%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A%E7%9A%84%E9%87%87/"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/youli_loan_b.png" alt="Youli_Loan" />
                            </div>
                            <span className="logo-name">Youli_Loan</span>
                        </a>

                        {/* women_ETR */}
                        <a href="https://www.womenentrepreneursreview.com/news/pranika-india-launches--women-support-program--for-women-entrepreneurs-nwid-6668.html"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/women_etr_b.png" alt="women_ETR" />
                            </div>
                            <span className="logo-name">women_ETR</span>
                        </a>

                        {/* fashion-network */}
                        <a href="https://in.fashionnetwork.com/news/Parnika-rolls-out-women-s-support-program-to-over-10-000-entrepreneurs,1724230.html"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/fashion-network.png" alt="Fashion Network" />
                            </div>
                            <span className="logo-name">Fashion Network</span>
                        </a>

                        {/* sugar_mint */}
                        <a href="https://sugermint.com/vishal-pacheriwal/" className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/sugar_mint.png" alt="suger mint" />
                            </div>
                            <span className="logo-name">suger mint</span>
                        </a>

                        {/* Knitting views */}
                        <a href="https://knittingviews.com/parnika-india-to-expand-its-operations-to-southern-and-eastern-india/"
                            className="logo-item fade-in" target="_blank" rel="noreferrer">
                            <div className="logo-img-wrapper">
                                <img src="/images/product/media/knitting_views.png" alt="Knitting views" />
                            </div>
                            <span className="logo-name">Knitting views</span>
                        </a>

                    </div>
                </div>
            </section>

            <Script src="/js/about.js" strategy="lazyOnload" />
            <Script src="/js/media.js" strategy="lazyOnload" />
        </>
    );
}
