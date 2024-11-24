'use client';
import { memo, useEffect, useState } from 'react';
import { ArrowLeft } from '@/public/img';
import ThemeButton from '../ThemeButton';
import styles from './styles.module.scss';
import { usePathname, useRouter } from 'next/navigation';

export const Header = memo(() => {
	const [headerBlur, setHeaderBlur] = useState('');

	const router = useRouter();

	const pathname = usePathname();

	const onBack = () => {
		router.push('/');
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setHeaderBlur('blur');
			} else {
				setHeaderBlur('');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${[styles.header, headerBlur ? styles[headerBlur] : ''].join(' ')}`}>
			<div className={styles.container}>
				<div className={styles.content}>
					{pathname !== '/' && (
						<div className={styles.breadcrumbs}>
							<div className={styles.breadcrumbs__item} onClick={onBack}>
								<ArrowLeft />
								<span>Вернуться</span>
							</div>
						</div>
					)}
					<ThemeButton />
				</div>
			</div>
		</header>
	);
});
