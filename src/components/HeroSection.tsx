'use client';

import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center px-8 md:px-16 overflow-hidden">
            {/* Background Video */}
            <video
                src="/videos/backgrounds.webm"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Typography Content (Left-aligned, vertically centered) */}
            <div className="relative z-20 max-w-3xl mt-12">
                {/* Eyebrow */}
                <p className="text-white text-sm tracking-[0.2em] font-bold uppercase mb-4 drop-shadow-lg">
                    Your Trusted Production Partner
                </p>

                {/* Main Title */}
                <h1 className="text-white text-5xl md:text-7xl font-medium leading-tight mb-6 drop-shadow-xl">
                    Elevating Global Narratives<br />
                    in Morocco.
                </h1>

                {/* Description */}
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl drop-shadow-md">
                    Providing flawless logistical architecture, exclusive location access, and international-standard crew support for studios and agencies worldwide.
                </p>

                {/* CTA Button */}
                <button className="border border-white text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4 w-max">
                    Discuss Your Project <span>→</span>
                </button>
            </div>
        </section>
    );
}
