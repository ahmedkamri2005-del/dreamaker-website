'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-8 md:px-16 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
            {/* Left side (Logo) */}
            <Link href="/">
                <img
                    src="/logo.png"
                    alt="Dreamaker"
                    className={`transition-all duration-500 ${isScrolled ? 'h-9' : 'h-16'}`}
                />
            </Link>

            {/* Right side (Links) */}
            <div className={`hidden md:flex gap-8 uppercase text-[11px] tracking-widest font-bold transition-colors duration-500 ${isScrolled ? 'text-black drop-shadow-none' : 'text-white drop-shadow-md'}`}>
                <Link href="/work" className="hover:opacity-70 transition-opacity">Work</Link>
                <Link href="/press" className="hover:opacity-70 transition-opacity">Press</Link>
                <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
                <Link href="/localisation" className="hover:opacity-70 transition-opacity">Locations</Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
            </div>
        </nav>
    );
}
