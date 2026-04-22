import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="min-h-screen relative flex flex-col justify-end pb-24 px-8 lg:px-20 bg-black overflow-hidden">
            {/* Cinematic Background Video */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="/videos/video1.webm"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Smooth Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            </div>

            {/* Premium Typography Content */}
            <div className="relative z-20 text-white">
                {/* Kicker */}
                <p className="uppercase tracking-[0.3em] text-xs lg:text-sm text-gray-300 mb-4 animate-fade-in">
                    Your Trusted Production Partner
                </p>

                {/* Main Headline */}
                <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight max-w-4xl tracking-tight">
                    Elevating Global Narratives <br className="hidden md:block" /> in Morocco.
                </h1>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed">
                    Providing flawless logistical architecture, exclusive location access, and international-standard crew support for studios and agencies worldwide.
                </p>

                {/* High-End CTA */}
                <Link
                    href="#"
                    className="inline-flex items-center gap-4 px-8 py-4 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm backdrop-blur-sm group"
                >
                    Discuss Your Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </section>
    );
}
