import type { AppProps } from 'next/app'
import { SSRProvider } from 'react-bootstrap';

import '../styles/globals.scss'
import '../public/css/rotating-words.css';
import Script from 'next/script';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return (
     <>
       <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
       <SSRProvider><Component {...pageProps} /></SSRProvider>
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
               integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
               crossOrigin="anonymous"/>
     </>
  )
}
