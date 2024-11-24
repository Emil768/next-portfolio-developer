import { getAllCategories, getArticles } from '@/contentful';
import { BlogItem, InfoPanel } from '@/components';
import Image from 'next/image';
import { EmptyIcon } from '@/public/img';
import styles from 'styles/home.module.scss';

export default async function Blog(props) {
	const searchParams = await props.searchParams;
	const searchQuery = searchParams?.search || '';
	const categoryQuery = searchParams?.category || '';

	const articles = await getArticles(searchQuery, categoryQuery);
	const categories = await getAllCategories();

	return (
		<section className={`${styles.blog} blog__bg`}>
			<div className={styles.container}>
				<div className={styles.content}>
					{articles?.length === 0 ? (
						<div className={styles.empty}>
							<div className={styles['empty__title']}>
								По вашему запросу {`«${searchQuery}»`} ничего не найдено
							</div>
							<Image className={styles['empty__image']} src={EmptyIcon} alt="empty" />
						</div>
					) : (
						articles?.map((article) => <BlogItem {...article.fields} key={article.fields.slug} />)
					)}
					<InfoPanel categories={categories} />
				</div>
			</div>
		</section>
	);
}
