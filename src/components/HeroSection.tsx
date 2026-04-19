'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1], // Similar to power4.out
        },
    },
};

const delayedVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6, // Fire after H1 lines start settling
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by blocking render or just rely on motion
    // motion is usually fine with hydration if initial matches SSR HTML
    // However, since we want them hidden initially, we can just render the motion component unconditionally.

    return (
        <section className="relative w-full h-[100dvh] overflow-hidden">
            <motion.div style={{ y: backgroundY }} className="absolute inset-x-0 top-0 w-full h-[130%] z-0 pointer-events-none">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source
                        src="/videos/video1.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/40 z-[5]"></div>
            </motion.div>



            {/* Content - Bottom Split Layout */}
            <div className="absolute inset-x-0 bottom-0 z-40 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-24 pointer-events-none">
                <div
                    className="flex flex-col md:flex-row md:items-end md:justify-between opacity-100 translate-y-0"
                >
                    {/* Text Area */}
                    <div className="flex flex-col items-start text-left pointer-events-auto max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-[#E0E0E0]/70 mb-3 md:mb-4 tracking-[0.2em] text-[9px] md:text-xs font-semibold uppercase block"
                        >
                            Est. 1999
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="font-grotesque text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#FFFFFF] leading-[1.1] md:leading-[1] tracking-tight mb-6 drop-shadow-xl flex flex-col"
                        >
                            <span className="block overflow-hidden relative">
                                MOROCCO IS THE OPPORTUNITY.
                            </span>
                            <span className="block overflow-hidden relative">
                                DREAMAKER IS THE ACCESS.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                            className="text-sm md:text-lg lg:text-xl font-medium md:font-light text-white/90 max-w-xl drop-shadow-md leading-relaxed"
                        >
                            Emmy Award-winning production services since 1999.
                        </motion.p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        className="pointer-events-auto w-full md:w-auto flex justify-start mt-8 md:mt-0"
                    >
                        <a
                            href="/work"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all duration-300 ease-in-out font-extrabold hover:bg-[#52B4E5] hover:border-[#52B4E5] hover:text-white uppercase tracking-widest text-sm flex items-center gap-2 group"
                        >
                            EXPLORE OUR WORK <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
