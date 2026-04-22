'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

export default function AwardsSection() {
    return (
        <section className="w-full py-20 bg-[#fafafa] lg:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Refined Typography & Stats */}
                <div className="flex flex-col text-left items-start z-10 w-full">
                    {/* Kicker */}
                    <h3 className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold text-gray-400 mb-6 transition-all duration-700">
                        Proven Excellence
                    </h3>

                    {/* Main Headline */}
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-xl mb-12">
                        Award-Winning Production Support Since 1999.
                    </h2>

                    {/* Stats Grid */}
                    <div className="flex gap-12 lg:gap-20">
                        {/* Stat 1 */}
                        <div className="flex flex-col">
                            <p className="text-5xl lg:text-6xl font-light text-black mb-2">25+</p>
                            <p className="uppercase tracking-widest text-[10px] lg:text-xs text-gray-500 font-medium whitespace-nowrap">Years</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col">
                            <p className="text-5xl lg:text-6xl font-light text-black mb-2">500+</p>
                            <p className="uppercase tracking-widest text-[10px] lg:text-xs text-gray-500 font-medium whitespace-nowrap">Projects</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col">
                            <p className="text-5xl lg:text-6xl font-light mb-2 text-black">1</p>
                            <p className="uppercase tracking-widest text-[10px] lg:text-xs text-gray-500 font-medium whitespace-nowrap">Emmy® Award</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Emmy Trophy Presentation */}
                <div className="relative w-[300px] h-[400px] ml-auto animate-float">
                    {/* Trophy Image - Restored with fill and object-contain */}
                    <Image
                        src="/emmy-trophy.png"
                        alt="Emmy Award"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
