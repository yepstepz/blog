import '@styles/globals.css';
import { Analytics } from '@components/Partials/Analytics';
import type { AppProps } from 'next/app';

const isProduction = process.env.NODE_ENV === 'production';

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      {isProduction ? <Analytics /> : null}
      <Component {...pageProps} />
    </>
  );
}

export default Application;
