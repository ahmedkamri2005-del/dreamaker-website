import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWorkBySlug } from '@/lib/worksData';

export default async function WorkShowcasePage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
    // Next.js explicitly requires unwrapping params promises
    const resolvedParams = await params;
    const work = getWorkBySlug(resolvedParams.slug);

    if (!work) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black font-sans selection:bg-[#00B4D8] selection:text-white">

            {/* Full Screen Cinematic Hero (100vh) */}
            <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between p-8 md:p-16">

                {/* Background Media Setup */}
                {(work as any).video ? (
                    <video
                        src={(work as any).video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                ) : (
                    <Image
                        src={work.hoverImage || work.image}
                        alt={work.title}
                        fill
                        priority
                        className="object-cover absolute inset-0 z-0"
                    />
                )}

                {/* 50% Dark Tint Overlay designed for white text readability */}
                <div className="absolute inset-0 bg-black/50 z-0" />

                {/* Top Nav (Glassmorphism effect) */}
                <div className="relative z-10 top-4">
                    <Link
                        href="/works"
                        className="inline-flex items-center gap-4 text-xs font-black tracking-[0.2em] uppercase text-white hover:text-white backdrop-blur-md bg-black/40 px-6 py-3 rounded-full border border-white/20 transition-all duration-300 hover:bg-[#00B4D8]/80 hover:border-transparent shadow-2xl"
                    >
                        <span className="text-lg leading-none transform -translate-y-[2px]">←</span>
                        BACK TO WORKS
                    </Link>
                </div>

                {/* Hero Bottom Content */}
                <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-end gap-6 mt-auto pb-6">
                    <span className="inline-block px-5 py-2 border border-white/30 text-white rounded-[20px] font-black uppercase text-xs tracking-widest backdrop-blur-md bg-white/10 shadow-lg">
                        {work.category}
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter uppercase text-white leading-[0.8] drop-shadow-2xl text-right max-w-5xl">
                        {work.title}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-lg text-right max-w-3xl mt-4">
                        {work.description}
                    </p>
                </div>

            </div>

            {/* Pitch Black Technical Table */}
            <div className="bg-black text-white min-h-[50vh] py-24 md:py-32">
                <div className="max-w-5xl mx-auto px-6 md:px-12">

                    <h3 className="text-[#00B4D8] font-black tracking-widest uppercase text-2xl md:text-3xl mb-16">
                        Production Specifications
                    </h3>

                    <div className="flex flex-col border-t border-gray-800">

                        {/* Row 1: Director */}
                        {work.director && (
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-6 rounded-xl">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base">Director</span>
                                <span className="text-2xl md:text-4xl font-black uppercase text-white">{work.director}</span>
                            </div>
                        )}

                        {/* Row 2: Release Year */}
                        {work.year && (
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-6 rounded-xl">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base">Release Year</span>
                                <span className="text-2xl md:text-4xl font-black uppercase text-white">{work.year}</span>
                            </div>
                        )}

                        {/* Row 3: Duration */}
                        {work.duration && (
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-6 rounded-xl">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base">Duration</span>
                                <span className="text-2xl md:text-4xl font-black uppercase text-white">{work.duration}</span>
                            </div>
                        )}

                        {/* Row 4: Main Category */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-6 rounded-xl">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base">Main Category</span>
                            <span className="text-2xl md:text-4xl font-black uppercase text-white">{work.category}</span>
                        </div>

                        {/* Row 5: Dreamaker's Role */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-6 rounded-xl">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base">Dreamaker's Role</span>
                            <span className="text-2xl md:text-4xl font-black uppercase text-[#00B4D8] drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">{work.role}</span>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    );
}
