'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductionHub {
    id: string | number;
    city: string;
    top: string;
    left: string;
    project?: string;
    client?: string;
    gallery?: string[];
    hasGallery: boolean;
    isHub: boolean;
}

interface WorldMapProps {
    hubs: ProductionHub[];
    activeId: string | number | null;
    onHover: (id: string | number | null) => void;
}

export function WorldMap({ hubs, activeId, onHover }: WorldMapProps) {
    // Morocco Hub is the convergence point for all global arcs
    const moroccoHub = hubs.find(h => h.id === "morocco-hub")!;

    return (
        <div className="h-full w-full relative select-none bg-transparent overflow-visible pointer-events-none">
            {/* World Map Backdrop */}
            <img
                src="/world-map.svg"
                alt="World Map"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-[0.15] brightness-0"
            />

            {/* Arcs Layer (Connecting Global Points to Morocco) */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                {hubs.filter(h => !h.isHub).map((partner, i) => {
                    // Extract numeric values from percentage strings for SVG math
                    const startX = parseFloat(partner.left);
                    const startY = parseFloat(partner.top);
                    const endX = parseFloat(moroccoHub.left);
                    const endY = parseFloat(moroccoHub.top);

                    const midX = (startX + endX) / 2;
                    const midY = Math.min(startY, endY) - (Math.abs(startX - endX) * 0.1);
                    const path = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;

                    return (
                        <motion.path
                            key={`arc-final-${partner.id}`}
                            d={path}
                            fill="none"
                            stroke="#4A90E2"
                            strokeWidth="0.15"
                            strokeOpacity="0.8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, delay: i * 0.1 }}
                        />
                    );
                })}
            </svg>

            {/* Hubs and Interactive Elements */}
            {hubs.map((hub) => {
                const isActive = activeId === hub.id;

                return (
                    <div
                        key={`hub-final-${hub.id}`}
                        className={cn(
                            "absolute pointer-events-auto",
                            isActive ? "z-[100]" : "z-20",
                            !hub.isHub && "hidden md:block" // Focus on Morocco Hub for mobile
                        )}
                        style={{ left: hub.left, top: hub.top }}
                    >
                        {/* Branded Marker (Logo) */}
                        <div
                            className="relative group p-6 -m-6 cursor-pointer"
                            onMouseEnter={() => onHover(hub.id)}
                            onMouseLeave={() => onHover(null)}
                        >
                            {/* The Logo In Marker */}
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.25 : 1,
                                    opacity: isActive ? 1 : (hub.isHub ? 1 : 0.6),
                                }}
                                className={cn(
                                    "relative z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                                    hub.isHub ? "w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "w-4 h-4 md:w-5 md:h-5"
                                )}
                            >
                                <div className="w-full h-full bg-[#4A90E2] drop-shadow-sm" style={{ WebkitMaskImage: 'url(/Untitled-1.svg)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: 'url(/Untitled-1.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
                            </motion.div>
                        </div>

                        {/* Gallery Spotlight / Project Preview Card */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
                                    animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, scale: 0.9, y: -10, x: "-50%" }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "absolute left-1/2 overflow-hidden z-[100] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl border border-[#4A90E2]/10 bg-white shadow-[0_20px_50px_rgba(74,144,226,0.15)] pointer-events-none p-4 md:p-5",
                                        hub.isHub ? "top-14 w-[280px] xs:w-[320px] md:w-[420px]" : "bottom-6 w-52 md:w-56 p-3"
                                    )}
                                >
                                    {hub.isHub ? (
                                        // Gallery Layout for Morocco Hub
                                        <>
                                            <div className="mb-5">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <span className="text-[10px] font-black text-[#4A90E2] tracking-[0.4em] uppercase italic">
                                                        Primary Production Hub
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-mono">
                                                        31.79°N / 7.09°W
                                                    </span>
                                                </div>
                                                <h3 className="text-gray-900 text-xl md:text-2xl font-bold tracking-tighter uppercase leading-none">
                                                    Versatile Film Locations
                                                </h3>
                                            </div>

                                            {/* Scrollable Gallery */}
                                            <div className="grid grid-cols-4 gap-2.5 mb-5">
                                                {hub.gallery?.map((img, idx) => (
                                                    <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-inner">
                                                        <img src={img} alt=" शूट" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-wider mb-1">Unmatched Desert & Studio Infrastructure</p>
                                                    <p className="text-gray-600 text-xs font-medium leading-relaxed">
                                                        From the Ouarzazate Atlas Studios to the golden dunes of Merzouga. Full-service Emmy-Award winning location support.
                                                    </p>
                                                </div>
                                                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                                                    <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full animate-ping" />
                                                        Active Partnerships: 50+
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        // Simple Label Hub for Global Partners
                                        <div className="text-center py-2">
                                            <p className="text-[10px] text-[#4A90E2] font-bold uppercase tracking-[0.3em] mb-1">Partner Office</p>
                                            <h4 className="text-gray-900 text-sm font-bold uppercase tracking-tight">{hub.city}</h4>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
