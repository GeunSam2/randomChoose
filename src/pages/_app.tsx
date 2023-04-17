import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Misthios Home Page" />
      <meta name="keywords" content="Misthios" />
      <meta name="author" content="Misthios" />
    </ Head>
    <Component {...pageProps} />
  </>
}
