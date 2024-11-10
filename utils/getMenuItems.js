import { ReactIcon } from '@/public/img';
import Image from 'next/image';

export const getMenuItems = (locale) => [
	{ href: `/${locale}`, label: <Image src={ReactIcon} fill alt="react" />, isIcon: true },
	{ href: `/${locale}/works`, label: 'works', active: 'link-right__active', hover: 'link-right' },
	{ href: `/${locale}/contacts`, label: 'contacts', active: 'link-left__active', hover: 'link-left' },
	{ href: `/${locale}/blog`, label: 'blog', active: 'link-right__active', hover: 'link-right' },
];
