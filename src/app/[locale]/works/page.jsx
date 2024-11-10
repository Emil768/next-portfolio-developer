'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.scss';
import { Projects } from '@/components/Projects';

export default function Works() {
	useEffect(() => {
		AOS.init({ disable: 'phone' });
	}, []);
	return (
		<section className="works__bg">
			<div className={styles.container}>
				<Projects />
			</div>
		</section>
	);
}
