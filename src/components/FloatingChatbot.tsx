'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChatbot() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState<{ role: string, content: string }[]>([
        { role: 'assistant', content: "Hello! How can the Dreamaker team assist you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            if (isOpen) setIsOpen(false);
        }
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user', content: input.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })) })
            });

            let data;
            const text = await res.text();
            try {
                data = JSON.parse(text);
            } catch (e) {
                data = { error: `Server error: ${res.status}` };
            }

            if (res.ok) {
                setMessages(prev => [...prev, data]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: data.error || `Connection error (${res.status}). Ensure API route is accessible.` }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Network error. Please try again later.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-2xl border border-gray-100 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none overflow-hidden flex flex-col z-[51]"
                            >
                                {/* Header */}
                                <div className="bg-[#52B4E5] p-4 flex justify-between items-center text-white">
                                    <div>
                                        <h3 className="font-extrabold font-[var(--font-custom)] tracking-widest text-sm uppercase">Dreamaker AI</h3>
                                        <p className="text-xs text-white/80 font-sans">Support Assistant</p>
                                    </div>
                                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                                    {messages.map((msg, i) => (
                                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] p-3 text-sm rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none break-words overflow-hidden ${msg.role === 'user' ? 'bg-[#52B4E5] text-white' : 'bg-white border border-gray-100 text-gray-800 shadow-sm'}`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-white border border-gray-100 p-3 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none shadow-sm text-sm text-gray-500 flex space-x-1">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input */}
                                <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-gray-50 border border-gray-200 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none px-4 py-2 text-sm focus:outline-none focus:border-[#52B4E5] text-gray-900 placeholder:text-gray-400"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={isLoading || !input.trim()}
                                        className="bg-[#52B4E5] text-white p-2 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none hover:bg-[#4096c4] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shrink-0"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#52B4E5] text-white shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none hover:scale-110 transition-transform cursor-pointer"
                    >
                        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
