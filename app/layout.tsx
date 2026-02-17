import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import './styles/navabar.css';
import './styles/footer.css';
import { GlobalAnimations } from '@/components/ClientAnimations';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://parnikaindia.com'),
  title: 'Premium Indian Ethnic Wear | 42 Years of Crafting Elegance',
  description: "For four decades we've been manufacturing premium ethnic wear that blends tradition with today's style. From finely crafted sarees to stylish kurtis, suits, and gowns.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        {/* Organization Structured Data for Google Logo Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Parnika India",
              "url": "https://parnikaindia.com",
              "logo": "https://parnikaindia.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/parnikaindia/",
                "https://wa.me/917590048900"
              ]
            })
          }}
        />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <GlobalAnimations />
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
