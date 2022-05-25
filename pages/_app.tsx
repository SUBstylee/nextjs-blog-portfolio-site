import { useEffect, useState } from 'react';
import { Layout } from '../components/blog';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // ********** Code below was just to test something out that I ended up using elsewhere.
  // if (globalThis?.window?.location.pathname === '/portfolio') {
  //   return (
  //     <div>this is working!</div>
  //   )
  // }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp
