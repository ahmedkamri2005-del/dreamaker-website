"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineData = [
    {
        id: 1,
        title: "Script & Planning",
        desc: "Comprehensive financial planning, schedule management, and script breakdown to ensure every detail is accounted for.",
        images: [
            { src: "/images/dreamaker-setup-7.jpg", className: "md:col-span-2 md:row-span-2" },
            { src: "/images/dreamaker-planning-1.jpg", className: "" },
            { src: "/images/dreamaker-planning-3.jpg", className: "" },
        ]
    },
    {
        id: 2,
        title: "Location Scouting",
        desc: "Finding the perfect visual match for your script across Morocco's versatile landscapes, from dunes to urban textures.",
        images: [
            { src: "/images/dreamaker-locations-2.jpg", className: "md:col-span-2 md:row-span-2" },
            { src: "/images/dreamaker-action-logistics.jpg", className: "" },
            { src: "/images/dreamaker-production-43.jpg", className: "" },
        ]
    },
    {
        id: 3,
        title: "Casting & Approvals",
        desc: "Managing clapperboards and monitors, ensuring every cast member and crew meeting aligns with the vision.",
        images: [
            { src: "/images/dreamaker-director-view.jpg", className: "md:col-span-2 md:row-span-2" },
            { src: "/images/dreamaker-planning-4.jpg", className: "" },
            { src: "/images/dreamaker-planning-2.jpg", className: "" },
        ]
    }
];

export default function TimelineMoodboard() {
    return (
        <section className="bg-gray-50 py-24 px-6 md:px-12 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Central Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#4A90E2]/20 -translate-x-1/2"></div>

                <div className="flex flex-col w-full relative z-10">
                    {timelineData.map((node, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={node.id} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center w-full mb-32 gap-12 md:gap-0`}>

                                {/* Central Node marker */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#4A90E2] rounded-full z-20 shadow-[0_0_10px_rgba(74,144,226,0.6)] top-0 md:top-1/2 md:-translate-y-1/2"></div>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`w-full md:w-[42%] pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                                >
                                    <span className="text-[#4A90E2] font-mono text-sm tracking-[0.3em] font-bold block mb-4">STEP 0{node.id}</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{node.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                                        {node.desc}
                                    </p>
                                </motion.div>

                                {/* Bento Grid Moodboard */}
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full md:w-[50%]"
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 min-h-[400px] md:min-h-[500px]">
                                        {node.images.map((img, i) => (
                                            <div
                                                key={i}
                                                className={`relative overflow-hidden rounded-xl shadow-md group ${img.className} ${img.className.includes('row-span-2') ? 'h-[400px] md:h-full' : 'h-48 md:h-[calc(50%-0.375rem)]'}`}
                                            >
                                                <Image
                                                    src={img.src}
                                                    alt={`${node.title} moodboard ${i}`}
                                                    fill
                                                    sizes="(max-w-768px) 100vw, 33vw"
                                                    className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 rounded-xl"></div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
