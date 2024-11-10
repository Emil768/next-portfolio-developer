import { filterCategories } from '@/utils/filterCategories';
import { createClient } from 'contentful';

const client = createClient({
	space: process.env.NEXT_PUBLIC_CLIENT_SPACE,
	accessToken: process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN,
});

export const getArticles = async (searchQuery, category) => {
	const entriesOptions = {
		content_type: 'article',
		select: 'fields.title,fields.slug,fields.previewText,fields.imageUrl,fields.category',
	};

	if (category) {
		entriesOptions['fields.category'] = category;
	}

	const articles = await client.getEntries(entriesOptions);

	return searchQuery
		? articles?.items.filter((article) => article.fields.title.toLowerCase().includes(searchQuery.toLowerCase()))
		: articles?.items;
};

export const getAllCategories = async () => {
	const allCategoriesEntries = await client.getEntries({
		content_type: 'article',
		select: 'fields.category',
	});

	return filterCategories(allCategoriesEntries);
};

export const getArticle = async () => {
	const articles = await client.getEntries({
		content_type: 'article',
		select: 'fields.title,fields.slug,fields.previewText,fields.imageUrl,fields.category',
	});

	return articles?.items;
};

export const getEntryBySlug = async (slug) => {
	const articles = await client.getEntries({ content_type: 'article', 'fields.slug[match]': slug });
	return articles?.items[0]?.fields;
};

export default client;
