/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.contentstack.io",
                port: "",
                pathname: "/v3/assets/**",
            },
        ],
    },
};

module.exports = nextConfig;
