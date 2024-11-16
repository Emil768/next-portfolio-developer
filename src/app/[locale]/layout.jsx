import { Layout } from '@/components/Layout';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import LangSetter from '../../../components/LangSetter';
import './global.scss';

export const metadata = {
	title: 'Emil Murahas | Portfolio',
	description: "My name is Emil,I'm a front-end developer from Crimea! This is my portfolio.",
};

export default async function RootLayout({ children, params }) {
	const { locale } = await params;

	if (!routing.locales.includes(locale)) {
		redirect('/ru');
	}

	setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<>
			<LangSetter locale={locale} />
			<NextIntlClientProvider messages={messages}>
				<Layout>{children}</Layout>
			</NextIntlClientProvider>
		</>
	);
}
