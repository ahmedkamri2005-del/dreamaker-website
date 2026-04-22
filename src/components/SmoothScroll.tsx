'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }: { children: any }) {
    return (
        <ReactLenis root options={{
            lerp: 0.07, // Added more glide
            wheelMultiplier: 1, // Standard speed
            smoothWheel: true,
            syncTouch: true,
        } as any}>
            {children}
        </ReactLenis>
    )
}
