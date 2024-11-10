'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { AuthorIcon } from 'public/img';
import Image from 'next/image';
import styles from './home.module.scss';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';

export default function () {
	useEffect(() => {
		AOS.init({ disable: 'phone' });
	}, []);

	const t = useTranslations('Home');

	return (
		<section className="home__bg">
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.info}>
						<h1 className={styles.title} data-aos="zoom-in" data-aos-duration="1500">
							Emil Murahas
						</h1>
						<div className={styles.description}>
							<p className={styles.text} data-aos="fade-left" data-aos-duration="2000">
								🧑‍💻 {t('doing')}
								<span className="purple"> frontend </span> {t('develop')}{' '}
								<span className="purple">{t('design')}</span>
							</p>
							<p className={styles.text} data-aos="fade-left" data-aos-duration="2500">
								🏢 {t('company')}{' '}
								<a
									className="yellow dashed-yellow"
									href="https://befree.ru/"
									rel="noreferre"
									target="_blank"
								>
									Befree
								</a>
							</p>
							<p className={styles.text} data-aos="fade-left" data-aos-duration="3000">
								🎲 <span className="red">NPM</span> {t('plugin')}{' '}
								<a
									className="red dashed-red"
									href="https://www.npmjs.com/package/eslint-plugin-t1-group"
									rel="noreferre"
									target="_blank"
								>
									T1
								</a>
							</p>
						</div>
					</div>
					<div className={styles.author}>
						<Image
							data-aos="flip-left"
							data-aos-duration="1500"
							src={AuthorIcon}
							alt="author"
							priority
							className={styles.author__image}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
