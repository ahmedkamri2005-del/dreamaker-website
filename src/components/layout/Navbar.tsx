'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navBgClass = scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        : 'bg-transparent';
    const useWhiteText = !scrolled;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Work', path: '/#work', id: 'work', isAnchor: true },
        { name: 'Services', path: '/#services', id: 'services', isAnchor: true },
        { name: 'Locations', path: '/#locations', id: 'locations', isAnchor: true },
        { name: 'About', path: '/#who-we-are', id: 'who-we-are', isAnchor: true },
        { name: 'Contact', path: '/contact', isAnchor: false }
    ];

    const lineColor = isOpen ? 'bg-white' : (useWhiteText ? 'bg-white' : 'bg-black');

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 ${scrolled ? 'py-2' : 'py-6'} ${isOpen ? 'z-[110]' : 'z-50'} transition-all duration-300 ease-in-out ${navBgClass}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Left Side: Logo Placeholder */}
                    <div className="flex items-center">
                        <Link href="/" className="inline-block relative z-20">
                            <img src={isOpen ? "/logowhite.svg" : "/Untitled-1.svg"} alt="Dreamaker Productions Logo" className={`${scrolled ? 'h-10 md:h-12' : 'h-20 md:h-24'} w-auto object-contain transition-all duration-300 ease-in-out`} />
                        </Link>
                    </div>

                    {/* Right Side: Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.isAnchor ? (
                                <a
                                    key={link.id}
                                    href={link.path}
                                    className={`text-[10px] md:text-sm uppercase tracking-widest font-bold transition-colors duration-300 hover:text-[#52B4E5] ${useWhiteText ? 'text-gray-300' : 'text-black'}`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-[10px] md:text-sm uppercase tracking-widest font-bold transition-colors duration-300 hover:text-[#52B4E5] ${useWhiteText ? 'text-gray-300' : 'text-black'}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col justify-between w-10 h-6 focus:outline-none z-[110] relative group md:hidden"
                    >
                        {/* Line 1: Top, short, right-aligned */}
                        <span className={`h-0.5 w-1/2 rounded-full self-end transition-all duration-500 ${lineColor} ${isOpen ? 'translate-y-[11px] -rotate-45 !w-full' : ''}`}></span>

                        {/* Line 2: Middle, full width */}
                        <span className={`h-0.5 w-full rounded-full transition-all duration-500 ${lineColor} ${isOpen ? 'opacity-0' : ''}`}></span>

                        {/* Line 3: Bottom, short, left-aligned */}
                        <span className={`h-0.5 w-1/2 rounded-full self-start transition-all duration-500 ${lineColor} ${isOpen ? '-translate-y-[11px] rotate-45 !w-full' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Full-screen mobile menu overlay */}
            {isOpen && (
                <div className="fixed inset-0 w-full h-screen bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center p-6">
                    {/* Links */}
                    <div className="flex flex-col items-center">
                        {navLinks.map((link) => (
                            link.isAnchor ? (
                                <a
                                    key={link.id}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl md:text-6xl font-black text-white mb-8 hover:text-[#52B4E5] transition-colors duration-300 uppercase tracking-widest text-center"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl md:text-6xl font-black text-white mb-8 hover:text-[#52B4E5] transition-colors duration-300 uppercase tracking-widest text-center"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
