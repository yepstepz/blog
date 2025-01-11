import cs from 'classnames';

import '@styles/fonts.css';
import '@app/globals.css';
import '@styles/code/theme.css';
import '@styles/content/tables.css';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { HCard } from '@components/Partials/microformats/h-card';
import { ThemeProvider } from "@components/ThemeProvider";
import { Analytics } from "@components/Partials/Analytics";

const isProduction = process.env.NODE_ENV === 'production';

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
    <head>
      <link
        rel="webmention"
        href={process.env.NEXT_PUBLIC_WEBMENTION_ENDPOINT}
      />
      <link rel="pingback" href="https://webmention.io/yepstepz.io/xmlrpc"/>
      <link rel="authorization_endpoint" href="https://indieauth.com/auth"/>
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token"/>
      <link
        rel="alternate"
        type="text/mf2+html"
        href="https://yepstepz.io/notes"
      />
      <link rel="alternate" type="application/rss+xml" href="https://yepstepz.io/rss/posts" title="Posts RSS"/>
      <link rel="alternate" type="application/rss+xml" href="https://yepstepz.io/rss/notes" title="Notes RSS"/>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      {isProduction ? <Analytics /> : null}
    </head>
    <body>
    <ThemeProvider>
      <Header/>
      <main className={cs('content', 'container')}>
        <HCard isAuthor={true} visible={false}/>
        {children}
      </main>
      <Footer/>
    </ThemeProvider>
    </body>
    </html>
  );
}
