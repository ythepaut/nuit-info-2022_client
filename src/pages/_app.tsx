import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <title>SIDA UwU 👉👈</title>

                <meta name="subject" content="SIDA UwU 👉👈" />
                <meta name="description" content="A game to play against STDs" />
                <meta name="author" content="CMI INFO" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nuit-info.ythepaut.com/" />
                <meta property="og:title" content="SIDA UwU 👉👈" />
                <meta property="og:description" content="A game to play against STDs" />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nuit-info.ythepaut.com/" />
                <meta property="twitter:title" content="SIDA UwU 👉👈" />
                <meta property="twitter:description" content="A game to play against STDs" />
                <meta property="twitter:image" content="/assets/banner.png" />
            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} key={router.route} />
            </NextIntlProvider>
        </>
    );
}
