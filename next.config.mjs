/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/v1/:path*/',
                destination: `/cubekms-dev2.hecto.co.kr/:path*/`,
            },
        ];
    },
    trailingSlash: true,
};

export default nextConfig;
