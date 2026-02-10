import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: "Premium Indian Ethnic Wear | 42 Years of Crafting Elegance",
  description: "Discover premium sarees, kurtis, lehengas and ethnic wear crafted with 42 years of heritage and elegance.",
  openGraph: {
    title: "Premium Indian Ethnic Wear",
    description: "Premium sarees, kurtis & ethnic wear",
    url: "https://parnikaindia.com",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
