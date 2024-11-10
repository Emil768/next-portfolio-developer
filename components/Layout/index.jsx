import { ThemeProvider } from 'next-themes';
import { Header } from '../Header';
import styles from './styles.module.scss';
import { TelegramButton } from '../TelegramButton';

export const Layout = ({ children }) => (
	<ThemeProvider attribute="class" defaultTheme="dark">
		<div className={styles.layout}>
			<Header />
			{children}
			<TelegramButton />
		</div>
	</ThemeProvider>
);
