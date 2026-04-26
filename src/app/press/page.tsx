import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 0;

async function getPressArticles() {
    try {
        const query = `*[_type == "press" && status == "published"] | order(coalesce(orderRank, 9999) asc, publishedAt desc) {
          _id,
          title,
          sourceName,
          publishedAt,
          externalLink,
          mainImage
        }`;
        return await client.fetch(query);
    } catch (error) {
        console.error("Sanity fetch error:", error);
        return [];
    }
}

export default async function PressPage() {
    const articles = await getPressArticles();

    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm font-bold tracking-widest text-gray-900 hover:text-[#52B4E5] transition-colors duration-300 uppercase mb-8 mt-10 w-fit"
                        >
                            ← BACK TO HOME
                        </Link>
                        <p className="text-[#52B4E5] font-bold tracking-[0.3em] uppercase mb-4">
                            NEWS & FEATURES
                        </p>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-black drop-shadow-sm uppercase">
                            PRESS
                        </h1>
                    </div>
                </div>

                {/* Empty State vs Articles Grid */}
                {articles.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-24 h-24 mb-6 text-[#52B4E5] opacity-80">
                            {/* Simple newspaper SVG placeholder icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-wide">
                            No Press Articles Yet
                        </h2>
                        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                            Check back soon for the latest news, features, and updates about our productions.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article: any) => (
                            <Link
                                href={article.externalLink || '#'}
                                key={article._id}
                                target={article.externalLink ? "_blank" : "_self"}
                                rel={article.externalLink ? "noopener noreferrer" : ""}
                                className="group bg-white border border-gray-200 shadow-sm rounded-tl-[40px] rounded-br-[40px] overflow-hidden flex flex-col hover:border-[#52B4E5] hover:shadow-xl transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 border-b border-gray-100">
                                    {article.mainImage ? (
                                        <Image
                                            src={urlFor(article.mainImage).url()}
                                            alt={article.title}
                                            fill
                                            className="object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                                            No Image Available
                                        </div>
                                    )}
                                    {/* Overlay for hover effect */}
                                    <div className="absolute inset-0 bg-[#52B4E5]/0 group-hover:bg-[#52B4E5]/10 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow bg-white">
                                    <div className="mb-4 flex items-center justify-between text-xs font-bold tracking-widest text-gray-500 uppercase">
                                        <span className="text-[#52B4E5]">{article.sourceName || 'Press Feature'}</span>
                                        {article.publishedAt && (
                                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                        )}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#52B4E5] transition-colors duration-300 mb-6 flex-grow leading-snug">
                                        {article.title}
                                    </h3>
                                    <div className="mt-auto text-sm text-[#52B4E5] uppercase tracking-widest font-extrabold flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                                        Read Full Article <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
