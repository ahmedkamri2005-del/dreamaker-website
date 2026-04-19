'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './layout/Footer';

export default function ContactSection() {
    return (
        <section id="contact-section" className="bg-white pt-10 pb-8 px-6 relative scroll-mt-32">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px 0px 100px 0px", amount: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <span className="text-[#4A90E2] text-xs md:text-sm font-bold tracking-[0.4em] uppercase block mb-6">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
                        Let's Create Together.
                    </h2>
                    <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Ready to film in Morocco? Our team is available 24/7 to discuss your project requirements,
                        locations, and logistics.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 mb-12 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all duration-300 ease-in-out font-extrabold hover:bg-[#52B4E5] hover:text-white uppercase tracking-widest text-sm"
                    >
                        Send an Inquiry
                    </Link>

                    <Footer />
                </motion.div>
            </div>
        </section>
    );
}
