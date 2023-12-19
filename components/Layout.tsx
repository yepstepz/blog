import Header from '@components/Header';
import Footer from '@components/Footer';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import cs from 'classnames';
import { HCard } from '@components/Partials/microformats/h-card';

import { ThemeProvider } from './ThemeProvider';

export default function Layout({
  children,
  title,
  description,
  image = '',
  type = '',
  url,
  snippetData = '',
}) {
  return (
    <MDXProvider>
      <ThemeProvider>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} key="desc" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:title" content={title} />
          {type && <meta property="og:type" content={type} />}
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Блог yepstepz.io" />
          {image && <meta property="og:image" content={image} />}
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
          <link
            rel="webmention"
            href={process.env.NEXT_PUBLIC_WEBMENTION_ENDPOINT}
          />
          <link
            rel="pingback"
            href="https://webmention.io/yepstepz.io/xmlrpc"
          />
          <link
            rel="authorization_endpoint"
            href="https://indieauth.com/auth"
          />
          <link
            rel="token_endpoint"
            href="https://tokens.indieauth.com/token"
          />
          <link
            rel="alternate"
            href="https://yepstepz.io/rss.xml"
            type="application/rss+xml"
            title="Blog posts by yepstepz | RSS Feed"
          ></link>
          <link
            rel="alternate"
            type="text/mf2+html"
            href="https://yepstepz.io/notes"
          />
          {url && <link rel="canonical" href={url} />}
          {snippetData && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: snippetData }}
            />
          )}
        </Head>
        <Header />
        <main className={cs('content', 'container')}>
          <HCard visible={false} />
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </MDXProvider>
  );
}
