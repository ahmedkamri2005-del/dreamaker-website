'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const globalHubs = [
    { name: 'Los Angeles', img: '/locali/lose.angels.jpg' },
    { name: 'London', img: '/locali/london.jpeg' },
    { name: 'Paris', img: '/locali/paris.jpg' },
    { name: 'Dubai', img: '/locali/dubai.jpg' },
    { name: 'Cape Town', img: '/locali/cape%20town.jpeg' },
];

export default function LocationsSection() {
    const [hoveredCity, setHoveredCity] = useState<number | null>(null);

    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black overflow-hidden py-16">

            {/* Background Image Layer — crossfades per hovered city */}
            {globalHubs.map((hub, index) => (
                <div key={hub.name} className="absolute inset-0">
                    <Image
                        src={hub.img}
                        alt={hub.name}
                        fill
                        sizes="100vw"
                        className={`object-cover transition-all duration-1000 ease-in-out ${hoveredCity === index
                            ? 'opacity-40 scale-105'
                            : 'opacity-0 scale-100'
                            }`}
                    />
                </div>
            ))}

            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none z-[1]" />

            {/* Foreground typographic roster */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Section label */}
                <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-400 mb-16 text-center"
                >
                    Global Reach, Local Expertise
                </motion.h3>

                {/* City typographic list */}
                <div className="flex flex-col items-center w-full">
                    {globalHubs.map((hub, index) => (
                        <motion.div
                            key={hub.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            onMouseEnter={() => setHoveredCity(index)}
                            onMouseLeave={() => setHoveredCity(null)}
                            className="cursor-pointer py-2 lg:py-4 w-full text-center group"
                        >
                            <h2
                                className={`text-4xl lg:text-5xl font-light uppercase tracking-tight transition-colors duration-500 select-none ${hoveredCity === index
                                    ? 'text-white'
                                    : hoveredCity === null
                                        ? 'text-gray-500'
                                        : 'text-gray-800'
                                    }`}
                            >
                                {hub.name}
                            </h2>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom descriptor */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-[11px] uppercase tracking-[0.4em] text-gray-600 text-center"
                >
                    Morocco · Est. 2010 · 50+ Active Partnerships
                </motion.p>
            </div>
        </section>
    );
}
