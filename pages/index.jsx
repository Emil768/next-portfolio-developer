import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactIcon } from 'public/img';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import { NextHead } from '@/components/NextHead';

const Home = () => {
	useEffect(() => {
		AOS.init({ disable: 'phone' });
	}, []);
	return (
		<section className={`${styles.home} home__bg`}>
			<NextHead
				title="Emil Murahas | Portfolio"
				previewText="My name is Emil,I'm a front-end developer from Crimea! This is my portfolio."
				content="My name is Emil,I'm a front-end developer from Crimea! This is my portfolio."
			/>
			<div className={styles.container}>
				<div className={styles.home__content}>
					<div className={styles.home__info} data-aos="zoom-in" data-aos-duration="800">
						&#60;Hello, World! I’m
						<div className={styles.home__center}>
							<h1 className={styles.home__title} data-aos="zoom-in" data-aos-duration="2000">
								Emil Murahas
							</h1>
							<p className={styles.home__text} data-aos="zoom-in" data-aos-duration="2000">
								I do <span className={styles.langColor}>front-end</span> development and some
								<span className={styles.designColor}> UI design</span> 🎨
								<br /> Love 💖 JavaScript, ReactJS
								<span className={styles.home__image}>
									<Image src={ReactIcon} fill alt="react" />
								</span>
							</p>
						</div>
						<span data-aos="zoom-in" data-aos-duration="800">
							/ &#62;
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
