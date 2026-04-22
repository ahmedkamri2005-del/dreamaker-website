'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { worksData } from '@/lib/worksData';

export default function WorksZPatternPage() {
    return (
        <main className="min-h-screen bg-white font-sans overflow-x-hidden pt-32 pb-24">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#00B4D8] hover:text-[#1a1a1a] transition-colors duration-300 uppercase mb-12 mt-10"
                >
                    <span className="text-lg leading-none transform -translate-y-[1px]">←</span> BACK TO HOME
                </Link>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-gray-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs">
                            PORTFOLIO & PRODUCTIONS
                        </p>
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a] tracking-tight uppercase">
                            OUR WORKS
                        </h1>
                    </div>
                </div>
            </div>

            {/* Alternating Z-Pattern Grid Sequence (Strict 50/50 Photocopy) */}
            <div className="flex flex-col gap-24 lg:gap-32 pb-24">
                {worksData.map((work, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            key={work.id}
                            className="py-10 lg:py-20"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto px-6">

                                {/* Text Side */}
                                <div className={`flex flex-col justify-center ${isEven ? 'order-1 lg:pr-10' : 'order-1 lg:order-2 lg:pl-10'}`}>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase mb-4 tracking-tighter">
                                        {work.title}
                                    </h2>
                                    <span className="inline-block text-[#00B4D8] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">
                                        {work.category}
                                    </span>
                                    <p className="text-gray-500 leading-relaxed text-base lg:text-lg mb-8 font-medium max-w-md">
                                        {work.description}
                                    </p>
                                    <Link
                                        href={`/works/${work.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#1a1a1a] hover:text-[#00B4D8] transition-colors duration-300 uppercase w-fit"
                                    >
                                        <span className="text-lg leading-none font-medium">+</span>
                                        VIEW SHOWCASE
                                    </Link>
                                </div>

                                {/* Image Side */}
                                <div className={`w-full aspect-video relative ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                                    <div className="relative w-full h-full overflow-hidden bg-gray-100 rounded-sm">
                                        <Image
                                            src={work.hoverImage || work.image}
                                            alt={work.title}
                                            fill
                                            className="object-cover transform transition-transform duration-[20s] hover:scale-105 ease-out"
                                        />
                                    </div>
                                </div>

                            </div>
                        </section>
                    );
                })}
            </div>

        </main>
    );
}
