/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
});
const nextConfig = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['images.ctfassets.net'],
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.mp3$/,
			use: {
				loader: 'url-loader',
			},
		});
		return config;
	},
});

module.exports = withNextIntl(nextConfig);
