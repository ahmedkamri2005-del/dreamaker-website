import React from 'react';
import Link from 'next/link';
import { locationsData, getLocationBySlug } from '@/lib/locationsData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return locationsData.map((loc) => ({ slug: loc.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function LocationDetailPage({ params }: Props) {
    const { slug } = await params;
    const loc = getLocationBySlug(slug);

    if (!loc) notFound();

    return (
        <main className="relative w-full min-h-screen bg-[#0d0d0d] font-sans text-white overflow-x-hidden">

            {/* Full-Screen Hero Background */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={loc.images[0]}
                    alt={loc.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/40 to-transparent" />

                {/* Top Nav */}
                <div className="absolute top-8 left-8 md:top-12 md:left-16 z-20">
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white hover:text-[#00B4D8] transition-colors duration-300 uppercase backdrop-blur-md bg-black/30 px-6 py-3 rounded-full border border-white/10"
                    >
                        <span className="text-lg leading-none">←</span> ALL LOCATIONS
                    </Link>
                </div>

                {/* Bottom Hero Content */}
                <div className="absolute bottom-16 left-8 md:left-16 z-20 max-w-3xl">
                    <span className="inline-block px-5 py-2 border border-white/20 text-[#00B4D8] rounded-full font-bold uppercase text-xs tracking-widest mb-6 backdrop-blur-md bg-white/5">
                        {loc.category}
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] mb-6">
                        {loc.name}
                    </h1>
                    <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
                        {loc.description}
                    </p>
                </div>
            </div>

            {/* Production Details Section */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Details Table */}
                    <div>
                        <p className="text-[#00B4D8] font-bold tracking-[0.3em] uppercase text-xs mb-8">LOCATION SPECIFICATIONS</p>
                        <div className="flex flex-col divide-y divide-white/10">
                            {[
                                { label: 'Vibe', value: loc.details.vibe },
                                { label: 'Terrain', value: loc.details.terrain },
                                { label: 'Key Features', value: loc.details.features },
                                { label: 'Film History', value: loc.details.history },
                            ].map((row) => (
                                <div key={row.label} className="flex justify-between items-start py-6 gap-6">
                                    <span className="text-gray-500 uppercase text-xs font-bold tracking-widest w-32 flex-shrink-0">{row.label}</span>
                                    <span className="text-white font-medium text-right">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Photos */}
                    <div className="flex flex-col gap-6">
                        <p className="text-[#00B4D8] font-bold tracking-[0.3em] uppercase text-xs mb-2">GALLERY</p>
                        <div className="grid grid-cols-2 gap-4">
                            {loc.images.map((img, i) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={i}
                                    src={img}
                                    alt={`${loc.name} ${i + 1}`}
                                    className={`w-full object-cover rounded-sm shadow-xl ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-32 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to film in {loc.name}?</h3>
                        <p className="text-gray-400 text-lg max-w-lg">Our location team provides full logistical support, scouting, and permits across Morocco.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="flex-shrink-0 px-10 py-5 bg-[#00B4D8] text-white font-black tracking-widest text-sm uppercase rounded-tl-[20px] rounded-br-[20px] shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>

        </main>
    );
}
