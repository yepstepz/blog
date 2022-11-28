import Header from '@components/Header'
import Footer from '@components/Footer'
import ResponsiveImage from './Partials/Images';
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

const components = {
  img: ResponsiveImage,
};


export default function Layout ({ children }) {
  return (
    <MDXProvider components={components}>
      <Header />
      <main className="content">
        <div className="inner">
        { children }
        </div>
      </main>
      <Footer />
    </MDXProvider>
  )
}