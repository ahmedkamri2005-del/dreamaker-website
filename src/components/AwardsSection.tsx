'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

export default function AwardsSection() {
    return (
        <section className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden py-0">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* ── LEFT: TROPHY SHOWCASE ── */}
                <div className="relative flex items-center justify-center order-2 md:order-1">
                    {/* Soft Warm Shadow/Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_60%)] -z-10 blur-3xl scale-150"></div>

                    {/* Floating Container */}
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-[350px] h-[500px] md:w-[500px] md:h-[700px]"
                    >
                        <Image
                            src="/emmy-trophy.png"
                            alt="Emmy Award Trophy"
                            fill
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                            priority
                        />
                    </motion.div>
                </div>

                {/* ── RIGHT: GRAND TYPOGRAPHY ── */}
                <div className="flex flex-col items-start order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-2">
                            Emmy®<br />
                            Award<br />
                            Winning
                        </h2>

                        {/* Black Accent Line */}
                        <div className="w-20 h-1.5 bg-black mt-10 mb-8"></div>

                        <p className="text-gray-600 text-lg md:text-xl max-w-lg font-light leading-relaxed">
                            A testament to Dreamaker&apos;s unwavering commitment to world-class
                            production excellence. We don&apos;t just create content; we craft
                            award-winning cinematic legacies that resonate globally.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
