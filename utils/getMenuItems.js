import { ReactIcon } from '@/public/img';
import Image from 'next/image';

export const getMenuItems = () => [
	{ href: `/`, label: <Image src={ReactIcon} fill alt="react" />, isIcon: true },
	{ href: `/works`, label: 'works', active: 'link-right__active', hover: 'link-right' },
	{ href: `/contacts`, label: 'contacts', active: 'link-left__active', hover: 'link-left' },
	{ href: `/blog`, label: 'blog', active: 'link-right__active', hover: 'link-right' },
];
