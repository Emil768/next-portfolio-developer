import { Layout } from '@/components/Layout';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
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
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta name="theme-color" content="#90cdf4" />
				<meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
				<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
				<link rel="apple-touch-icon" href="/logo_96.png" />
				<link rel="manifest" href="manifest.json" />
				<meta name="yandex-verification" content="114440d425a2ae0f" />
				<meta name="google-site-verification" content="vbB-5GfCjJljgV3gG5JI1LbzVCR7jD-wlgEWpprJ0IU" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(98658043, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
					}}
				/>
			</head>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
