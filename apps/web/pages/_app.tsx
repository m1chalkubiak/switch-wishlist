import 'raf/polyfill';
import 'setimmediate';

import { Provider } from 'app/provider';
import Head from 'next/head';
import React from 'react';
import type { SolitoAppProps } from 'solito';

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Switch Wishlist</title>
        <meta name="description" content="Nintendo Switch games wishlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
