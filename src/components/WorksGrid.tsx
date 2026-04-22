'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function WorksGrid({ works }: { works: any[] }) {
    const [selectedWork, setSelectedWork] = useState<any>(null);

    // Disable background scrolling when modal is open
    useEffect(() => {
        if (selectedWork) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedWork]);

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12">

            {works.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                        No projects found. Check back later or add items into Sanity.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {works.map((work) => (
                        <div
                            key={work.id || work._id}
                            onClick={() => setSelectedWork(work)}
                            className="relative group cursor-pointer aspect-[2/3] rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-xl"
                        >
                            {work.image ? (
                                <>
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {work.hoverImage && (
                                        <Image
                                            src={work.hoverImage}
                                            alt={`${work.title} scene`}
                                            fill
                                            className="object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                                        />
                                    )}
                                </>
                            ) : (
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-xs text-gray-400">No Image</div>
                            )}

                            {/* Hover Overlay Background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Text Details Inside Overlay (Slide Up Animation) */}
                            <div className="absolute bottom-5 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-10 w-11/12 pr-4 translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-white text-3xl font-bold tracking-tight mb-1">
                                    {work.title}
                                </h3>
                                <span className="block text-[#00B4D8] font-bold uppercase tracking-widest text-xs mb-2">
                                    {work.category} • {work.role}
                                </span>
                                {work.description && (
                                    <p className="text-gray-300 text-sm line-clamp-3">
                                        {work.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Lightbox / Modal */}
            {selectedWork && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm">
                    <div className="relative bg-white w-full max-w-5xl rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]">

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedWork(null)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/30 hover:bg-[#52B4E5] text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                        >
                            <X size={20} />
                        </button>

                        {/* Modal Image fixed cropping setup */}
                        <div className="relative w-full md:w-[45%] h-64 md:h-auto min-h-[400px] bg-gray-100">
                            {selectedWork.image && (
                                <Image
                                    src={selectedWork.image}
                                    alt={selectedWork.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            )}
                        </div>

                        {/* Modal Details Content */}
                        <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white text-gray-900 overflow-y-auto">
                            <h2 className="text-4xl lg:text-5xl font-black uppercase text-[#52B4E5] mb-8 leading-none">
                                {selectedWork.title}
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-1">Category</h4>
                                    <p className="text-2xl font-bold text-gray-900">{selectedWork.category || 'N/A'}</p>
                                </div>
                                <div className="h-px w-16 bg-gray-200"></div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-1">Dreamaker's Role</h4>
                                    <p className="text-2xl font-bold text-gray-900">{selectedWork.role || 'N/A'}</p>
                                </div>
                            </div>

                            {/* Additional modal spacing styling */}
                            <div className="mt-12 w-full pt-8 border-t border-gray-100">
                                <button
                                    onClick={() => setSelectedWork(null)}
                                    className="px-8 py-3 outline-none bg-transparent hover:bg-gray-100 text-gray-500 font-bold uppercase tracking-widest text-sm rounded-tl-[20px] rounded-br-[20px] transition-colors"
                                >
                                    Close Details
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
