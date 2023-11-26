import '@styles/globals.css';
import { Analytics } from '@components/Partials/Analytics';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const Inter = localFont({
  src: [
    {
      path: '../fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const isProduction = process.env.NODE_ENV === 'production';

function Application({ Component, pageProps }: AppProps) {
  return (
    <div className={Inter.className} >
      {isProduction ? <Analytics/> : null}
      <Component {...pageProps} />
    </div>
  )
};

export default Application;
