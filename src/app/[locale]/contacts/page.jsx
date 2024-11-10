'use client';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import emailjs from 'emailjs-com';
import notificationSound from '@/public/sounds/notification.mp3';
import useSound from 'use-sound';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export default function Contacts() {
	const [loading, setLoading] = useState(false);
	const [play] = useSound(notificationSound);

	const t = useTranslations('Contacts');

	const sendEmail = (e, setLoading, play) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				e.target,
				process.env.NEXT_PUBLIC_USER_ID,
			)
			.then(
				(result) => {
					setLoading(false);
					play();
					alert('Thanks!');
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
					alert('Something went wrong...');
				},
			);
	};

	return (
		<section className={`${styles.contacts} contact__bg`}>
			<div className={styles.container}>
				<h1 className={styles.title}>{t('title')}</h1>
				<p className={styles.text}>{t('description')}</p>
				<div className={styles.loader}>
					<ClipLoader loading={loading} color="#40b0ee" />
				</div>
				<div className={styles.content}>
					<form className={styles.form} onSubmit={(e) => sendEmail(e, setLoading, play)}>
						<input
							className={`${styles.field} background-dark background-dark__input`}
							type="text"
							placeholder={t('firstname')}
							name="name"
							required
						/>
						<input
							className={`${styles.field} background-dark background-dark__input`}
							type="text"
							placeholder={t('lastname')}
							name="surname"
							required
						/>
						<input
							className={`${styles.field} background-dark background-dark__input`}
							type="email"
							placeholder="E-mail"
							name="email"
							required
						/>
						<textarea
							className={`${styles.textarea} background-dark background-dark__input`}
							cols="30"
							rows="10"
							placeholder={t('message')}
							name="message"
							required
						></textarea>
						<button className={`${styles.button} background-dark background-dark__button`} type="submit">
							{t('send')}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
