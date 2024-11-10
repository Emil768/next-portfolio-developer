import { TelegramIcon } from '@/public/img';
import Image from 'next/image';
import styles from './styles.module.scss';

export const TelegramButton = () => {
	return (
		<div className={styles.button}>
			<a href="https://t.me/Emilka768" className={styles.link} rel="noreferre" target="_blank">
				<Image className={styles.image} src={TelegramIcon} alt="author link" />
			</a>
		</div>
	);
};
