'use client';

import React from 'react';
import Link from 'next/link';
import { locationsData } from '@/lib/locationsData';
import LocationRow from '@/components/LocationRow';

export default function LocationsPage() {
    return (
        <main className="min-h-screen bg-[#1a1a1a] font-sans overflow-x-hidden">
            {/* Minimal Header with Back Link */}
            <div className="w-full max-w-7xl mx-auto px-6 pt-12 pb-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#00B4D8] hover:text-white transition-colors duration-300 uppercase"
                >
                    <span className="text-lg leading-none transform -translate-y-[1px]">←</span> BACK TO HOME
                </Link>
            </div>

            {/* True North Grid Architecture */}
            <div className="flex flex-col w-full">
                {locationsData.map((loc, index) => (
                    <LocationRow
                        key={loc.slug}
                        location={loc}
                        index={index}
                    />
                ))}
            </div>
        </main>
    );
}
