import { TelegramIcon } from '@/public/img';
import styles from './styles.module.scss';

export const TelegramButton = () => {
	return (
		<div className={styles.button}>
			<a
				href="https://t.me/Emilka768"
				className={styles.link}
				rel="noreferre"
				target="_blank"
				aria-label="Связаться в Telegram"
			>
				<TelegramIcon className={styles.image} />
			</a>
		</div>
	);
};
