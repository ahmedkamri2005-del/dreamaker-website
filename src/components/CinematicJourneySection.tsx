'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const videos = [
    {
        id: "showreel",
        title: "2024 Showreel",
        src: "/videos/showreel.mp4",
    },
    {
        id: "dirty-angels",
        title: "Dirty Angels",
        src: "/videos/dirty.angel.mp4",
    },
    {
        id: "video1",
        title: "Production Highlights",
        src: "/videos/video1.webm",
    }
];

export default function CinematicJourneySection() {
    const [activeVideo, setActiveVideo] = useState(videos[0]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleThumbnailClick = (video: typeof videos[0]) => {
        setActiveVideo(video);
        setIsPlaying(true);
    };

    return (
        <section className="py-32 bg-white text-black relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Header */}
                <div className="text-center mb-20 px-6">
                    <h3 className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-500 mb-4 text-center">
                        Theater Experience
                    </h3>
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-20 text-center">
                        Cinematic Showreel.
                    </h2>
                </div>

                {/* Player Grid */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* Main Video — 8 cols */}
                    <div className="col-span-1 lg:col-span-8 relative w-full aspect-[16/10] bg-black rounded-lg overflow-hidden shadow-xl ring-1 ring-gray-200">
                        <video
                            ref={videoRef}
                            key={activeVideo.src}
                            src={activeVideo.src}
                            autoPlay
                            muted={isMuted}
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Controls */}
                        <div className="absolute bottom-5 right-5 flex items-center gap-3 z-20">
                            <button
                                onClick={togglePlay}
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white hover:border-white/50 transition-all duration-300 cursor-pointer"
                            >
                                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                            </button>
                            <button
                                onClick={toggleMute}
                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white hover:border-white/50 transition-all duration-300 cursor-pointer"
                            >
                                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Playlist — 4 cols */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                        {videos.map((video) => {
                            const isActive = activeVideo.id === video.id;
                            return (
                                <div
                                    key={video.id}
                                    onClick={() => handleThumbnailClick(video)}
                                    className={`relative w-full flex-1 rounded-md overflow-hidden cursor-pointer transition-all duration-500 ${isActive
                                        ? 'ring-1 ring-gray-400 shadow-md opacity-100'
                                        : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100 ring-1 ring-gray-200'
                                        }`}
                                >
                                    <video
                                        src={video.src}
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    {/* Title overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                                        <p className="text-xs uppercase tracking-widest text-white font-medium">
                                            {video.title}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
