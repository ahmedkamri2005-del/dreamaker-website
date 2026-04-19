'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const services = [
    {
        id: 1,
        title: "Pre-Production",
        desc: "Line producing, budgeting, permits, and tax rebate facilitation.",
        mosaic: [
            "/images/dreamaker-planning-1.jpg",
            "/images/dreamaker-production-42.webp",
            "/images/untd.png",
            "/images/dreamaker-production-43.jpg",
            "/images/dreamaker-setup-7.jpg",
            "/images/dreamaker-planning-3.jpg"
        ],
        link: "/services/pre-production"
    },
    {
        id: 2,
        title: "Production",
        desc: "Equipment, studios, built sets, and experienced crews.",
        mosaic: [
            "/material/dreamaker-camera-packages.jpg",
            "/images/dreamaker-director-view.jpg",
            "/images/utd.png",
            "/images/dreamaker-planning-4.jpg",
            "/images/dreamaker-planning-7.jpg",
            "/images/dreamaker-production-44.jpg"
        ],
        link: "/services/production"
    },
    {
        id: 3,
        title: "Support & Logistics",
        desc: "Transport, security, drone coordination, and action support.",
        mosaic: [
            "/logistic/dreamaker-trebuchet.JPG",
            "/logistic/dreamaker-armored-vehicle.jpg",
            "/logistic/dreamaker-soldiers.jpg",
            "/images/dreamaker-production-45.jpg",
            "/images/dreamaker-production-46.jpg",
            "/images/dreamaker-production-47.jpg"
        ],
        link: "/services/support-logistics"
    }
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function ServicesSection() {
    return (
        <section id="services" className="bg-white w-full py-8 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* ── Header ── */}
                <div className="text-center mb-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#4A90E2] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight"
                    >
                        Our Production Services
                    </motion.h2>
                </div>

                {/* ── Links ── */}
                <div className="flex flex-col gap-2">
                    {services.map((service, index) => (
                        <Link key={service.id} href={service.link}>
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-full h-[26vh] sm:h-[22vh] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-md rounded-bl-md overflow-hidden cursor-pointer border border-white/20 group mb-0 block [transform:translateZ(0)] will-change-transform"
                            >
                                {/* Mosaic Grid Background - Now 3 images for a cleaner look */}
                                <div className="absolute inset-0 grid grid-cols-3 gap-0 w-full h-full z-0 group-hover:scale-105 transition-transform duration-1000">
                                    {service.mosaic.slice(0, 3).map((imgUrl, i) => (
                                        <div key={i} className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={imgUrl}
                                                alt={`${service.title} mosaic ${i}`}
                                                width={400}
                                                height={600}
                                                loading="lazy"
                                                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Cinematic Blue Tint Overlay */}
                                <div className="absolute inset-0 bg-[#4A90E2]/10 transition-all duration-700 ease-in-out group-hover:bg-[#4A90E2]/5 z-10"></div>

                                {/* ── Content ── */}
                                <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center h-full p-5 md:p-8 md:px-10">

                                    {/* Left Side: Title & Desc */}
                                    <div className="flex flex-col gap-1 md:gap-2 max-w-xl">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white font-mono text-xs md:text-sm tracking-[0.2em] opacity-80">0{service.id}</span>
                                            <h3 className="text-white text-2xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-white/90 font-medium text-xs md:text-base mt-1 md:mt-2 md:pl-10 drop-shadow-md">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Right Side: Interactive Button */}
                                    <div className="mt-3 md:mt-0 self-end md:self-auto">
                                        <div className="px-4 md:px-8 py-2 md:py-3 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all duration-300 ease-in-out font-extrabold hover:bg-[#52B4E5] hover:text-white uppercase tracking-widest text-[10px] md:text-sm flex items-center cursor-pointer shadow-lg whitespace-nowrap">
                                            DISCOVER MORE <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
