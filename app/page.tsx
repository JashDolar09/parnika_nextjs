import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: "Parnika India",
  description: "Buy premium Indian sarees, designer lehengas, kurtis and ethnic wear. Parnika India offers 42 years of crafting elegance with wide range of traditional and modern designs in Surat.",
  openGraph: {
    title: "Parnika India",
    description: "Buy premium Indian sarees, designer lehengas, kurtis and ethnic wear.",
    url: "https://parnikaindia.com",
    siteName: "Parnika India",
    images: ["/og-image.jpg"],
    type: "website",
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient city="Surat" />;
}
