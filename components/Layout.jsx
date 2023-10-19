import Header from '@components/Header'
import Footer from '@components/Footer'
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

export default function Layout ({ children, title, description, image, type, url }) {
  return (
    <MDXProvider>
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
        <meta property="og:type" content={type} />
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
      </Head>
      <Header />
      <main className="content">
        { children }
      </main>
      <Footer />
    </MDXProvider>
  )
}