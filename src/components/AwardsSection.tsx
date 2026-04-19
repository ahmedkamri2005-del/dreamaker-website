'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AwardsSection() {
    return (
        <section className="bg-white pt-24 pb-10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text & Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px 0px 100px 0px", amount: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col text-left items-start"
                >
                    <span className="text-gray-500 uppercase tracking-[0.3em] text-[10px] md:text-sm font-semibold">
                        PROVEN EXCELLENCE
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 text-left mb-10 leading-tight tracking-tight">
                        Award-Winning <br />
                        Production Support <br />
                        Since 1999.
                    </h2>

                    <div className="flex flex-wrap gap-10 md:gap-16">
                        {/* Stat 1 */}
                        <div className="flex flex-col gap-1.5">
                            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter">
                                25+
                            </span>
                            <span className="text-[10px] md:text-sm text-gray-500 uppercase tracking-widest font-semibold">
                                Years
                            </span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col gap-1.5">
                            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter">
                                500+
                            </span>
                            <span className="text-[10px] md:text-sm text-gray-500 uppercase tracking-widest font-semibold">
                                Projects
                            </span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col gap-1.5">
                            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter">
                                1
                            </span>
                            <span className="text-[10px] md:text-sm text-gray-500 uppercase tracking-widest font-semibold">
                                Emmy® Award
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Emmy Trophy Placeholder & Glow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px 0px 100px 0px", amount: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative flex justify-center items-center group"
                >
                    {/* Golden Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4A90E2]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#4A90E2]/25 group-hover:w-96 group-hover:h-96"></div>

                    {/* Trophy Image */}
                    <motion.img
                        src="/emmy-trophy.png"
                        alt="Emmy Award Trophy"
                        className="relative z-10 w-full max-w-sm mx-auto h-auto object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)] cursor-pointer"
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{
                            scale: 1.08,
                            rotate: 2,
                            transition: { duration: 0.4, ease: "easeOut" }
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
