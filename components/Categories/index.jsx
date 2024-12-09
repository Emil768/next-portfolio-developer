'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { getQueryParams } from '@/utils/getQueryParams';
import styles from './styles.module.scss';

export const Categories = ({ categories }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const { replace, push } = useRouter();

	const search = searchParams.get('category');

	const onSetCategoryQueryClick = (key) => {
		const params = getQueryParams(searchParams, key);

		replace(`${pathname}?${params.toString()}`);
	};

	const onBack = () => {
		push('/');
	};

	return (
		<div className={styles.categories}>
			<div className={`${styles.content} background-dark`}>
				<div className={styles.title} onClick={onBack}>
					Категории
				</div>
				<ul className={styles.list}>
					{[...categories.entries()].map(([key, value]) => {
						return (
							<li
								className={
									search === key
										? [styles.category, styles.category_active].join(' ')
										: styles.category
								}
								key={key}
							>
								<div className={styles.category__link} onClick={() => onSetCategoryQueryClick(key)}>
									<span className={styles['category__link-title']}>
										<i className={styles['category__link-circle']}></i>
										{key}
									</span>
									<span className={styles['category__link-count']}>{value}</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
