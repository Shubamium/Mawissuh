/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'marimanagement.carrd.co',
			port: '',
			pathname: '/assets/**',
		  },
		],
	},
}

module.exports = nextConfig
