export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning>
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
			<body>{children}</body>
		</html>
	);
}
