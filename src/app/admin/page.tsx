'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    submitSanityDocument,
    getAdminContent,
    publishSanityDocument,
    deleteSanityDocument
} from '@/app/actions/sanityActions';

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    // Core Layout Arrays
    const [mainTab, setMainTab] = useState<'add' | 'manage'>('manage');
    const activeTab = 'press'; // Locked to press

    // Content Display Arrays
    const [manageItems, setManageItems] = useState<any[]>([]);
    const [isLoadingItems, setIsLoadingItems] = useState(false);

    // Form states
    const [description, setDescription] = useState('');
    const [successState, setSuccessState] = useState<{ show: boolean, type: string }>({ show: false, type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'dreamaker2026';
        if (password === expected) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    // Poll server-side content execution dynamically based on View mode:
    useEffect(() => {
        if (isAuthenticated && mainTab === 'manage') {
            loadContentItems();
        }
    }, [isAuthenticated, mainTab]);

    const loadContentItems = async () => {
        setIsLoadingItems(true);
        const res = await getAdminContent();
        if (res.success && res.items) {
            setManageItems(res.items);
        }
        setIsLoadingItems(false);
    };

    // Functional Action bindings
    const handleQuickPublish = async (id: string) => {
        const res = await publishSanityDocument(id);
        if (res.success) {
            loadContentItems(); // Re-sync local dataset instantly
        } else {
            alert(res.error);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (window.confirm(`Are you absolutely sure you want to permanently delete "${title}"?`)) {
            const res = await deleteSanityDocument(id);
            if (res.success) {
                loadContentItems();
            } else {
                alert(res.error);
            }
        }
    };

    // Universal Form Post Handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        formData.append('type', activeTab);

        const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
        if (submitter?.value) {
            formData.append('status', submitter.value);
        } else {
            formData.append('status', 'published');
        }

        try {
            const res = await submitSanityDocument(formData);
            if (res.success) {
                formElement.reset();
                setDescription('');
                setSuccessState({ show: true, type: activeTab });
                setMessage('Successfully published!');
            } else {
                // Return explicitly severe failure warnings as heavily requested
                setMessage(`Error: ${res.error}`);
            }
        } catch (error: any) {
            setMessage('Error: ' + (error.message || 'Critical Network error occurred.'));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
                <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 rounded-[30px] border border-gray-100 shadow-xl flex flex-col items-center">
                    <h1 className="text-[#52B4E5] font-black text-2xl uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-4 w-full text-center">Admin Portal</h1>
                    <input
                        type="password"
                        placeholder="Master Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-tl-[20px] rounded-br-[20px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900 placeholder:text-gray-400 mb-6 font-mono"
                    />
                    <button type="submit" className="w-full bg-[#52B4E5] hover:bg-[#4096c4] text-white font-bold uppercase tracking-widest text-sm rounded-tl-[20px] rounded-br-[20px] py-3 transition-colors shadow-sm">
                        Secure Login
                    </button>
                </form>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 font-sans p-6 md:p-12">
            <div className="max-w-5xl mx-auto">

                {/* Header Sequence */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-6 rounded-[30px] shadow-sm border border-gray-100">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <Link href="/" className="text-xs font-bold text-gray-400 hover:text-[#52B4E5] transition-colors tracking-widest uppercase">
                            ← Back to Website
                        </Link>
                        <h1 className="text-2xl font-black text-gray-900 tracking-widest uppercase mt-1">
                            Dreamaker <span className="text-[#52B4E5]">Admin</span>
                        </h1>
                    </div>

                    {/* Master Toggles */}
                    <div className="flex bg-gray-50 border border-gray-200 p-1 rounded-tl-[30px] rounded-br-[30px] shadow-inner">
                        <button
                            onClick={() => { setMainTab('add'); setSuccessState({ show: false, type: '' }); }}
                            className={`px-8 py-3 rounded-tl-[25px] rounded-br-[25px] font-bold text-sm tracking-widest uppercase transition-colors ${mainTab === 'add' ? 'bg-[#52B4E5] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Add New Item
                        </button>
                        <button
                            onClick={() => { setMainTab('manage'); setSuccessState({ show: false, type: '' }); }}
                            className={`px-8 py-3 rounded-tl-[25px] rounded-br-[25px] font-bold text-sm tracking-widest uppercase transition-colors ${mainTab === 'manage' ? 'bg-[#52B4E5] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Manage Content
                        </button>
                    </div>

                    <button onClick={() => setIsAuthenticated(false)} className="text-sm font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors mt-2 md:mt-0">
                        Logout
                    </button>
                </div>

                {/* Main Render Views */}
                <div className="bg-white p-6 md:p-12 rounded-[50px] shadow-xl border border-gray-100">

                    {/* View: MANAGE CONTENT AND DRAFTS */}
                    {mainTab === 'manage' && (
                        <div>
                            <h2 className="text-[#52B4E5] font-black tracking-widest uppercase text-lg mb-8 border-b-2 border-gray-50 pb-4">Content & Draft Library</h2>
                            {isLoadingItems ? (
                                <p className="text-gray-500 uppercase font-bold tracking-widest text-sm text-center py-12">Loading Content Array...</p>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {manageItems.map((item) => (
                                        <div key={item._id} className="flex flex-col md:flex-row items-center justify-between p-5 bg-gray-50 border border-gray-100 rounded-[20px] hover:border-[#52B4E5]/50 transition-colors">
                                            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left mb-4 md:mb-0 w-full">
                                                <div className="flex gap-2">
                                                    <span className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-md bg-purple-100 text-purple-600`}>Press</span>
                                                    <span className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-md ${item.status === 'draft' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>{item.status || 'published'}</span>
                                                </div>
                                                <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                                            </div>

                                            <div className="flex gap-3 shrink-0">
                                                {item.status === 'draft' && (
                                                    <button onClick={() => handleQuickPublish(item._id)} className="bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-200 px-4 py-2 rounded-tl-[10px] rounded-br-[10px] font-bold text-xs uppercase tracking-widest transition-colors">
                                                        Publish Now
                                                    </button>
                                                )}
                                                <button onClick={() => handleDelete(item._id, item.title)} className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-tl-[10px] rounded-br-[10px] font-bold text-xs uppercase tracking-widest transition-colors">
                                                    Trash
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {manageItems.length === 0 && (
                                        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center py-12">No Content Synced Successfully</div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}


                    {/* View: ADD NEW ITEM FORM */}
                    {mainTab === 'add' && (
                        <>
                            {successState.show ? (
                                <div className="flex flex-col items-center justify-center py-16 px-6 text-center border-2 border-dashed border-[#52B4E5]/30 bg-[#52B4E5]/5 rounded-[30px] mb-8">
                                    <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-8">Item Successfully Added!</h2>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                        <Link
                                            href={successState.type === 'work' ? '/works' : '/press'}
                                            target="_blank"
                                            className="w-full md:w-auto bg-[#52B4E5] hover:bg-gray-900 text-white px-8 py-4 rounded-tl-[20px] rounded-br-[20px] font-bold text-sm uppercase tracking-widest transition-colors shadow-md"
                                        >
                                            View Live on Site
                                        </Link>
                                        <button
                                            onClick={() => setSuccessState({ show: false, type: '' })}
                                            className="w-full md:w-auto bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 px-8 py-4 rounded-tl-[20px] rounded-br-[20px] font-bold text-sm uppercase tracking-widest transition-colors"
                                        >
                                            Add Another Item
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-[#52B4E5] font-bold tracking-widest uppercase text-sm mb-6 border-b border-gray-50 pb-4">Add Press & News</h2>

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                                        {/* Global Title */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Item Title</label>
                                            <input required name="title" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900" />
                                        </div>

                                        {/* Global Display Order */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Display Order (Optional)</label>
                                            <input name="orderRank" type="number" placeholder="e.g., 1 (Leave empty for automatic)" className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900" />
                                        </div>

                                        {/* Global Description */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Description</label>
                                            <textarea
                                                required
                                                name="description"
                                                rows={3}
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900 resize-none"
                                                placeholder="Enter a short description or summary..."
                                            />
                                        </div>

                                        {/* Press Fields */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Source Name</label>
                                            <input required name="sourceName" type="text" placeholder="e.g. Variety Magazine" className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Publish Date</label>
                                            <input required name="publishedAt" type="date" className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">External Content Link (URL)</label>
                                            <input name="externalLink" type="url" placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B4E5] text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Press Thumbnail (Image File)</label>
                                            <input required name="image" type="file" accept="image/*" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 rounded-tl-[20px] rounded-br-[20px]" />
                                        </div>

                                        {/* Server Output Handling UI */}
                                        {message && message.includes('Error') && (
                                            <div className="mt-4 p-4 rounded-[10px] text-sm font-bold tracking-widest uppercase border border-red-200 bg-red-100 text-red-700 shadow-sm flex items-center gap-2">
                                                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                {message}
                                            </div>
                                        )}

                                        {/* Submit Operations */}
                                        <div className="mt-6 border-t border-gray-100 pt-8 flex flex-col md:flex-row gap-4 justify-end">
                                            <button name="status" value="draft" disabled={isSubmitting} type="submit" className="w-full md:w-auto px-10 bg-white border-2 border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900 font-black uppercase tracking-widest text-sm rounded-tl-[20px] rounded-br-[20px] py-4 transition-colors disabled:opacity-50">
                                                {isSubmitting ? '...' : 'Save as Draft'}
                                            </button>
                                            <button name="status" value="published" disabled={isSubmitting} type="submit" className="w-full md:w-auto px-10 bg-[#52B4E5] hover:bg-gray-900 text-white font-black uppercase tracking-widest text-sm rounded-tl-[20px] rounded-br-[20px] py-4 transition-colors shadow-md disabled:opacity-50">
                                                {isSubmitting ? 'Uploading Asset...' : 'Publish to Live Site'}
                                            </button>
                                        </div>

                                    </form>
                                </>
                            )}
                        </>
                    )}

                </div>
            </div>
        </main>
    );
}
