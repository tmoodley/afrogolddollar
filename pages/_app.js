import "@/styles/bootstrap.min.css";
import "@/styles/animate.min.css";
import "@/styles/fontawesome-all.min.css";
import "@/styles/react-odometer-theme.css";
import "@/styles/default.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import iconLight from "../public/img/faviconDark.svg";
import iconDark from "../public/img/favicon.svg";
import Head from "next/head";

const bootstrapJs = dynamic(import("bootstrap/dist/js/bootstrap.bundle.min"), {
  ssr: false,
  loading: () => 0,
});

export const metadata = {
  title: {
    default: "Ndeipi - NDEIPI COIN",
    template: "%s - Ndeipi - NDEIPI COIN",
  },
  description: "Ndeipi - Blockchain P2P Banking and Payments Solution.",
};

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href={iconLight.src}
          media="(prefers-color-scheme: light)"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href={iconDark.src}
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
