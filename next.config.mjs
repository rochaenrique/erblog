/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubuser.com',
				port: '',
				pathname: '/rochaenrique/blogposts/main/images/**',
			},
		],
	},
};

export default nextConfig;
