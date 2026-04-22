/** @type {import('next').NextConfig} */
const nextConfig = {
    // CORRECT POSITION: Top level, NOT inside experimental
    allowedDevOrigins: ['http://192.168.1.23:3000', 'http://localhost:3000'],

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },

    // Keep the rest if needed, but DO NOT put the key above inside here
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },

    // Adding CORS headers just in case for assets
    async headers() {
        return [
            {
                source: '/_next/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
        ];
    },
};

export default nextConfig;

