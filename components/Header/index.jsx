'use client';
import { memo, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeButton from '../ThemeButton';
import { useTranslations } from 'next-intl';
import { LangSwitcher } from '../LangSwitcher';
import { MobileMenu } from '../MobileMenu';
import { getMenuItems } from '@/utils/getMenuItems';
import styles from './styles.module.scss';

export const Header = memo(() => {
	const [headerBlur, setHeaderBlur] = useState('');
	const pathname = usePathname();
	const t = useTranslations('Header');

	const locale = pathname.split('/')[1];

	const menuItems = useMemo(() => getMenuItems(locale), [locale]);

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
				<div className={styles.header__content}>
					<MobileMenu />
					<ul className={`${styles.header__list}`}>
						{menuItems.map((item) => (
							<li key={item.href} className={styles['header__list-item']}>
								<Link
									href={item.href}
									className={
										pathname === item.href
											? [styles['header__list-link'], styles[item.active]].join(' ')
											: [styles['header__list-link'], styles[item.hover]].join(' ')
									}
								>
									{item.isIcon ? (
										<span
											className={
												pathname === item.href
													? [styles.icon, styles.icon_active].join(' ')
													: `${styles.icon} dark-icon_blue`
											}
										>
											{item.label}
										</span>
									) : (
										t(item.label)
									)}
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.header__switchers}>
						<LangSwitcher />
						<ThemeButton />
					</div>
				</div>
			</div>
		</header>
	);
});
