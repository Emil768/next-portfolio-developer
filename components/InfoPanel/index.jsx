import { SearchBar } from '../SearchBar';
import { Categories } from '../Categories';
import styles from './InfoPanel.module.scss';
import Link from 'next/link';

export const InfoPanel = ({ categories }) => {
	return (
		<div className={styles['info-panel']}>
			<SearchBar />
			<Categories categories={categories} />
			<Link href="/about" className={`white ${styles.link}`}>
				ОБ АВТОРЕ
			</Link>
		</div>
	);
};
