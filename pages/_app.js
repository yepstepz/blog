import '@styles/globals.css';
import { Analytics } from '@components/Partials/Analytics';

const isProduction = process.env.NODE_ENV === 'production';

function Application({ Component, pageProps }) {
  return (
    <>
      {isProduction ? <Analytics /> : null}
      <Component {...pageProps} />
    </>
  );
}

export default Application;
