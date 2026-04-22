"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function PreProductionPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pt-0">
            {/* Split Screen Hero Section */}
            <section className="flex flex-col lg:flex-row w-[100vw] relative left-1/2 -translate-x-1/2 min-h-screen">
                {/* ── LEFT COLUMN: Dark Teal — Text ── */}
                <div className="w-full lg:w-1/2 bg-[#214151] flex flex-col justify-center self-stretch min-h-screen px-12 lg:px-24 pt-32 pb-16">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-bold tracking-widest text-white hover:text-[#52B4E5] transition-colors duration-300 uppercase mb-8 w-fit"
                    >
                        ← BACK TO HOME
                    </Link>

                    <p className="text-[#52B4E5] font-bold tracking-[0.3em] uppercase mb-4">
                        THE BLUEPRINT OF VISION.
                    </p>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8 text-white drop-shadow-xl uppercase">
                        PRE-PRODUCTION
                    </h1>
                </div>

                {/* ── RIGHT COLUMN: White — Image ── */}
                <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 pt-32 lg:pt-32">
                    <div className="relative w-full max-w-[600px] max-h-[400px] lg:max-h-[500px] aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/local.png"
                            alt="Pre-Production Concept"
                            fill
                            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            <div className="py-16" />

            {/* Moodboard 1: The Vision */}
            <div className="grid grid-cols-4 grid-rows-3 h-[400px] max-w-6xl mx-auto mb-12 gap-0 rounded-sm rounded-tr-none rounded-bl-none overflow-hidden shadow-2xl group">
                <div className="col-span-2 row-span-2 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-1.jpg" alt="Planning 1" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-2.jpg" alt="Planning 2" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-3.jpg" alt="Planning 3" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-4.jpg" alt="Planning 4" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-5.jpg" alt="Planning 5" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-2 row-span-1 relative w-full h-full">
                    <Image src="/images/ourzazat.png" alt="Ouarzazate Location" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-7.jpg" alt="Planning 7" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-planning-8.jpg" alt="Planning 8" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                <h3 className="text-[#52B4E5] uppercase font-bold tracking-widest mb-4 text-sm">THE VISION</h3>
                <h2 className="text-3xl md:text-4xl text-slate-800 font-bold mb-6">PRODUCTION REALITY</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-sans">
                    From Hollywood blockbusters to global commercials, we handle the complex logistics so you can focus on the cinematic art.
                </p>
            </div>

            {/* Moodboard 2: The Setup */}
            <div className="grid grid-cols-4 grid-rows-3 h-[400px] max-w-6xl mx-auto mb-12 gap-0 grid-flow-dense rounded-sm overflow-hidden shadow-2xl group">
                <div className="col-span-2 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-setup-1.jpg" alt="Setup 1" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-2 relative w-full h-full">
                    <Image src="/images/dreamaker-setup-2.jpg" alt="Setup 2" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-setup-3.jpg" alt="Setup 3" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-director-view.jpg" alt="Setup 4" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-2 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-setup-5.jpg" alt="Setup 5" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-2 relative w-full h-full">
                    <Image src="/images/dreamaker-setup-6.jpg" alt="Setup 6" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/lake.png" alt="Lake Location" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-setup-8.jpg" alt="Setup 8" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                <h3 className="text-[#52B4E5] uppercase font-bold tracking-widest mb-4 text-sm">THE SETUP</h3>
                <h2 className="text-3xl md:text-4xl text-slate-800 font-bold mb-6">INTERNATIONAL STANDARDS</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-sans">
                    Global technical specs met with deep local expertise and multilingual production crews.
                </p>
            </div>

            {/* Moodboard 3: The Locations */}
            <div className="grid grid-cols-4 grid-rows-3 h-[400px] max-w-6xl mx-auto mb-12 gap-0 grid-flow-dense rounded-sm overflow-hidden shadow-2xl group">
                <div className="col-span-3 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-action-logistics.jpg" alt="Locations 1" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-2 relative w-full h-full">
                    <Image src="/images/dreamaker-locations-2.jpg" alt="Locations 2" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-2 row-span-1 relative w-full h-full">
                    <Image src="/images/roads.png" alt="Logistics Roads" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-locations-4.jpg" alt="Locations 4" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/ourzazat.png" alt="Ouarzazate Location" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-locations-6.jpg" alt="Locations 6" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-locations-7.jpg" alt="Locations 7" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
                <div className="col-span-1 row-span-1 relative w-full h-full">
                    <Image src="/images/dreamaker-locations-8.jpg" alt="Locations 8" fill className="object-cover w-full h-full relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.4] hover:!brightness-100 hover:scale-[1.03] hover:z-10" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                <h3 className="text-[#52B4E5] uppercase font-bold tracking-widest mb-4 text-sm">THE LOCATIONS</h3>
                <h2 className="text-3xl md:text-4xl text-slate-800 font-bold mb-6">CINEMATIC DIVERSITY</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-sans">
                    From vast desert dunes and ancient kasbahs to urban textures and coastal landscapes, Morocco provides an incredible range of visual environments.
                </p>
            </div>

            {/* Final CTA */}
            <div className="flex justify-center pb-24">
                <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-white text-[#52B4E5] border-2 border-[#52B4E5] font-extrabold uppercase tracking-widest text-sm rounded-sm transition-all duration-300 hover:bg-[#52B4E5] hover:text-white shadow-lg"
                >
                    LET&apos;S TALK
                </Link>
            </div>
        </main>
    );
}
