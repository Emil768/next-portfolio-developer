import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { RUIcon, USAIcon } from '@/public/img';
import styles from './styles.module.scss';

export const LangSwitcher = () => {
	const pathname = usePathname();
	const locale = pathname.split('/')[1];
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (newLocale) => {
		router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
		setIsOpen(false);
	};

	return (
		<div className={styles.dropdown}>
			<div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
				{locale === 'ru' ? (
					<span className={styles.flag}>
						<Image src={RUIcon} alt="RU" className={styles.flag__image} />
						<span className={styles.title}>RU</span>
					</span>
				) : (
					<span className={styles.flag}>
						<Image src={USAIcon} alt="EN" className={styles.flag__image} />
						<span className={styles.title}>EN</span>
					</span>
				)}
			</div>
			{isOpen && (
				<div className={styles.options}>
					<div className={styles.option} onClick={() => handleLanguageChange('ru')}>
						<Image src={RUIcon} alt="RU" className={styles.flag__image} />
						<span className={styles.title}>RU</span>
					</div>
					<div className={styles.option} onClick={() => handleLanguageChange('en')}>
						<Image src={USAIcon} alt="EN" className={styles.flag__image} />
						<span className={styles.title}>EN</span>
					</div>
				</div>
			)}
		</div>
	);
};
