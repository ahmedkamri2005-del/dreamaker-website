'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-0">
            <div className="flex flex-col lg:flex-row min-h-[80vh] w-full">
                {/* ── LEFT COLUMN: Dark Teal ── */}
                <div className="w-full lg:w-1/2 bg-[#214151] flex flex-col justify-center px-12 lg:px-24 pt-32 pb-20 text-white relative overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <span className="text-[#52B4E5] font-bold tracking-[0.3em] uppercase text-sm block mb-4">Get In Touch</span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight uppercase tracking-tight">
                            Let&apos;s Create <br />
                            Together.
                        </h1>

                        <div className="space-y-8 mt-12">
                            <div>
                                <p className="text-[#52B4E5] text-xs font-bold uppercase tracking-widest mb-2">Email Us</p>
                                <a href="mailto:contact@dreamakerproductions.com" className="text-xl md:text-2xl font-bold hover:text-[#52B4E5] transition-colors">
                                    contact@dreamakerproductions.com
                                </a>
                            </div>

                            <div>
                                <p className="text-[#52B4E5] text-xs font-bold uppercase tracking-widest mb-4">Follow Our Journey</p>
                                <div className="flex flex-wrap gap-4 items-center max-w-[280px]">
                                    <a href="#" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="X (Twitter)">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    </a>
                                    <a href="https://www.instagram.com/dreamaker_prod/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                    <a href="#" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/dreamaker-productions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                    <a href="#" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="Vimeo">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 7.42C21.91 9.37 20.55 12 18 15c-2.62 3.12-4.84 4.68-6.64 4.68-1.12 0-2.07-1.04-2.84-3.12L7.3 12.5C6.76 10.42 6.18 9.38 5.55 9.38c-.14 0-.63.3-1.47.88L3 9.07c.93-.82 1.84-1.64 2.73-2.47C6.96 5.56 7.87 5 8.53 5c1.56-.15 2.52.92 2.88 3.2.39 2.46.66 3.99.82 4.6.45 2.06.95 3.08 1.5 3.08.42 0 1.06-.67 1.91-2 .85-1.34 1.3-2.36 1.36-3.06.12-1.16-.33-1.74-1.36-1.74-.48 0-.98.11-1.5.33 1-3.3 2.9-4.9 5.72-4.82 2.08.06 3.06 1.41 2.94 4.06z" /></svg>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="YouTube">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </a>
                                    <a href="#" className="hover:text-[#52B4E5] transition-all transform hover:scale-110" aria-label="TikTok">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── RIGHT COLUMN: White Form ── */}
                <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 lg:px-24 pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl w-full"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Start Your Project</h2>

                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold ml-1 block">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white border border-gray-200 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none px-4 py-4 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#214151] focus:ring-1 focus:ring-[#214151] transition-colors shadow-sm"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold ml-1 block">Service Required</label>
                                <select className="w-full bg-white border border-gray-200 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none px-4 py-4 text-gray-900 focus:outline-none focus:border-[#214151] focus:ring-1 focus:ring-[#214151] transition-colors appearance-none cursor-pointer shadow-sm">
                                    <option value="">Select a Service</option>
                                    <option>Pre-Production & Scouting</option>
                                    <option>Full Production Services</option>
                                    <option>Equipment Rental</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold ml-1 block">Project Details</label>
                                <textarea
                                    placeholder="Tell us about your project vision..."
                                    rows={5}
                                    className="w-full bg-white border border-gray-200 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none px-4 py-4 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#214151] focus:ring-1 focus:ring-[#214151] transition-colors resize-none shadow-sm"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 w-full bg-[#214151] text-white font-bold py-5 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none hover:bg-[#52B4E5] transition-all duration-300 uppercase tracking-widest text-sm shadow-xl hover:shadow-[0_10px_30px_rgba(82,180,229,0.3)]"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
