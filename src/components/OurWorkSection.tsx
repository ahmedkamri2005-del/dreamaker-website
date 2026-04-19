'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { id: 1, title: "Dirty Angels", desc: "Action Thriller", image: "/works/dirty-angels.png" },
    { id: 2, title: "Agent Vinod", desc: "Spy Action", image: "/works/agent-vinod.jpg" },
    { id: 3, title: "Pégase", desc: "Award-Winning Drama", image: "/works/pegase.jpg" },
    { id: 4, title: "Aazaan", desc: "International Espionage", image: "/works/Aazaan.png" },
    { id: 5, title: "The Walk", desc: "Desert Journey", image: "/works/the-walk.png" },
    { id: 6, title: "Emir", desc: "Dramatic Feature", image: "/works/Emir.jpg" },
    { id: 7, title: "Garden of Aden", desc: "Historical Epic", image: "/works/garden-of-aden.png" },
    { id: 8, title: "Midnight Fly", desc: "Suspense Thriller", image: "/works/midnight-fly.png" },
    { id: 9, title: "Okuotoko", desc: "Japanese Feature", image: "/works/okuotoko.jpg" },
    { id: 10, title: "Flirt", desc: "Romantic Comedy", image: "/works/Flirt.png" }
];

export default function OurWorkSection() {
    const [visibleCount, setVisibleCount] = useState(4);

    return (
        <section id="work" className="bg-[#1a1a1a] pt-10 pb-10 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "100px 0px 100px 0px", amount: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#4A90E2] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4"
                    >
                        CREDITS & PORTFOLIO
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "100px 0px 100px 0px", amount: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight text-white"
                    >
                        Our Work
                    </motion.h2>
                </div>

                {/* Projects Grid - High Density for Vertical Posters */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                    <AnimatePresence>
                        {projects.slice(0, visibleCount).map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index < 4 ? index * 0.1 : (index - 4) * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer border border-white/10 bg-black shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]"
                            >
                                {/* Project Image - Sharp by Default, Blur on Hover */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 blur-0 scale-100 group-hover:blur-[4px] group-hover:scale-110"
                                />

                                {/* Cinematic Overlay - Subtle Gradient Default, Darkens on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-all duration-500 group-hover:via-black/60 flex flex-col justify-end p-4 md:p-6">
                                    <div className="relative">
                                        <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-6 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#4A90E2] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase italic absolute bottom-0 left-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle Light Glint */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Explore More Button */}
                {visibleCount < projects.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setVisibleCount(projects.length)}
                            className="group relative px-10 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white"
                        >
                            <span className="relative z-10 text-white font-bold tracking-widest text-xs md:text-sm uppercase transition-colors duration-300 group-hover:text-black">
                                Explore Full Credits
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
