import client from '@/contentful';

async function getStaticPathsArticles() {
	const articles = [];
	const articleEntries = await client.getEntries({
		content_type: 'article',
		select: 'fields.slug',
	});

	articleEntries.items.forEach((item) => {
		articles.push({
			slug: item.fields.slug,
			lastModified: new Date(),
		});
	});
	return articles;
}

async function getStaticPathsCategories() {
	const categories = [];
	const categoryEntries = await client.getEntries({
		content_type: 'article',
		select: 'fields.category',
	});

	categoryEntries.items.forEach((item) => {
		categories.push({
			slug: item.fields.category,
			lastModified: new Date(),
		});
	});
	return categories;
}

export default async function sitemap() {
	const staticRoutes = [
		{
			url: 'https://emil-developer-portfolio.ru',
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: 'https://emil-developer-portfolio.ru/about',
			lastModified: new Date(),
			priority: 0.9,
		},
	];

	const dynamicArticles = await getStaticPathsArticles();
	const dynamicCategories = await getStaticPathsCategories();

	const articleRoutes = dynamicArticles.map((article) => ({
		url: `https://emil-developer-portfolio.ru/articles/${article.slug}`,
		lastModified: article.lastModified,
		priority: 1.0,
	}));

	const categoryRoutes = dynamicCategories.map((category) => ({
		url: `https://emil-developer-portfolio.ru/category/${category.slug}`,
		lastModified: category.lastModified,
		priority: 0.7,
	}));

	return [...staticRoutes, ...articleRoutes, ...categoryRoutes];
}
