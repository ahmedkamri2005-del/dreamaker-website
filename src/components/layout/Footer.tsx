import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] pt-12 pb-4 text-white border-t border-white/10 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    {/* Column 1: Contact Information */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">CONTACT US</h4>
                        <div className="text-gray-400 font-light text-sm flex flex-col gap-6 leading-relaxed">
                            <p>
                                115 Rue de la Yougoslavie, Apt. 9<br />
                                Marrakech 40000, Morocco
                            </p>
                            <a href="tel:+212661257326" className="hover:text-white transition-colors w-fit">
                                +212 661 257 326
                            </a>
                            <a href="mailto:contact@dreamakerproductions.com" className="hover:text-white transition-colors w-fit">
                                contact@dreamakerproductions.com
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Socials & Links */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">SOCIALS</h4>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-6 text-gray-400">
                                <a href="#" className="hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                                <a href="#" className="hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
                                <a href="#" className="hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                                <a href="#" className="hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Link href="#" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Visit Our M-F-C</Link>
                                <Link href="#" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Visit Film Equipment</Link>
                                <Link href="#" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Visit Our Events</Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">NEWSLETTER</h4>
                        <p className="text-gray-400 font-light text-sm leading-relaxed mb-4">
                            Join our exclusive list for updates and behind-the-scenes content.
                        </p>
                        <div className="flex border-b border-gray-700 pb-3 mt-6">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none text-sm font-light"
                            />
                            <button className="text-xs uppercase tracking-widest text-white hover:text-gray-400 font-semibold pl-4 transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-light gap-4">
                    <p>© {new Date().getFullYear()} Dreamaker Productions. All rights reserved.</p>
                    <p className="text-center md:text-right">Committed to delivering exceptional production services in Morocco.</p>
                </div>
            </div>
        </footer>
    );
}
