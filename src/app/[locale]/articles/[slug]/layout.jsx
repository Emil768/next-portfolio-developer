import { getEntryBySlug } from '@/contentful';

export async function generateMetadata({ params }) {
	const slug = (await params).slug;

	const article = await getEntryBySlug(slug);

	return {
		title: article?.title,
		description: article?.previewText,
		openGraph: {
			images: 'http:' + article?.imageUrl.fields.file.url,
		},
	};
}

export default async function Article({ children }) {
	return <>{children}</>;
}
