import { PROJECTS } from '@/constants';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export const Projects = () => {
	const t = useTranslations('Projects');
	return (
		<div className={styles.content}>
			<h2 className={styles.title} data-aos="zoom-in-down">
				{t('title')}
			</h2>
			<p className={styles.subtitle} data-aos="zoom-in">
				{t('description')}
			</p>
			<div className={styles.projects}>
				{PROJECTS.map((project, index) => (
					<div className={styles.project} key={index}>
						<div
							className={`${styles.project__info} background-dark`}
							data-aos="zoom-in"
							data-aos-duration="1200"
						>
							<div className={styles.project__top}>
								<h3 className={styles.project__title}>
									{project.title} {project.emoji}
								</h3>
								<div className={styles.project__links}>
									<a
										href={project.link}
										target="_blank"
										rel="noreferre"
										aria-labelledby={`go-to-link-default-${index}`}
										className={[styles.project__link, styles['project__link-default']].join(' ')}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="25"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
										</svg>
										<i className={styles['project__link-text']} id={`go-to-link-default-${index}`}>
											Открыть сайт
											{/* Open link deploy */}
										</i>
									</a>
									<a
										href={project.youtube}
										target="_blank"
										rel="noreferre"
										aria-labelledby={`go-to-link-youtube-${index}`}
										className={[styles.project__link, styles['project__link-youtube']].join(' ')}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="25"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
										</svg>
										<i className={styles['project__link-text']} id={`go-to-link-youtube-${index}`}>
											Открыть на youtube
											{/* Open link on youtube */}
										</i>
									</a>
									<a
										href={project.gitLink}
										target="_blank"
										rel="noreferre"
										aria-labelledby={`go-to-link-github-${index}`}
										className={[styles.project__link, styles['project__link-github']].join(' ')}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="25"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
										</svg>
										<i className={styles['project__link-text']} id={`go-to-link-github-${index}`}>
											Открыть на github
											{/* Open link on github */}
										</i>
									</a>
								</div>
							</div>
							<p className={styles['project__text']}> {t(`works.${project.title}`)}</p>
							<ul className={styles.tags}>
								{project.tags.map((tag, index) => (
									<li className={`${styles.tag} skill-dark`} key={index}>
										{tag}
									</li>
								))}
							</ul>
						</div>
						<div className={styles['project__preview']} data-aos="zoom-in" data-aos-duration="1000">
							<Image fill unoptimized={true} src={project.preview} alt="project preview" />
							<div className={`${styles['project__overlay']} overlay-dark`}>
								<a href={project.link} target="_blank" rel="noreferre">
									{t('go')}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
