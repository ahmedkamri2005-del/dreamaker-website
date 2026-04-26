'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const servicesList = [
    {
        title: 'Pre-Production',
        desc: 'Line producing, budgeting, permits, and tax rebate facilitation.',
        img: '/images/dreamaker-planning-3.jpg',
        link: '/services/pre-production'
    },
    {
        title: 'Production',
        desc: 'Equipment, studios, built sets, and highly experienced crews.',
        img: '/images/dreamaker-setup-6.jpg',
        link: '/services/production'
    },
    {
        title: 'Support & Logistics',
        desc: 'Transport, security, drone coordination, and action support.',
        img: '/locali/merzouga.jpg',
        link: '/services/support'
    }
];

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0);

    return (
        <section id="services" className="py-32 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center min-h-[80vh]">

                {/* Left Column: The Interactive List */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold text-gray-400 mb-12">
                        What We Offer
                    </h2>

                    <div className="flex flex-col">
                        {servicesList.map((service, index) => (
                            <div
                                key={service.title}
                                onMouseEnter={() => setActiveService(index)}
                                className="border-b border-gray-100 py-10 cursor-pointer group last:border-0"
                            >
                                <h3 className={`text-4xl lg:text-6xl font-light tracking-tight transition-colors duration-500 ${activeService === index ? 'text-black' : 'text-gray-300 group-hover:text-gray-400'}`}>
                                    {service.title}
                                </h3>

                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeService === index ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-lg text-gray-500 font-light max-w-md leading-relaxed">
                                        {service.desc}
                                    </p>

                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 mt-6 text-black uppercase tracking-widest text-xs font-semibold group/link"
                                    >
                                        Explore
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: The Sticky Image Display */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative overflow-hidden rounded-sm shadow-2xl bg-gray-50">
                    {servicesList.map((service, index) => (
                        <div
                            key={`img-${service.title}`}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <Image
                                src={service.img}
                                fill
                                className="object-cover"
                                alt={service.title}
                                priority={index === 0}
                            />
                            {/* Subtle Overlay to ensure consistent editorial look */}
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
