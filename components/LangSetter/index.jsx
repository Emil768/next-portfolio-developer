'use client';

import { useEffect } from 'react';

export default function LangSetter({ locale }) {
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	return null;
}
