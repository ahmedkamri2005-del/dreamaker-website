'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './layout/Footer';

export default function ContactSection() {
    return (
        <section id="contact-section" className="py-16 bg-[#fafafa] text-center px-6 relative scroll-mt-32">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gray-400 text-[10px] font-bold tracking-[0.4em] uppercase block mb-8">
                        GET IN TOUCH
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-tight">
                        Let's Create Together.
                    </h2>

                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Ready to film in Morocco? Our team is available 24/7 to discuss your project requirements,
                        locations, and logistics.
                    </p>

                    <Link
                        href="#"
                        className="inline-block bg-black text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gray-800 transition-colors shadow-xl"
                    >
                        Send an Inquiry
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
