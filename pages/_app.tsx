import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/code/theme.css';
import { Analytics } from '@components/Partials/Analytics';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '@components/Layout.tsx';

const isProduction = process.env.NODE_ENV === 'production';

function Application({ Component, pageProps }: AppProps) {
  const { meta } = pageProps;
  return (
      <ThemeProvider>
        <Layout {...meta}>
          {isProduction ? <Analytics /> : null}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}

export default Application;
