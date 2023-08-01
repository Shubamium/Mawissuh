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
		domains: ['cdn.sanity.io']
	},
}

module.exports = nextConfig
