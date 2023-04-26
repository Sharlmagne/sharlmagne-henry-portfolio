import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/theme";

// const inter = Inter({ subsets: ['latin'] });

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Sharlmagne Henry</title>
            <meta name="description" content="Web portfolio for Sharlmagne Henry" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
}
