import Script from 'next/script';

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="/css/home.css" />

      {/* Hero Banner */}
      <section className="hero" id="hero">
        <div className="hero-slideshow">
          <img src="/images/product/home/wb 4.png" className="hero-slide active" alt="" />
          <img src="/images/product/home/wb 5.png" className="hero-slide" alt="" />
        </div>
        <div className="hero-container"></div>
      </section>

      {/* About Preview */}
      <section className="about-preview" id="aboutPreview">
        <div className="container">
          <div className="about-preview-content">
            <h2 className="section-title"><span className="Momo-Signature-word">About</span> us</h2>
            <p className="about-text line-reveal">
              For four decades we&apos;ve been manufacturing premium ethnic wear that blends tradition with today&apos;s
              style. From finely crafted sarees to stylish kurtis, suits, and gowns, our products reflect quality,
              design, and trust—now available through retail, wholesale,
              and franchise partners nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="categories" id="categories">
        <div className="container">
          <h2 className="section-title fade-in-up text-ami1"><span className="Momo-Signature-word">Our</span> Top Categories</h2>

          <div className="categories-grid">
            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/delivery_saree/Delivery_Saree 15.webp" alt="Premium Sarees" className="category-img" />
              </div>
              <h3 className="category-title">Delivery Sarees</h3>
              <p className="category-desc">Swift doorstep drapes curated elegance</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/saree/saree 1.webp" alt="Premium Sarees" className="category-img" />
              </div>
              <h3 className="category-title">Premium Sarees</h3>
              <p className="category-desc">Luxurious weaves artisanal heritage finesse</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/suits/image_home.webp" alt="Designer Suits" className="category-img" />
              </div>
              <h3 className="category-title">Designer Suits</h3>
              <p className="category-desc">Modern cuts elevate signature suits</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/kurti/image_collection.webp" alt="Stylish Kurtis" className="category-img" />
              </div>
              <h3 className="category-title">Stylish Kurtis</h3>
              <p className="category-desc">Efffortless everyday silhouettes vibrant comfort</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/salwar_kameez/salwar_kameez 23.webp" alt="Party & Bridal Gowns" className="category-img" />
              </div>
              <h3 className="category-title">salwar kameez</h3>
              <p className="category-desc">Regal flowing salwar kameez exquisite craftsmanship</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/lehenga/Lehenga 15.webp" alt="Wholesale Lots" className="category-img" />
              </div>
              <h3 className="category-title">Elegant Lehenga</h3>
              <p className="category-desc">Grand lehengas crafted for celebrations</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/home/fabric_saree.png" alt="Franchise Opportunities" className="category-img" />
              </div>
              <h3 className="category-title">Fabric</h3>
              <p className="category-desc">Premium textiles versatile textures enduring quality</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/festive_season/festive_season 3.webp" alt="Indo-Western" className="category-img" />
              </div>
              <h3 className="category-title">Indo-Western</h3>
              <p className="category-desc">Fusion aesthetics global flair modernity</p>
            </div>

            <div className="category-card zoom-in">
              <div className="category-image">
                <img src="/images/product/coat_set/coat_set 5.webp" alt="Coat-Set" className="category-img" />
              </div>
              <h3 className="category-title">Coat-Set</h3>
              <p className="category-desc">Sharp structured layering power dressing</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/collection" className="btn btn-primary explore-btn fade-in-up">Explore Full Collection</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us" id="whyChooseUs">
        <div className="container">
          <h2 className="section-title fade-in-up">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item bounce-in">
              <div className="feature-icon"><i className="fas fa-trophy"></i></div>
              <h3 className="feature-title">40+ Years Legacy</h3>
              <p className="feature-text">Deep experience and trust</p>
            </div>
            <div className="feature-item bounce-in">
              <div className="feature-icon"><i className="fas fa-industry"></i></div>
              <h3 className="feature-title">Own Manufacturing</h3>
              <p className="feature-text">Quality control, skilled artisans</p>
            </div>
            <div className="feature-item bounce-in">
              <div className="feature-icon"><i className="fas fa-globe-asia"></i></div>
              <h3 className="feature-title">Pan-India Franchise Growth</h3>
              <p className="feature-text">Proven brand network</p>
            </div>
            <div className="feature-item bounce-in">
              <div className="feature-icon"><i className="fas fa-star"></i></div>
              <h3 className="feature-title">Modern Designs & Premium Fabrics</h3>
              <p className="feature-text">Everyday + occasion wear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview" id="testimonialsPreview">
        <div className="container">
          <h2 className="section-title fade-in-up">What <span className="Momo-Signature-word">Our</span> Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-from-left">
              <div className="testimonial-photo">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">&quot;Excellent quality sarees! The fabric and workmanship are outstanding. Highly recommended for retail buyers.&quot;</p>
              <p className="testimonial-author">- Retail Buyer, Mumbai</p>
            </div>
            <div className="testimonial-card fade-from-right">
              <div className="testimonial-photo">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">&quot;Consistent quality and timely delivery. Perfect for our wholesale business. Great partnership!&quot;</p>
              <p className="testimonial-author">- Wholesaler, Delhi</p>
            </div>
            <div className="testimonial-card fade-from-left">
              <div className="testimonial-photo">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">&quot;Joining as a franchise partner was the best decision. Great support, quality products, and growing sales!&quot;</p>
              <p className="testimonial-author">- Franchise Partner, Bangalore</p>
            </div>
          </div>
          <div className="text-center">
            <a href="/testimonials" className="btn btn-secondary fade-in-up">See All Testimonials</a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta" id="finalCta">
        <div className="container">
          <h2 className="cta-title slide-from-bottom">Ready to shop, partner, or franchise?</h2>
          <div className="cta-buttons slide-from-bottom">
            <a href="https://wa.me/917590048900" className="btn btn-whatsapp pulse-glow" target="_blank">WhatsApp to Order</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="last-part" id="lastpart">
        <div className="container">
          <div className="last-part-content">
            <h2 className="section-title"><span className="Momo-Signature-word">See Our </span>Curated Collection</h2>
            <div className="last-images-wrapper">
              <img src="/images/product/home/home 1.jpeg" alt="load-wait" className="last-image" />
              <img src="/images/product/home/home 2.jpeg" alt="load-wait" className="last-image" />
              <img src="/images/product/home/home 3.jpeg" alt="load-wait" className="last-image" />
              <img src="/images/product/home/home 4.jpeg" alt="load-wait" className="last-image" />
              <img src="/images/product/home/home 5.jpeg" alt="load-wait" className="last-image" />
              <img src="/images/product/home/home 6.jpeg" alt="load-wait" className="last-image" />
              <img src="/images/product/home/home 7.jpeg" alt="load-wait" className="last-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Inline script for hero slideshow */}
      <Script id="hero-slideshow" strategy="lazyOnload">
        {`
          const slides = document.querySelectorAll('.hero-slide');
          let current = 0;

          setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
          }, 6000);
        `}
      </Script>

      {/* Page-specific JavaScript */}
      <Script src="/js/home.js" strategy="lazyOnload" />
    </>
  );
}
