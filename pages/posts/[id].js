import Header from '@components/Header'
import Footer from '@components/Footer'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import SyntaxHighlighter from 'react-syntax-highlighter'

// import { getPostData, getAllPostIds } from '../../lib/posts'

export default function Post({ frontMatter: { title, date }, mdxSource }) {

  return (
    <>
      <Header />
      <main class="content page">
        <div class="inner">
          <div class="page__headline block-headline block-headline--center inner--sm">
            <h1 class="headline headline--main">{ title }</h1>
            <div class="page__caption body--secondary">
              <span> Updated { date }</span>
            </div>
          </div>
          <div class="page__content block-article inner--sm">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.mdx', '')
    }
  }))
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    id + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      id,
      mdxSource
    }
  }
}
