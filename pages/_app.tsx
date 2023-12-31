import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/code/theme.css';
import { Analytics } from '@components/Partials/Analytics';
import type { AppProps } from 'next/app';

const isProduction = process.env.NODE_ENV === 'production';

function Application({ Component, pageProps }: AppProps) {
  return (
    <div>
      {isProduction ? <Analytics /> : null}
      <Component {...pageProps} />
    </div>
  );
}

export default Application;
