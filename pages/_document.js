import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2VZXD3EN0P" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VZXD3EN0P');
          `}
        </Script>
      </body>
    </Html>
  );
}
