'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section id="who-we-are" className="bg-white min-h-[80vh] flex flex-col justify-center py-8 px-4 md:px-12 scroll-mt-20">
            <div className="max-w-[1400px] mx-auto w-full">

                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 uppercase tracking-widest">
                    Who We Are
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                    {/* ── Left Column: Text Card & Buttons ── */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#52B4E5] p-8 md:p-10 rounded-tl-[50px] rounded-br-[50px] rounded-tr-none rounded-bl-none shadow-lg">
                            <h3 className="text-white font-bold text-xl md:text-2xl mb-4">
                                Crafting Cinematic Excellence Since 1999.
                            </h3>
                            <div className="space-y-4">
                                <p className="text-white text-sm md:text-base leading-relaxed">
                                    For over two decades, Dreamaker Productions has been the premier cornerstone of international
                                    filmmaking in Morocco. We bridge the gap between Hollywood&apos;s rigorous standards and
                                    the raw, cinematic beauty of North Africa.
                                </p>
                                <p className="text-white text-sm md:text-base leading-relaxed">
                                    From the sweeping golden dunes of the Sahara to the intricate alleys of ancient medinas,
                                    our Emmy-award-winning team provides seamless, end-to-end production support. We don&apos;t just
                                    facilitate shoots — we turn ambitious visions into breathtaking realities.
                                </p>
                            </div>
                        </div>

                        {/* Buttons Container */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
                            <Link
                                href="/about"
                                className="px-6 py-4 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all duration-300 ease-in-out font-extrabold hover:bg-[#52B4E5] hover:text-white uppercase tracking-widest text-sm flex-1 text-center"
                            >
                                MORE ABOUT US
                            </Link>
                            <a
                                href="/dreamaker_catalogue.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all duration-300 ease-in-out font-extrabold hover:bg-[#52B4E5] hover:text-white uppercase tracking-widest text-sm flex-1 text-center w-full sm:w-auto"
                            >
                                DOWNLOAD CATALOG
                            </a>
                        </div>
                    </div>

                    {/* ── Right Column: Image Card ── */}
                    <div className="group relative w-full h-full min-h-[300px] rounded-tl-[50px] rounded-br-[50px] rounded-tr-none rounded-bl-none overflow-hidden shadow-lg bg-gray-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                        <Image
                            src="/images/dreamaker-dreamaker-productions-on-set.png"
                            alt="Dreamaker Productions on set"
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
