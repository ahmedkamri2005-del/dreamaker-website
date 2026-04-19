'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Film, Star } from 'lucide-react';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const projects = [
    {
        id: 1,
        title: 'Dirty Angels',
        desc: 'Action Thriller',
        image: '/works/dirty-angels.png',
        synopsis: 'A gripping action thriller following a team of soldiers on a dangerous rescue mission deep behind enemy lines.',
        role: 'Full Moroccan Production Support, Desert Logistics, and Military Vehicle Procurement.',
    },
    {
        id: 2,
        title: 'Agent Vinod',
        desc: 'Spy Action',
        image: '/works/agent-vinod.jpg',
        synopsis: 'An Indian spy action film featuring high-stakes espionage and global conspiracies.',
        role: 'Casablanca & Tangier Location Scouting, Action Unit Facilitation, and Local Casting.',
    },
    {
        id: 3,
        title: 'Pégase',
        desc: 'Award-Winning Drama',
        image: '/works/pegase.jpg',
        synopsis: 'A profound dramatic feature exploring complex human narratives and cultural intersections.',
        role: 'Co-production, Art Direction Support, and Regional Permitting.',
    },
    {
        id: 4,
        title: 'Aazaan',
        desc: 'International Espionage',
        image: '/works/Aazaan.png',
        synopsis: 'An international thriller centered around biological warfare and global terrorism.',
        role: 'High-octane stunt coordination support and Marrakech Medina location management.',
    },
    {
        id: 5,
        title: 'The Walk',
        desc: 'Desert Journey',
        image: '/works/the-walk.png',
        synopsis: 'A visually stunning narrative journey through the harsh and beautiful Sahara.',
        role: 'Sahara Basecamp Setup, Remote Catering, and Extreme Desert Transport.',
    },
    {
        id: 6,
        title: 'Emir',
        desc: 'Dramatic Feature',
        image: '/works/Emir.jpg',
        synopsis: 'A powerful historical drama set against the backdrop of political upheaval.',
        role: 'Historical Location Permits, Period Set Dressing, and Extras Casting.',
    },
    {
        id: 7,
        title: 'Garden of Aden',
        desc: 'Historical Epic',
        image: '/works/garden-of-aden.png',
        synopsis: 'An epic reimagining of historical myths, featuring massive sets and battles.',
        role: 'Large-scale Extra Casting, Period Set Construction, and VFX Plate Logistics.',
    },
    {
        id: 8,
        title: 'Midnight Fly',
        desc: 'Suspense Thriller',
        image: '/works/midnight-fly.png',
        synopsis: 'A tense, edge-of-your-seat thriller unfolding over a single chaotic night.',
        role: 'Urban Night-shoot Logistics and Specialized Lighting Equipment Rental.',
    },
    {
        id: 9,
        title: 'Okuotoko',
        desc: 'Japanese Feature',
        image: '/works/okuotoko.jpg',
        synopsis: 'A Japanese cinematic production blending cultural narratives and stunning visuals.',
        role: 'Cross-cultural Crew Bridging, Translators, and Comprehensive Equipment Supply.',
    },
    {
        id: 10,
        title: 'Flirt',
        desc: 'Romantic Comedy',
        image: '/works/Flirt.png',
        synopsis: 'A lighthearted romantic comedy navigating love and misunderstandings in exotic locales.',
        role: 'Medina Location Management, Crowds Control, and Local Hospitality.',
    },
];

/* ─── Types ──────────────────────────────────────────────────────────────── */

type Project = typeof projects[number];

/* ─── Modal ──────────────────────────────────────────────────────────────── */

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

                {/* Panel */}
                <motion.div
                    key="panel"
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Hero image */}
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white hover:bg-black/90 transition-all duration-200 backdrop-blur-sm"
                        >
                            <X size={18} />
                        </button>

                        {/* Title overlay */}
                        <div className="absolute bottom-5 left-6">
                            <span className="block text-[#4A90E2] text-xs font-bold tracking-[0.3em] uppercase mb-1">
                                {project.desc}
                            </span>
                            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="bg-white px-6 md:px-8 py-7 space-y-6">
                        {/* Synopsis */}
                        <div className="flex gap-4">
                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#4A90E2]/10 border border-[#4A90E2]/30 flex items-center justify-center">
                                <Film size={15} className="text-[#4A90E2]" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold tracking-[0.25em] uppercase mb-2">Synopsis</p>
                                <p className="text-gray-800 text-sm md:text-base leading-relaxed">{project.synopsis}</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-200" />

                        {/* Dreamaker's Role */}
                        <div className="flex gap-4">
                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#4A90E2]/10 border border-[#4A90E2]/30 flex items-center justify-center">
                                <Star size={15} className="text-[#4A90E2]" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold tracking-[0.25em] uppercase mb-2">Dreamaker's Role</p>
                                <p className="text-gray-800 text-sm md:text-base leading-relaxed">{project.role}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

/* ─── Card ───────────────────────────────────────────────────────────────── */

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: (index % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClick}
            className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/8 bg-[#111] aspect-[2/3]"
        >
            {/* Poster */}
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Persistent gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Hover vignette */}
            <div className="absolute inset-0 bg-[#4A90E2]/0 group-hover:bg-[#4A90E2]/8 transition-colors duration-500" />

            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-[#4A90E2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="block text-[#4A90E2] text-[10px] font-bold tracking-[0.3em] uppercase mb-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {project.desc}
                </span>
                <h3 className="text-white text-lg font-bold tracking-tight leading-snug">
                    {project.title}
                </h3>
                {/* View details pill */}
                <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#4A90E2] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-75">
                    View Details →
                </span>
            </div>
        </motion.div>
    );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function WorkPage() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <main className="min-h-screen bg-white overflow-x-clip">

            {/* Hero Header */}
            <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="block text-[#4A90E2] text-xs font-bold tracking-[0.35em] uppercase mb-5"
                >
                    Portfolio
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6"
                >
                    Our Credits
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.18 }}
                    className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl"
                >
                    A legacy of cinematic excellence and seamless production support in Morocco.
                </motion.p>

                {/* Back to home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#4A90E2] text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                    >
                        ← Back to Home
                    </Link>
                </motion.div>
            </section>

            {/* Divider */}
            <div className="h-px bg-gray-200 max-w-7xl mx-auto mb-16" />

            {/* Grid */}
            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => setSelected(project)}
                        />
                    ))}
                </div>
            </section>

            {/* Modal */}
            {selected && (
                <ProjectModal project={selected} onClose={() => setSelected(null)} />
            )}
        </main>
    );
}
