'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FloatingChatbot() {
    const pathname = usePathname();
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
                                className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white overflow-hidden border border-gray-200 shadow-2xl flex flex-col z-[51] rounded-xl"
                            >
                                {/* Header */}
                                <div className="bg-black p-5 flex justify-between items-center">
                                    <div>
                                        <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Dreamaker AI</h4>
                                        <p className="text-gray-400 text-[10px] font-light">Production Assistant</p>
                                    </div>
                                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                                    {messages.map((msg, i) => (
                                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[85%] p-4 text-sm font-light leading-relaxed shadow-sm ${msg.role === 'user'
                                                ? 'bg-black text-white rounded-l-xl rounded-br-xl'
                                                : 'bg-[#f4f4f4] text-gray-800 rounded-r-xl rounded-bl-xl'
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-[#f4f4f4] p-4 rounded-r-xl rounded-bl-xl shadow-sm flex space-x-1">
                                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-4 border-t border-gray-100 flex items-center gap-3 bg-white">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-transparent text-sm font-light text-gray-900 placeholder-gray-400 focus:outline-none"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={isLoading || !input.trim()}
                                        className="text-black hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                        aria-label="Send message"
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
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md hover:scale-110 transition-transform cursor-pointer"
                    >
                        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
