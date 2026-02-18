export interface CityData {
    slug: string;
    name: string;
    state: string;
}

export const cities: CityData[] = [
    { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra' },
    { slug: 'pune', name: 'Pune', state: 'Maharashtra' },
    { slug: 'delhi', name: 'Delhi', state: 'Delhi' },
    { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat' },
    { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka' },
    { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana' },
    { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu' },
    { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal' },
    { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan' },
];

// Default city for homepage
export const defaultCity: CityData = {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
};

// Helper to find a city by slug
export function getCityBySlug(slug: string): CityData | undefined {
    return cities.find((city) => city.slug === slug);
}

// Get all city slugs (for generateStaticParams)
export function getAllCitySlugs(): string[] {
    return cities.map((city) => city.slug);
}
