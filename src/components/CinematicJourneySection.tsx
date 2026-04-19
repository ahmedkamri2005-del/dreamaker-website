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
        src: "/videos/video1.mp4",
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
        setIsPlaying(true); // new video always starts playing
    };

    return (
        <section className="bg-white pt-20 pb-24 px-6 relative overflow-visible">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-10 px-4">
                    <span className="text-[#4A90E2] text-xs md:text-sm font-bold tracking-[0.4em] uppercase block mb-4">Theater Experience</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
                        Cinematic Showreel
                    </h2>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 h-[65vh] min-h-[400px] overflow-hidden">

                    {/* ── Left: Main Video Player (3/4 width) ── */}
                    <div className="col-span-1 lg:col-span-3 relative w-full h-full shadow-2xl overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none bg-black border border-white/5">
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



                        {/* ── Custom Controls Overlay ── */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">
                            {/* Play / Pause */}
                            <button
                                onClick={togglePlay}
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-[#4A90E2] transition-all duration-300 cursor-pointer"
                            >
                                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                            </button>

                            {/* Mute / Unmute */}
                            <button
                                onClick={toggleMute}
                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-[#4A90E2] transition-all duration-300 cursor-pointer"
                            >
                                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* ── Right: Vertical Thumbnail List (1/4 width) ── */}
                    <div className="col-span-1 flex flex-col gap-3 h-full overflow-hidden">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => handleThumbnailClick(video)}
                                className="group relative flex-1 overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none cursor-pointer shadow-md transition-all duration-300 border-2 border-transparent hover:border-[#4A90E2]"
                                style={{
                                    borderColor: activeVideo.id === video.id ? '#4A90E2' : undefined,
                                    opacity: activeVideo.id === video.id ? 1 : 0.8,
                                }}
                            >
                                <video
                                    src={video.src}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ opacity: activeVideo.id === video.id ? 1 : 0.8 }}
                                />

                                {/* Title Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                    <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                        {video.title}
                                    </p>
                                </div>


                            </div>
                        ))}
                    </div>

                </div>
            </motion.div>

            {/* Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}
