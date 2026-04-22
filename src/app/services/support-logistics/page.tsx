import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SupportLogisticsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pt-0">
            {/* Split Screen Hero Section */}
            <section className="flex flex-col lg:flex-row w-[100vw] relative left-1/2 -translate-x-1/2 min-h-screen">
                {/* ── LEFT COLUMN: Dark Teal — Text ── */}
                <div className="w-full lg:w-1/2 bg-[#214151] flex flex-col justify-center self-stretch min-h-screen px-12 lg:px-24 pt-32 pb-16">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-bold tracking-widest text-white hover:text-[#52B4E5] transition-colors duration-300 uppercase mb-8 w-fit"
                    >
                        ← BACK TO HOME
                    </Link>

                    <p className="text-[#52B4E5] font-bold tracking-[0.3em] uppercase mb-4">
                        HIGH-IMPACT OPERATIONS.
                    </p>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8 text-white drop-shadow-xl uppercase">
                        ACTION & LOGISTICS
                    </h1>
                </div>

                {/* ── RIGHT COLUMN: White — Image ── */}
                <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 pt-32 lg:pt-32">
                    <div className="relative w-full max-w-[600px] max-h-[400px] lg:max-h-[500px] aspect-[4/3] rounded-sm rounded-tr-none rounded-bl-none overflow-hidden shadow-2xl">
                        <Image
                            src="/images/fly.png"
                            alt="Logistics Operations"
                            fill
                            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            <div className="py-16" />

            <div className="max-w-7xl mx-auto px-4">
                {/* Moodboard 1: High-Impact Operations */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <p className="text-[#52B4E5] font-bold tracking-widest uppercase mb-4">
                            HIGH-IMPACT OPERATIONS
                        </p>
                        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                            We coordinate seamlessly with local authorities to secure controlled environments for complex stunts, military staging, tactical security, and specialized vehicle operations.
                        </p>
                    </div>

                    <div className="grid group grid-cols-4 grid-rows-2 h-[400px] max-w-7xl mx-auto mb-16 rounded-sm overflow-hidden gap-0 bg-white shadow-2xl">
                        <div className="col-span-2 row-span-2 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-armored-vehicle.jpg" alt="Armored Vehicle" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-soldiers.jpg" alt="Soldiers" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-convoy.jpg" alt="Convoy" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-military-staging.jpg" alt="Military staging" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-soldier-action.jpg" alt="Soldier action" fill className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Moodboard 2: Authentic Worldbuilding */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <p className="text-[#52B4E5] font-bold tracking-widest uppercase mb-4">
                            AUTHENTIC WORLDBUILDING
                        </p>
                        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                            From authentic period costumes to historical props and camel unit staging, we provide the highly specialized assets that give period and epic productions a deeply lived-in feel.
                        </p>
                    </div>

                    <div className="grid group grid-cols-4 grid-rows-3 h-[500px] md:h-[550px] max-w-7xl mx-auto mb-16 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden gap-0 bg-white shadow-2xl">
                        <div className="col-span-2 row-span-2 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-trebuchet.JPG" alt="Trebuchet" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-wooden-prop.JPG" alt="Wooden Prop" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-wooden-cart.JPG" alt="Wooden Cart" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-kasbah-exterior.JPG" alt="Kasbah exterior" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-set-interior.JPG" alt="Set interior" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-2 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-kasbah-wide.JPG" alt="Kasbah wide" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-cave-interior.JPG" alt="Cave/Interior" fill className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 relative z-0 transition-all duration-500 cursor-pointer group-hover:brightness-[0.3] hover:!brightness-100 hover:scale-[1.03] hover:z-10">
                            <Image src="/logistic/dreamaker-temple-set.JPG" alt="Temple Set" fill className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="flex justify-center mt-20 pb-24">
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-transparent text-[#52B4E5] border-2 border-[#52B4E5] font-extrabold uppercase tracking-widest text-sm rounded-sm rounded-tr-none rounded-bl-none transition-all duration-300 hover:bg-[#52B4E5] hover:text-white shadow-[0_0_20px_rgba(82,180,229,0.1)] hover:shadow-[0_0_40px_rgba(82,180,229,0.3)]"
                    >
                        INITIALIZE OPERATIONS
                    </Link>
                </div>
            </div>
        </main>
    );
}
