import { getAllCategories, getArticles } from '@/contentful';
import { BlogItem, InfoPanel } from '@/components';
import Image from 'next/image';
import { EmptyIcon } from '@/public/img';
import styles from './styles.module.scss';
import { getTranslations } from 'next-intl/server';

export default async function Blog(props) {
	const { locale } = await props.params;
	const searchParams = await props.searchParams;
	const searchQuery = searchParams?.search || '';
	const categoryQuery = searchParams?.category || '';

	const articles = await getArticles(searchQuery, categoryQuery);
	const categories = await getAllCategories();

	const t = await getTranslations({ locale, namespace: 'Blog' });

	return (
		<section className={`${styles.blog} blog__bg`}>
			<div className={styles.container}>
				<div className={styles.content}>
					{articles?.length === 0 ? (
						<div className={styles.empty}>
							<div className={styles['empty__title']}>
								{t('request')} {`«${searchQuery}» ${t('empty')}`}
							</div>
							<Image className={styles['empty__image']} src={EmptyIcon} alt="empty" />
						</div>
					) : (
						articles?.map((article) => (
							<BlogItem locale={locale} {...article.fields} key={article.fields.slug} />
						))
					)}
					<InfoPanel categories={categories} />
				</div>
			</div>
		</section>
	);
}
