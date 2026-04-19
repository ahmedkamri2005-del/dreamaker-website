import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-white px-4 md:px-6 py-8 md:py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 md:gap-12 text-left mb-8 md:mb-16 relative z-10">
                    {/* Column 1: Contact Information */}
                    <div className="flex flex-col h-full">
                        <h4 className="text-xs md:text-sm text-[#4A90E2] font-bold tracking-widest uppercase mb-3">CONTACT US</h4>
                        <div className="text-gray-600 text-[11px] md:text-sm flex flex-col gap-2 md:gap-4 font-sans leading-relaxed mt-auto">
                            <p className="leading-relaxed">
                                115 Rue de la Yougoslavie, Apt. 9<br />
                                Marrakech 40000, Morocco
                            </p>
                            <a href="https://wa.me/212661257326" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A90E2] transition-colors w-fit">
                                +212 661 257 326
                            </a>
                            <a href="mailto:contact@dreamakerproductions.com" className="hover:text-[#4A90E2] transition-colors w-fit">
                                contact@dreamakerproductions.com
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Social Media */}
                    <div>
                        <h4 className="text-xs md:text-sm text-[#4A90E2] font-bold tracking-widest uppercase mb-3">SOCIALS</h4>
                        <div className="flex flex-col items-start">
                            {/* Constrained wrapper — icons + buttons share this width */}
                            <div className="flex flex-col gap-2 w-full max-w-[240px]">
                                <div className="flex flex-row flex-nowrap items-center gap-1.5 md:gap-4 text-black mb-2">
                                    <a href="#" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="X (Twitter)">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    </a>
                                    <a href="https://www.instagram.com/dreamaker_prod/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                    <a href="#" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/dreamaker-productions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                    {/* Vimeo */}
                                    <a href="#" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="Vimeo">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 7.42C21.91 9.37 20.55 12 18 15c-2.62 3.12-4.84 4.68-6.64 4.68-1.12 0-2.07-1.04-2.84-3.12L7.3 12.5C6.76 10.42 6.18 9.38 5.55 9.38c-.14 0-.63.3-1.47.88L3 9.07c.93-.82 1.84-1.64 2.73-2.47C6.96 5.56 7.87 5 8.53 5c1.56-.15 2.52.92 2.88 3.2.39 2.46.66 3.99.82 4.6.45 2.06.95 3.08 1.5 3.08.42 0 1.06-.67 1.91-2 .85-1.34 1.3-2.36 1.36-3.06.12-1.16-.33-1.74-1.36-1.74-.48 0-.98.11-1.5.33 1-3.3 2.9-4.9 5.72-4.82 2.08.06 3.06 1.41 2.94 4.06z" /></svg>
                                    </a>
                                    {/* YouTube */}
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="YouTube">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </a>
                                    {/* TikTok */}
                                    <a href="#" className="hover:text-[#52B4E5] transition-all cursor-pointer" aria-label="TikTok">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" /></svg>
                                    </a>
                                </div>
                                <a href="https://www.m-f-c.org" target="_blank" rel="noopener noreferrer" className="w-full text-center py-1 px-2 md:py-1 md:px-3 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] font-bold uppercase text-[9px] md:text-[10px] tracking-widest rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all hover:bg-[#52B4E5] hover:text-white cursor-pointer block">
                                    VISIT OUR M-F-C
                                </a>
                                <a href="https://www.moroccofilmequiment.com" target="_blank" rel="noopener noreferrer" className="w-full text-center py-1 px-2 md:py-1 md:px-3 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] font-bold uppercase text-[9px] md:text-[10px] tracking-widest rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all hover:bg-[#52B4E5] hover:text-white cursor-pointer block">
                                    VISIT FILM EQUIPMENT
                                </a>
                                <a href="https://dreamakerevents.com" target="_blank" rel="noopener noreferrer" className="w-full text-center py-1 px-2 md:py-1 md:px-3 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] font-bold uppercase text-[9px] md:text-[10px] tracking-widest rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all hover:bg-[#52B4E5] hover:text-white cursor-pointer block">
                                    VISIT OUR EVENTS
                                </a>
                            </div>{/* end constrained wrapper */}
                        </div>
                    </div>

                    {/* Column 3: Newsletter — full width on mobile */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
                        <h4 className="text-xs md:text-sm text-[#4A90E2] font-bold tracking-widest uppercase mb-3">NEWSLETTER</h4>
                        <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed font-sans max-w-xs">
                            Join our exclusive list for updates and behind-the-scenes content.
                        </p>
                        <div className="flex flex-col sm:flex-row w-full max-w-sm bg-gray-50 backdrop-blur-md border border-gray-200 rounded-tl-[15px] rounded-br-[15px] rounded-tr-none rounded-bl-none p-1 transition-all duration-300 focus-within:border-[#4A90E2]/50 shadow-inner gap-1 sm:gap-0">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent text-gray-900 px-4 py-2 w-full focus:outline-none text-sm placeholder:text-gray-400 font-sans"
                            />
                            <button className="bg-white text-[#52B4E5] border-2 border-[#52B4E5] font-extrabold hover:bg-[#52B4E5] hover:text-white transition-all px-6 py-2 rounded-tl-[15px] rounded-br-[15px] rounded-tr-none rounded-bl-none text-xs md:text-sm shadow-lg whitespace-nowrap uppercase">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-gray-100 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] gap-2 md:gap-4 font-sans">
                    <p>© {new Date().getFullYear()} Dreamaker Productions. All rights reserved.</p>
                    <p className="text-center md:text-right">Committed to delivering exceptional production services in Morocco.</p>
                </div>
            </div>
        </footer>
    );
}
