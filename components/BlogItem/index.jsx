import Image from 'next/image';
import styles from './BlogItem.module.scss';
import Link from 'next/link';
import { getBase64 } from '@/utils/getBase64';

export const BlogItem = async ({ locale, title, imageUrl, category, previewText, slug }) => {
	const imageTitle = imageUrl.fields.title;
	const imageWidth = imageUrl.fields.file.details.image.width;
	const imageHeight = imageUrl.fields.file.details.image.height;

	const blurData = await getBase64(`http:${imageUrl.fields.file.url}`);
	return (
		<Link href={`/${locale}/articles/${slug}`} className={styles.blogItem}>
			<div className={`${styles.blogItem__content} background-dark`}>
				<div className={styles['blogItem__content-image']}>
					<Image
						src={`http:${imageUrl.fields.file.url}`}
						alt={`http:${imageTitle}`}
						placeholder="blur"
						blurDataURL={blurData}
						width={imageWidth}
						height={imageHeight}
					/>
				</div>
				<div className={styles['blogItem__content-info']}>
					<i className={styles.circle}></i>
					<span className={styles['blogItem__content-category']}>{category}</span>
					<h3 className={styles['blogItem__content-title']}>{title}</h3>
					<div className={`${styles['blogItem__content-text']} dark-text_white`}>{previewText}</div>
				</div>
			</div>
		</Link>
	);
};
