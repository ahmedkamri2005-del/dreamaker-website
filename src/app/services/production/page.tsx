"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function ProductionPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pt-0">
            {/* The "Director's View" Hero Section - Split Screen */}
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
                        WHERE VISION MEETS REALITY.
                    </p>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8 text-white drop-shadow-xl uppercase">
                        PRODUCTION
                    </h1>
                </div>

                {/* ── RIGHT COLUMN: White — Image ── */}
                <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 pt-32 lg:pt-32">
                    <div className="relative w-full max-w-[600px] max-h-[400px] lg:max-h-[500px] aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/dreamaker-director-view.jpg"
                            alt="Director View"
                            fill
                            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <div className="py-16 text-center w-full">
                <h2 className="text-4xl font-bold tracking-widest text-black">WORLD-CLASS ARSENAL</h2>
            </div>

            {/* WORLD-CLASS ARSENAL — Page 7 Split-Screen Layout */}
            <section className="flex flex-col lg:flex-row w-[100vw] relative left-1/2 -translate-x-1/2">
                {/* ── LEFT COLUMN: White — Techno Cranes ── */}
                <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center py-8 lg:py-12 px-8">
                    {/* Leaf-shaped bordered frame */}
                    <div className="w-full max-w-[350px] lg:max-w-[380px] aspect-square border-[6px] border-[#214151] rounded-sm flex items-center justify-center p-4 bg-white overflow-hidden">
                        <Image
                            src="/material/img104.jpg"
                            alt="Techno Cranes"
                            width={340}
                            height={340}
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                    <h3 className="mt-4 text-[#214151] font-bold uppercase tracking-widest text-xl text-right w-full max-w-[350px] lg:max-w-[380px]">
                        TECHNO CRANES
                    </h3>
                </div>

                {/* ── RIGHT COLUMN: Dark Teal — 2×2 Grid ── */}
                <div className="w-full lg:w-1/2 bg-[#214151] flex flex-col justify-center items-center py-8 lg:py-12 px-8 lg:px-16">
                    {/* Intro text */}
                    <p className="text-white font-bold text-lg mb-6 max-w-md leading-relaxed text-center lg:text-left">
                        Equipment solutions in Morocco, with camera, grip and lighting support tailored to each production.
                    </p>

                    {/* 2×2 leaf grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-md w-full">

                        {/* Item 1 — Camera Packages */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-white rounded-sm flex items-center justify-center p-2 overflow-hidden">
                                <Image
                                    src="/material/dreamaker-camera-packages.jpg"
                                    alt="Camera Packages"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                            <h4 className="mt-2 text-white font-bold tracking-widest uppercase text-sm text-center">
                                CAMERA PACKAGES
                            </h4>
                        </div>

                        {/* Item 2 — Lenses */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-white rounded-sm flex items-center justify-center p-2 overflow-hidden">
                                <Image
                                    src="/material/dreamaker-lenses.jpg"
                                    alt="Lenses"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                            <h4 className="mt-2 text-white font-bold tracking-widest uppercase text-sm text-center">
                                LENSES
                            </h4>
                        </div>

                        {/* Item 3 — Dollies */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-white rounded-sm flex items-center justify-center p-2 overflow-hidden">
                                <Image
                                    src="/material/dreamaker-dollies.jpg"
                                    alt="Dollies"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                            <h4 className="mt-2 text-white font-bold tracking-widest uppercase text-sm text-center">
                                DOLLIES
                            </h4>
                        </div>

                        {/* Item 4 — Lighting */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-white rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none flex items-center justify-center p-2 overflow-hidden">
                                <Image
                                    src="/material/dreamaker-lighting.jpg"
                                    alt="Lighting"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="mt-2 text-white font-bold tracking-widest uppercase text-sm text-center">
                                LIGHTING
                            </h4>
                        </div>

                    </div>
                </div>
            </section>

            {/* Action Logistics & Builds Section */}
            <div className="py-16 max-w-7xl mx-auto px-4 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-widest text-black">ACTION LOGISTICS & STUDIOS</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        Executing complex, high-octane sequences and massive set builds safely across diverse physical environments.
                    </p>
                </div>

                <div className="relative w-full h-[500px] rounded-sm overflow-hidden group border border-gray-800 shadow-2xl">
                    <Image
                        src="/images/dreamaker-action-logistics.jpg"
                        alt="Action Logistics"
                        fill
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700" />

                    <div className="absolute bottom-16 left-8 md:left-16 z-20">
                        <p className="text-[#52B4E5] font-bold tracking-[0.2em] uppercase mb-2">Uncompromising Scale</p>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white">Massive Builds</h3>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="flex justify-center pb-24">
                <Link
                    href="/contact"
                    className="inline-block px-10 py-4 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] font-extrabold uppercase tracking-widest text-sm rounded-sm transition-all duration-300 hover:bg-[#52B4E5] hover:text-white shadow-[0_0_20px_rgba(82,180,229,0.1)] hover:shadow-[0_0_40px_rgba(82,180,229,0.3)]"
                >
                    INITIALIZE PRODUCTION
                </Link>
            </div>
        </main>
    );
}
