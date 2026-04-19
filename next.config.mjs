/** @type {import('next').NextConfig} */
const nextConfig = {
    // CORRECT POSITION: Top level, NOT inside experimental
    allowedDevOrigins: ['http://192.168.1.23:3000', 'http://localhost:3000'],

    // Keep the rest if needed, but DO NOT put the key above inside here
    experimental: {
        // leave empty or put other valid keys
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

