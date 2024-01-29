/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: [
            'img.icons8.com',
            'icons8.com',
            'encrypted-tbn0.gstatic.com',
            'upload.wikimedia.org'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'icons8.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '**',
            },
        ]
    },
};

export default nextConfig;
