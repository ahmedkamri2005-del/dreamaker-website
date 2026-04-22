'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import FloatingChatbot from '@/components/FloatingChatbot';

export default function GlobalUIWrapper() {
    const pathname = usePathname();

    const isSystemHidden = pathname && (pathname.startsWith('/studio') || pathname.startsWith('/sanity-hidden') || pathname.startsWith('/admin'));
    const isDynamicShowcase = pathname && pathname.startsWith('/works/') && pathname.length > '/works/'.length;
    const isLocationsPage = pathname && pathname === '/locations';
    const isLocationDetail = pathname && pathname.startsWith('/locations/') && pathname.length > '/locations/'.length;

    if (isSystemHidden || isDynamicShowcase || isLocationsPage || isLocationDetail) {
        return null;
    }

    return (
        <>
            <Navbar />
            <FloatingChatbot />
        </>
    );
}
