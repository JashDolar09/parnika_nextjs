import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Premium Indian Ethnic Wear | 42 Years of Crafting Elegance",
  description: "For four decades we've been manufacturing premium ethnic wear that blends tradition with today's style. From finely crafted sarees to stylish kurtis, suits, and gowns.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32' },
      { url: '/favicon.png', sizes: '192x192' },
    ],
    apple: '/favicon.png',
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
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
                animated.forEach(el => {
                  el.classList.add('visible');
                  el.style.opacity = '1';
                  el.style.transform = 'none';
                });
              }, 500);
            })();
          `}
        </Script>
        {/* Scroll Progress Bar */}
        <div className="scroll-progress"></div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />


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
