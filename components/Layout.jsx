import Header from '@components/Header'
import Footer from '@components/Footer'
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

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