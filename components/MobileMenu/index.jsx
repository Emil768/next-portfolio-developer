'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';
import { ReactIcon } from '@/public/img';
import Image from 'next/image';
import { getMenuItems } from '@/utils/getMenuItems';

export const MobileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const pathname = usePathname();

	const locale = pathname.split('/')[1];

	const menuItems = useMemo(() => getMenuItems(locale), [locale]);

	const onSetMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.menu}>
			<Link
				href={`/${locale}`}
				className={
					pathname === `${locale}/`
						? [styles.icon, styles.icon_active].join(' ')
						: `${styles.icon} dark-icon_blue`
				}
			>
				<Image src={ReactIcon} alt="root page" />
			</Link>
			<div className={`${styles.content} dark-border_blue`}>
				<ul className={styles.list}>
					{menuItems.map(
						(item) =>
							!item.isIcon && (
								<li
									key={item.href}
									className={
										pathname === item.href
											? [styles.list__item, styles['list__item_active']].join(' ')
											: `${styles.list__item} dark-border_blue`
									}
								>
									<Link href={item.href} className={styles['list__item-link']}>
										{item.label}
									</Link>
								</li>
							),
					)}
				</ul>
				{/* <button className={[styles.button, isMenuOpen ? styles.open : ''].join(' ')} onClick={onSetMenuOpen}>
					{' '}
					<div />
					<div />
					<div />
				</button> */}
			</div>
		</div>
	);
};
