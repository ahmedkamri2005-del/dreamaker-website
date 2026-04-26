'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CinematicLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Safe dimension fetching
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const updateDimensions = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', updateDimensions);

        // Preloader duration
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => {
            window.removeEventListener('resize', updateDimensions);
            clearTimeout(timer);
        };
    }, []);

    // Delay render until client dimensions are fetched
    if (dimensions.width === 0) return null;

    // SVG coordinates mapping the entire screen width and height
    const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} L0 0`;

    // Target coordinates mapping a straight flat line at Y=0, but with a curve pulling the middle UP or DOWN during transition
    const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} 0 Q${dimensions.width / 2} -300 0 0 L0 0`;

    const liquidCurve = {
        initial: {
            d: initialPath
        },
        exit: {
            d: targetPath,
            transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1] as const }
        }
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none">

                    {/* The Fullscreen Liquid Wave overlay */}
                    <svg
                        className="absolute top-0 left-0 w-full h-[150vh] pointer-events-none"
                    >
                        <motion.path
                            variants={liquidCurve}
                            initial="initial"
                            exit="exit"
                            fill="#0A0A0A"
                        />
                    </svg>

                    {/* Logo fading out quickly right before the curve exits */}
                    <motion.div
                        initial={{ opacity: 1, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative z-10 pointer-events-none"
                    >
                        <h1 className="text-white font-serif italic text-4xl md:text-6xl tracking-[0.3em] uppercase mix-blend-difference opacity-80">
                            Dreamaker
                        </h1>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
