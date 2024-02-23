import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/code/theme.css';
import { Analytics } from '@components/Partials/Analytics';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/ThemeProvider';

const isProduction = process.env.NODE_ENV === 'production';

function Application({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {isProduction ? <Analytics /> : null}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application;
