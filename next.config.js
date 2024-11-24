/** @type {import('next').NextConfig} */

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
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
		config.module.rules.push(
			{
				test: /\.mp3$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		);
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
});

module.exports = nextConfig;
