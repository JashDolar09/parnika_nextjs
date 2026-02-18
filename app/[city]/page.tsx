import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient';
import { cities, getCityBySlug } from '../data/cities';

// Generate static params for all cities
export function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

// Dynamic metadata per city
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const cityData = getCityBySlug(resolvedParams.city);
    const cityName = cityData?.name || resolvedParams.city;
    const stateName = cityData?.state || 'India';

    const title = `Parnika India In a ${cityName}`;
    const description = `Buy premium Indian sarees, designer lehengas, kurtis and ethnic wear in ${cityName}, ${stateName}. Parnika India offers 42 years of crafting elegance with wide range of traditional and modern designs.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://parnikaindia.com/${resolvedParams.city}/`,
            siteName: 'Parnika India',
            images: ['/og-image.jpg'],
            type: 'website',
        },
        alternates: {
            canonical: `/${resolvedParams.city}/`,
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const cityData = getCityBySlug(resolvedParams.city);
    const cityName = cityData?.name || resolvedParams.city;

    // Organization + LocalBusiness structured data
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Parnika India',
        url: 'https://parnikaindia.com',
        logo: 'https://parnikaindia.com/logo.png',
        description: `Premium Indian ethnic wear manufacturer and seller in ${cityName}. Sarees, lehengas, kurtis, suits and more.`,
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Delhi Gate, PARVATI FABRIC LIMITED - PARNIKA INDIA F-Tower, Shree Kuberji Textile Market B/h Belgium Tower',
            addressLocality: 'Surat',
            addressRegion: 'Gujarat',
            postalCode: '395001',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-7590048900',
            contactType: 'customer service',
        },
        sameAs: [
            'https://www.instagram.com/parnikaindia/',
            'https://www.facebook.com/parnikaindia',
            'https://www.youtube.com/@ParnikaIndia',
            'https://in.linkedin.com/company/parnika-india',
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <HomeClient city={cityName} />
        </>
    );
}
