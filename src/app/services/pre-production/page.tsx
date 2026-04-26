import Link from 'next/link';

export default function PreProductionPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* HERO SECTION: 50/50 Split */}
            <section className="flex flex-col md:flex-row min-h-screen pt-24 md:pt-0">
                {/* LEFT: WHITE HALF */}
                <div className="w-full md:w-1/2 bg-white text-black flex flex-col justify-center p-8 md:p-24 relative">
                    <Link href="/#services" className="absolute top-32 left-8 md:left-24 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:pr-4 transition-all">&larr; Back</Link>
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 Borscha">Pre-Production</h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Line producing, budgeting, permits, and tax rebate facilitation. We lay the perfect groundwork for your cinematic vision.</p>
                </div>
                {/* RIGHT: BLACK HALF */}
                <div className="w-full md:w-1/2 bg-black relative overflow-hidden h-[50vh] md:h-screen">
                    <img src="/studios/dulcie 2 - Copy.jpeg" alt="Pre-Production" className="w-full h-full object-cover opacity-80" />
                </div>
            </section>

            {/* REST OF THE PAGE: Standard White Layout */}
            <section className="py-24 px-8 md:px-24 bg-white text-black">
                <h2 className="text-3xl font-bold uppercase mb-8">Detailed Services</h2>
                <p className="text-gray-600 max-w-3xl text-lg">Comprehensive location scouting, scheduling, and local crew assembly. Our pre-production team ensures that the moment the cameras roll, every logistical variable is already solved.</p>
            </section>
        </main>
    );
}
