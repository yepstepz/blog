import Header from '@components/Header'
import Footer from '@components/Footer'
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import { ThemeProvider } from './ThemeProvider';

export default function Layout ({ children, title, description, image, type, url, snippetData }) {
  return (
    <MDXProvider>
      <ThemeProvider>
        <Head>
          <title>
            { title }
          </title>
          <meta
            name="description"
            content={description}
            key="desc"
          />
          <meta property="og:title" content={title} />
          {
            type &&
            <meta property="og:type" content={type} />
          }
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Блог yepstepz.io" />
          {
            image &&
            <meta property="og:image" content={image} />
          }
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="webmention" href="https://webmention.io/yepstepz.io/webmention" />
          <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
          <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
          <link rel="alternate" href="https://yepstepz.io/rss.xml" type="application/rss+xml" title="Blog posts by yepstepz | RSS Feed"></link>
          {
            url &&
            <link rel="canonical" href={url} />
          }
          {
            snippetData &&
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: snippetData }}
            />
          }
        </Head>
        <Header />
        <main className="content">
          { children }
        </main>
        <Footer />
      </ThemeProvider>
    </MDXProvider>
  )
}