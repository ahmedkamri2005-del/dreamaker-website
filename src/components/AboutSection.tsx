'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="who-we-are" className="w-full py-16 bg-white text-black relative scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* ── Left Column: Typography ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h3 className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-500 mb-6">
                        Who We Are
                    </h3>

                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        The Architects of<br />Moroccan Cinema.
                    </h2>

                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                        For over two decades, Dreamaker Productions has been the premier cornerstone of international
                        filmmaking in Morocco. We bridge the gap between Hollywood&apos;s rigorous standards and
                        the raw, cinematic beauty of North Africa.
                    </p>

                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                        From the sweeping golden dunes of the Sahara to the intricate alleys of ancient medinas,
                        our Emmy-award-winning team provides seamless, end-to-end production support. We don&apos;t just
                        facilitate shoots — we turn ambitious visions into breathtaking realities.
                    </p>

                    <div className="flex flex-wrap items-center gap-8 mt-10">
                        <Link
                            href="#"
                            className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
                        >
                            More About Us
                        </Link>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 hover:border-black transition-colors"
                        >
                            Download Catalog
                        </a>
                    </div>
                </motion.div>

                {/* ── Right Column: Image ── */}
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-gray-100">
                    <Image
                        src="/images/dreamaker-dreamaker-productions-on-set.png"
                        alt="Dreamaker Productions on set"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>

            </div>
        </section>
    );
}
