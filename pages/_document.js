import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#90cdf4" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        <link rel="shortcut icon" type="image/x-icon" href="/code.ico" />
        <link rel="apple-touch-icon" href="/logo_96.png" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
