/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com'
            }
        ]
    },
    reactStrictMode: true,
}

module.exports = nextConfig
