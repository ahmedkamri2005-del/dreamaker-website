'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from './ui/world-map';

const productionHubs = [
    // CENTRAL MOROCCO HUB
    {
        id: "morocco-hub",
        city: "Morocco Hub",
        top: "32.2%",
        left: "48.7%",
        project: "Emmy-Award Winning Support",
        client: "Warner Bros / Netflix / BBC",
        gallery: ["/projects/ouarzazate-shoot.jpg", "/projects/marrakech-commercial.jpg", "/projects/casablanca-urban.jpg", "/projects/desert-natgeo.jpg"],
        hasGallery: true,
        isHub: true
    },

    // GLOBAL PARTNER OFFICES
    { id: 1, city: "Los Angeles", top: "37.5%", left: "18.5%", hasGallery: false, isHub: false },
    { id: 2, city: "New York", top: "32%", left: "26%", hasGallery: false, isHub: false },
    { id: 3, city: "London", top: "18.5%", left: "47.8%", hasGallery: false, isHub: false },
    { id: 4, city: "Paris", top: "21.6%", left: "50.7%", hasGallery: false, isHub: false },
    { id: 5, city: "Moscow", top: "18.1%", left: "54.7%", hasGallery: false, isHub: false },
    { id: 6, city: "Beijing", top: "29.2%", left: "77.5%", hasGallery: false, isHub: false },
    { id: 7, city: "Tokyo", top: "30.7%", left: "86.7%", hasGallery: false, isHub: false },
    { id: 8, city: "Dubai", top: "39.3%", left: "64.8%", hasGallery: false, isHub: false },
    { id: 9, city: "Sao Paulo", top: "70%", left: "37%", hasGallery: false, isHub: false },
    { id: 10, city: "Sydney", top: "79.4%", left: "91%", hasGallery: false, isHub: false },
    { id: 11, city: "Cape Town", top: "84%", left: "57.5%", hasGallery: false, isHub: false },
];

export default function LocationsSection() {
    const [activeLocation, setActiveLocation] = useState<string | number | null>(null);

    return (
        <section id="locations" className="bg-white relative w-full pt-12 pb-8 overflow-hidden scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px 0px 100px 0px", amount: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto px-6 relative z-10"
            >
                {/* Fixed Header */}
                <div className="text-center mb-6 pb-4 md:pb-8 relative z-20">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 0.5, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-600 text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4"
                    >
                        GLOBAL REACH, LOCAL EXPERTISE
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight"
                    >
                        Our Production Network
                    </motion.h2>
                </div>

                {/* World Map Container - Locked Aspect Ratio */}
                <div className="relative w-full aspect-[2/1] lg:aspect-[21/9] max-w-6xl mx-auto overflow-visible transition-all duration-500">
                    <WorldMap
                        hubs={productionHubs}
                        activeId={activeLocation}
                        onHover={(id) => setActiveLocation(id)}
                    />
                </div>
            </motion.div>

        </section>
    );
}
