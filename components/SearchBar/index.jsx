'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export const SearchBar = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const t = useTranslations('Blog');

	const onSetSearchArticle = useDebouncedCallback((text) => {
		const params = new URLSearchParams(searchParams);
		if (text) {
			params.set('search', text);
		} else {
			params.delete('search');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className={styles.searchbar}>
			<input
				className={`${styles.searchbar__input} background-dark background-dark__input`}
				onChange={(e) => onSetSearchArticle(e.target.value)}
				placeholder={t('search')}
				maxLength={30}
				type="text"
				defaultValue={searchParams.get('query')?.toString()}
			/>
		</div>
	);
};
