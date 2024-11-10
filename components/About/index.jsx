import { AuthorIcon, ArrowIcon } from 'public/img';
import Image from 'next/image';
import { SKILLS } from '@/constants';
import { useTranslations } from 'next-intl';
import styles from './styles..module.scss';

export const About = () => {
	const t = useTranslations('About');
	return (
		<div className={styles.about}>
			<div className={styles.header}></div>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.author}>
						<Image
							data-aos="flip-left"
							data-aos-duration="1500"
							fill
							priority={true}
							src={AuthorIcon}
							alt="author"
						/>
					</div>
				</div>
			</div>

			{/* <div className={styles.skills}>
				<h2 className={styles.skills__title} data-aos="zoom-in-down">
					{t('stack')}
				</h2>
				<ul className={styles.skills__list}>
					{SKILLS.map((skill, index) => (
						<li className={`${styles.skill} skill-dark`} key={index}>
							{skill}
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
};
