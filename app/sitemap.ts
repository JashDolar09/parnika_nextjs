import { MetadataRoute } from 'next';
import { cities } from './data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://parnikaindia.com';

    // Core pages
    const corePages = [
        '',
        '/about',
        '/collection',
        '/our-factory',
        '/media',
        '/parnika-franchises',
        '/testimonials',
        '/contact',
        '/saree',
        '/suits',
        '/pakistani-suits',
        '/kurtis',
        '/lehenga',
        '/delivery-saree',
        '/silk-saree',
        '/festive',
        '/coat-set',
        '/kurta-set',
        '/salwar-kameez',
        '/short-kurti',
        '/top',
    ];

    const coreUrls = corePages.map((page) => ({
        url: `${baseUrl}${page}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: page === '' ? 1 : 0.8,
    }));

    // City pages
    const cityUrls = cities.map((city) => ({
        url: `${baseUrl}/${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...coreUrls, ...cityUrls];
}
