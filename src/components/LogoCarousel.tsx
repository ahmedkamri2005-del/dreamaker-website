'use client';

import React from 'react';
import { motion } from 'framer-motion';

const row1Logos = [
    "/clients/0.png",
    "/clients/1.png",
    "/clients/2.png",
    "/clients/3.png",
    "/clients/4.png",
    "/clients/7.png",
    "/clients/8.png",
    "/clients/9.png",
    "/clients/history_logo.png",
    "/clients/NATIONALGEOGRAPHIC.png",
    "/clients/netflix.png",
    "/clients/so-it-goes-productions-1.png"
];

const row2Logos = [
    "/clients2/Untitled (1).png",
    "/clients2/Untitled (2).png",
    "/clients2/Untitled (3).png",
    "/clients2/Untitled (4).png",
    "/clients2/Untitled (5).png",
    "/clients2/Untitled (6).png",
    "/clients2/Untitled (7).png",
    "/clients2/Untitled (8).png",
    "/clients2/Untitled (9).png",
    "/clients2/Untitled (10).png",
    "/clients2/Untitled (11).png",
    "/clients2/Untitled.png"
];

export default function LogoCarousel() {
    const getLogoClass = (path: string) => {
        const base = "h-8 md:h-16 w-auto flex-shrink-0 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300";
        if (path === "/clients/9.png") return base;
        return `${base} brightness-0`;
    };

    return (
        <section id="work" className="w-full max-w-[100vw] bg-white pt-10 pb-0 md:pt-12 md:pb-0 overflow-hidden relative scroll-mt-20">
            {/* Title */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 mb-16 flex justify-center">
                <span className="text-gray-600 uppercase tracking-[0.3em] font-medium text-[8px] md:text-xs">
                    SELECTED CREDITS & PARTNERS
                </span>
            </div>

            <div
                className="flex flex-col gap-y-12"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {/* Row 1 (Top): Moves Right to Left */}
                <div className="flex overflow-hidden w-full relative">
                    <div className="flex flex-nowrap w-max items-center gap-10 md:gap-20 pr-10 md:pr-20 animate-marquee will-change-transform">
                        {[...row1Logos, ...row1Logos].map((client, index) => (
                            <img
                                key={`row1-${index}`}
                                src={client}
                                alt="Partner"
                                className={getLogoClass(client)}
                            />
                        ))}
                    </div>
                </div>

                {/* Row 2 (Bottom): Moves Left to Right */}
                <div className="flex overflow-hidden w-full relative">
                    <div className="flex flex-nowrap w-max items-center gap-10 md:gap-20 pr-10 md:pr-20 animate-marquee-reverse will-change-transform">
                        {[...row2Logos, ...row2Logos].map((client, index) => (
                            <img
                                key={`row2-${index}`}
                                src={client}
                                alt="Partner"
                                className={getLogoClass(client)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
