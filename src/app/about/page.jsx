import React from 'react';
import { AuthorIcon } from 'public/img';
import Image from 'next/image';
import styles from './about.module.scss';

export default function () {
	return (
		<section className="home__bg">
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.info}>
						<h1 className={styles.title}>Murahas Emil</h1>
						<div className={styles.description}>
							<p className={styles.text}>
								<span className={styles.emoji}>🧑‍💻</span> Я занимаюсь{' '}
								<span className="yellow">frontend</span> разработкой и немного{' '}
								<span className="pre-purple">UI</span> дизайном
							</p>
							<p className={styles.text}>
								<span className={styles.emoji}>🏢</span> На данный момент работаю в компании{' '}
								<a
									className="yellow dashed-yellow"
									href="https://befree.ru/"
									rel="noreferre"
									target="_blank"
								>
									Befree
								</a>
							</p>
							<p className={styles.text}>
								<span className={styles.emoji}>🎲</span> <span className="red">NPM</span> плагин для
								компании{' '}
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
						<Image src={AuthorIcon} alt="author" priority className={styles.author__image} />
					</div>
				</div>
			</div>
		</section>
	);
}
