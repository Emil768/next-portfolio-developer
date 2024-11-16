'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		router.replace(`/ru`);
	}, []);

	return null;
}
