import Head from 'next/head';

export const NextHead = ({ title, previewText, imageUrl, content }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={previewText} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={previewText} />
			<meta property="og:image" content={`http:${imageUrl}`} />
			<meta property="og:type" content={content} />
		</Head>
	);
};
