import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/img/faviconDark.svg" /> */}
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=optional"
          rel="stylesheet"
        ></link>
        <script
          async
          src="https://tag.pearldiver.io/ldc.js?pid=a273b60ed6a8365dae0924a0ba95e15e&aid=16de03f2"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2VZXD3EN0P"
          strategy="afterInteractive"
        />
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
