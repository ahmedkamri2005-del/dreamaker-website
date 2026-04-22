'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LocationRowProps {
    location: {
        name: string;
        slug: string;
        category: string;
        description: string;
        images: string[];
    };
    index: number;
}

export default function LocationRow({ location, index }: LocationRowProps) {
    const { name, slug, category, description, images } = location;
    const [isHovered, setIsHovered] = useState(false);
    const [imgIndex, setImgIndex] = useState(1);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered) {
            interval = setInterval(() => {
                setImgIndex((prev) => {
                    // Cycle: 1 -> 2 -> 0 -> 1...
                    if (prev === 1) return 2;
                    if (prev === 2) return 0;
                    return 1;
                });
            }, 1500);
        } else {
            setImgIndex(1); // Default displayed image is index 1
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered]);

    const isReversed = index % 2 !== 0;

    return (
        <section
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full h-[550px] mb-8 bg-[#1a1a1a] overflow-hidden relative cursor-pointer group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Column 1: Text & Background */}
            <div className="relative w-full lg:w-1/2 h-full">
                {/* Background Image (Base Image[0]) */}
                <Image
                    src={images[0]}
                    alt={`${name} background`}
                    fill
                    className="object-cover z-0 grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 z-[1]"></div>

                {/* The Text Box: Anchored to edge, taking 85% height/width */}
                <div
                    className={`absolute top-1/2 ${isReversed ? 'right-0' : 'left-0'} -translate-y-1/2 w-[85%] h-[85%] bg-[#1c1c1c] p-12 flex flex-col justify-center z-10 transition-all duration-500 shadow-2xl ${isHovered ? (isReversed ? 'rounded-tl-[60px] rounded-bl-[60px]' : 'rounded-tr-[60px] rounded-br-[60px]') : 'rounded-none'
                        }`}
                >
                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-6 block">
                        {category}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
                        {name}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-8 leading-relaxed font-medium line-clamp-3">
                        {description}
                    </p>
                    <Link
                        href="#"
                        className="group/link inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] text-white hover:text-gray-300 transition-colors duration-300 uppercase"
                    >
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            <span className="absolute w-[2px] h-full bg-white group-hover/link:bg-gray-300 transition-colors duration-300"></span>
                            <span className="absolute h-[2px] w-full bg-white group-hover/link:bg-gray-300 transition-colors duration-300"></span>
                        </div>
                        <span className="group-hover/link:translate-x-2 transition-transform duration-300">Explore</span>
                    </Link>
                </div>
            </div>

            {/* Column 2: The Sliding Gallery */}
            <div className="relative w-full lg:w-1/2 h-full overflow-hidden">
                <Image
                    src={images[imgIndex]}
                    alt={`${name} gallery`}
                    fill
                    className="object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle internal vignette for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>
        </section>
    );
}
