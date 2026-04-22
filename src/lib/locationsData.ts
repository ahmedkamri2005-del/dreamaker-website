export const locationsData = [
    {
        name: 'Marrakech',
        slug: 'marrakech',
        category: 'Imperial City',
        description: 'Sprawling palaces, chaotic medinas, and luxury infrastructure.',
        images: ['/locali/marrakech3.webp', '/locali/marrakeche1.jpg', '/locali/marrakeche2.webp'],
        details: { vibe: 'Imperial Elegance', terrain: 'Medina, Palaces, Gardens', features: 'Djemaa el-Fnaa, Souks, Koutoubia', history: 'The Man Who Knew Too Much, Mission: Impossible – Rogue Nation' }
    },
    {
        name: 'Casablanca',
        slug: 'casablanca',
        category: 'Metropolitan Hub',
        description: 'Modern skyscrapers, Art Deco architecture, and coastal filming locations.',
        images: ['/locali/casa.jpg', '/locali/casa2.jpg', '/locali/casa3.jpg'],
        details: { vibe: 'Modern, Cosmopolitan', terrain: 'Coastline, Art Deco Architecture', features: 'Hassan II Mosque, Ancient Medina', history: 'Numerous action films, commercial shoots' }
    },
    {
        name: 'Chefchaouen',
        slug: 'chefchaouen',
        category: 'The Blue Pearl',
        description: 'Vibrant blue-washed buildings nestled in the Rif Mountains.',
        images: ['/locali/Chefchaouen.jpg', '/locali/Chefchaouen2.jpg', '/locali/dreamaker-locations-3.jpg'],
        details: { vibe: 'Serene, Unique Aesthetic', terrain: 'Mountain Slopes, Medina', features: 'Blue-washed Streets, Kasbah', history: 'Fantasy films, artistic productions' }
    },
    {
        name: 'Ouarzazate',
        slug: 'ouarzazate',
        category: 'The Hollywood of Africa',
        description: 'Legendary studios and ancient Kasbahs tailored for premium cinematic scale.',
        images: ['/locali/ouarzazate-web.jpg', '/locali/ourzazat.png', '/locali/things-to-do-in-Ouarzazate.webp'],
        details: { vibe: 'Cinematic Majesty', terrain: 'Desert, Kasbahs, Studios', features: 'Ait Ben Haddou, Atlas Studios, CLA Studios', history: 'Gladiator, Game of Thrones, Kingdom of Heaven' }
    },
    {
        name: 'Merzouga (Sahara)',
        slug: 'merzouga',
        category: 'Desert Oasis',
        description: 'Golden dunes and endless horizons. Secure basecamps in the heart of the Sahara.',
        images: ['/locali/merzouga.jpg', '/locali/merzouga-maroc.jpeg', '/locali/dreamaker-locations-2.jpg'],
        details: { vibe: 'Untamed Desert', terrain: 'High Sand Dunes, Rocky desert', features: 'Camel Treks, Sahara Camp, Erg Chebbi', history: 'Lawrence of Arabia, Star Wars, The Mummy' }
    },
    {
        name: 'Fes',
        slug: 'fes',
        category: 'Cultural & Spiritual Heart',
        description: 'Authentic medinas, ancient tanneries, and deep historical texture.',
        images: ['/locali/fes.jpg', '/locali/fes3.jpg', '/locali/fes-ma-city.BcyvMvut.webp'],
        details: { vibe: 'Ancient Authenticity', terrain: 'Large Medina, narrow streets', features: 'Tanneries, Bou Inania Madrasa, Al-Attarine Madrasa', history: 'Numerous historical dramas, indie films' }
    },
    {
        name: 'Rabat',
        slug: 'rabat',
        category: 'Capital City',
        description: 'Diplomatic architecture, ancient ruins, and modern coastal sites.',
        images: ['/locali/rabat8.webp', '/locali/rabat-morocco.jpeg', '/locali/rabat2.jpg'],
        details: { vibe: 'Capital Elegance', terrain: 'Coastal, Historical sites, modern areas', features: 'Hassan Tower, Mausoleum of Mohammed V, Kasbah of the Udayas', history: 'Black Hawk Down, Mission: Impossible – Rogue Nation' }
    },
    {
        name: 'Atlas Mountains',
        slug: 'atlas',
        category: 'Mountain Highs',
        description: 'Snow-capped peaks and traditional Berber villages for dramatic scale.',
        images: ['/locali/atlas-mountains.jpg', '/locali/atlas-Mountains-in-Morocco.webp', '/locali/dreamaker-setup-8.jpg'],
        details: { vibe: 'Rustic Majesty', terrain: 'Mountain ranges, Canyons, villages', features: 'High peaks, Traditional architecture, challenging terrain', history: 'Fantasy films, nature documentaries' }
    },
    {
        name: 'Lakes',
        slug: 'lakes',
        category: 'Desert Oasis',
        description: 'Serene lakes providing lush green backdrops in a desert environment.',
        images: ['/locali/lake.png', '/locali/lakes.jpg', '/locali/lakes2.jpg'],
        details: { vibe: 'Serene Oasis', terrain: 'Lake shorelines, surrounding lush areas', features: 'Water views, specialized locations', history: 'Documentaries, specific film settings' }
    },
];

export function getLocationBySlug(slug: string) {
    return locationsData.find((l) => l.slug === slug) || null;
}
