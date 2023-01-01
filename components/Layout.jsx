import Header from '@components/Header'
import Footer from '@components/Footer'
import ResponsiveImage from './Partials/Images';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

const components = {
  img: ResponsiveImage,
};


export default function Layout ({ children, title, description, image, type, url }) {
  return (
    <MDXProvider components={components}>
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
        {
          image &&
          <meta property="og:image" content={image} />
        }
      </Head>
      <Header />
      <main className="content">
        { children }
      </main>
      <Footer />
    </MDXProvider>
  )
}