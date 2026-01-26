import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Premium Indian Ethnic Wear | 42 Years of Crafting Elegance",
  description: "For four decades we've been manufacturing premium ethnic wear that blends tradition with today's style. From finely crafted sarees to stylish kurtis, suits, and gowns.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet" />
        <link rel="stylesheet" href="/css/navabar.css" />
        <link rel="stylesheet" href="/css/footer.css" />
      </head>
      <body suppressHydrationWarning>
        <Script id="failsafe-reveal" strategy="afterInteractive">
          {`
            (function() {
              // Add page-loaded class to body immediately to trigger animations
              document.body.classList.add('page-loaded');
              
              setTimeout(function() {
                document.documentElement.style.opacity = '1';
                document.body.style.opacity = '1';
                // Trigger visibility for all animated elements that might be stuck
                const animated = document.querySelectorAll('.fade-in-up, .fade-up, .category-card, .feature-item, .testimonial-card, .section-title, .cta-title, .cta-text, .cta-buttons');
                animated.forEach(el => el.classList.add('visible'));
              }, 100);
            })();
          `}
        </Script>
        {/* Scroll Progress Bar */}
        <div className="scroll-progress"></div>

        {/* Navigation */}
        <nav id="navbar">
          <div className="nav-container">
            <div className="logo-container">
              <a href="/">
                <img src="/images/company_logo.jpg" alt="Logo" className="logo-img" />
              </a>
            </div>
            <ul className="nav-menu" id="navMenu">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/collection">Collection</a></li>
              <li className="dropdown">
                <a href="#" className="explore-link">Explore <i className="fas fa-chevron-down mobile-dropdown-icon"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="/our-factory">Our Factory</a></li>
                  <li><a href="/media">Media</a></li>
                  <li><a href="/parnika-franchises">Parnika Franchises</a></li>
                </ul>
              </li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-logo">
                  <img src="/images/company_logo.jpg" alt="Logo" className="logo-img-footer drop-shadow" />
                </div>
                <p>42 Years of crafting elegance in Indian ethnic wear. Premium quality, trusted by customers nationwide.</p>
              </div>
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/collection">Collection</a></li>
                  <li><a href="/testimonials">Testimonials</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Categories</h3>
                <ul>
                  <li><a href="/collection">Sarees</a></li>
                  <li><a href="/collection">Suits</a></li>
                  <li><a href="/collection">Kurtis</a></li>
                  <li><a href="/collection">Gowns</a></li>
                  <li><a href="/collection">Bridal Collection</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="https://www.youtube.com/@ParnikaIndia" className="social-icon yt-icon" aria-label="YouTube" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/parnikaindia/" className="social-icon ig-icon" aria-label="Instagram" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://wa.me/917590048900" className="social-icon wt-icon" aria-label="WhatsApp" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.facebook.com/parnikaindia" className="social-icon fb-icon" aria-label="Facebook" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://in.linkedin.com/company/parnika-india" className="social-icon li-icon" aria-label="LinkedIn" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <p className="footer-info">Delhi Gate, PARVATI FABRIC LIMITED - PARNIKA INDIA F-Tower, Shree Kuberji Textile Market B/h Belgium Tower, Surat, Gujarat 395001</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Parnika. All rights reserved. | 42 Years of Excellence in Ethnic Wear</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/917590048900" className="floating-whatsapp pulse" target="_blank" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>

        {/* Common JavaScript */}
        <Script src="/js/common.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
