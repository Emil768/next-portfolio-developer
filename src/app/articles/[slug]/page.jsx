import Image from 'next/image';
import Link from 'next/link';
import { ImageZoom } from '@/components/ImageZoom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEntryBySlug } from '@/contentful';
import { OPTIONS_DATE } from '@/constants';
import { getBase64 } from '@/utils/getBase64';
import styles from './styles.module.scss';

export default async function Article({ params }) {
	const { slug } = await params;
	const article = await getEntryBySlug(slug);

	const dateLocale = 'ru-RU';

	return (
		<div className={`${styles.article} overlay-dark`}>
			<div className={`${styles.content}`}>
				<div className={styles.info}>
					<div className={[styles.category].join(' ')}>
						<i className={styles.category__circle}></i>
						<Link href={`/?category=${article?.category}`} className={styles.category__title}>
							{article?.category}
						</Link>
					</div>
					<div className={styles.date}>
						{new Date(article?.date).toLocaleDateString(dateLocale, OPTIONS_DATE)}
					</div>
				</div>
				<h3 className={styles.title}>{article?.title}</h3>
				<div className={styles.text}>
					{documentToReactComponents(article?.text, {
						renderNode: {
							'embedded-asset-block': async (node) => {
								const imageUrl = node.data.target.fields.file.url;
								const imageTitle = node.data.target.fields.title;
								const imageWidth = node.data.target.fields.file.details.image.width;
								const imageHeight = node.data.target.fields.file.details.image.height;

								const blurData = await getBase64(`http:${imageUrl}`);
								return (
									<div className="rich-text">
										<ImageZoom
											component={
												<Image
													alt={`http:${imageTitle}`}
													src={`http:${imageUrl}`}
													className="rich-text__image"
													placeholder="blur"
													blurDataURL={blurData}
													width={imageWidth}
													height={imageHeight}
												/>
											}
										/>
									</div>
								);
							},
							renderText: (text) => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
						},
					})}
				</div>
			</div>
		</div>
	);
}
