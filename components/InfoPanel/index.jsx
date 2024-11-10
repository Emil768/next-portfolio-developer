import { SearchBar } from '../SearchBar';
import { Categories } from '../Categories';
import styles from './InfoPanel.module.scss';

export const InfoPanel = ({ categories }) => {
	return (
		<div className={styles['info-panel']}>
			<SearchBar />
			<Categories categories={categories} />
		</div>
	);
};
