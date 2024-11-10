import Image from 'next/image';
import { EmptyIcon } from '@/public/img';
import { BlogItem, InfoPanel } from '..';
import styles from './styles.module.scss';

export const BlogWrapper = async ({ articles, query }) => {
	return (
		<section className={`${styles.blog} blog__bg`}>
			{/* <NextHead
				title="Blog | Emil Murahas"
				previewText="Блог о жизни фронтенд разработчика а также его познаниями за последние годы."
				content="website"
			/> */}
			<div className={styles.container}>
				<div className={styles.content}>
					{articles?.length === 0 ? (
						<div className={styles.empty}>
							<div className={styles['empty__title']}>По запросу {`«${query}» ничего не найдено!`}</div>
							<Image className={styles['empty__image']} src={EmptyIcon} alt="empty" />
						</div>
					) : (
						articles?.map((article) => <BlogItem {...article.fields} key={article.fields.slug} />)
					)}
					<InfoPanel articles={articles} />
				</div>
			</div>
		</section>
	);
};
