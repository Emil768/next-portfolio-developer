import client from '@/contentful';

export const getStaticPathsArticles = async () => {
	const articles = [];
	const articleEntries = await client.getEntries({
		content_type: 'article',
		select: 'fields.slug',
	});

	articleEntries.items.forEach((item) => {
		articles.push({
			slug: item.fields.slug,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.6,
		});
	});

	return articles;
};

export const getStaticPathsCategories = async () => {
	const categories = [];
	const categoryEntries = await client.getEntries({
		content_type: 'article',
		select: 'fields.category',
	});

	categoryEntries.items.forEach((item) => {
		categories.push({
			slug: item.fields.category,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.6,
		});
	});

	return categories;
};

export async function GET(req, { params }) {
	const { locale } = await params;

	const staticRoutes = [
		{
			url: `https://emil-developer-portfolio.ru/${locale}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.6,
		},
		{
			url: `https://emil-developer-portfolio.ru/${locale}/blog`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `https://emil-developer-portfolio.ru/${locale}/contacts`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];

	const dynamicArticles = await getStaticPathsArticles();
	const dynamicCategories = await getStaticPathsCategories();

	const articleRoutes = dynamicArticles.map((article) => ({
		url: `https://emil-developer-portfolio.ru/${locale}/articles/${article.slug}`,
		lastModified: article.lastModified,
		changeFrequency: article.changeFrequency,
		priority: article.priority,
	}));

	const categoryRoutes = dynamicCategories.map((category) => ({
		url: `https://emil-developer-portfolio.ru/${locale}/category/${category.slug}`,
		lastModified: category.lastModified,
		changeFrequency: category.changeFrequency,
		priority: category.priority,
	}));

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticRoutes, ...articleRoutes, ...categoryRoutes]
	.map(
		({ url, lastModified }) => `
<url>
<loc>${url}</loc>
<lastmod>${lastModified.toISOString()}</lastmod>
</url>`,
	)
	.join('')}
</urlset>`;

	return new Response(sitemap, {
		status: 200,
		headers: {
			'Content-Type': 'text/xml',
		},
	});
}
