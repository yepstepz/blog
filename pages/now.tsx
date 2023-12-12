import Layout from '@components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { BookItem } from '@components/BookItem';
import rehypeStarryNight from '@microflash/rehype-starry-night';
import { HCard } from 'microformats/h-card';

import { getBooks } from '../lib/books';

const components = {
  BookItem,
};

export default function Now({
  frontMatter: { date },
  mdxSource,
  lastReadBook,
  currentBook,
}) {
  return (
    <Layout
      title="Now"
      description="Page about me"
      url="https://yepstepz.io/now"
    >
      <div className="page__content block-article inner--sm h-entry">
        <HCard visible={false} />
        <h1 className="p-name">Что я делаю сейчас?</h1>
        <i>
          Последний раз обновлено:{' '}
          <time className="dt-published" dateTime={date}>
            {date}
          </time>
        </i>
        <div className="e-content">
          <MDXRemote
            {...mdxSource}
            components={components}
            scope={{ lastReadBook, currentBook }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const markdownWithMeta = fs.readFileSync(
    join(process.cwd(), 'mdx-landings', 'now.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeStarryNight],
    },
  });

  let lastReadBook = {};
  let currentBook = {};

  try {
    await getBooks().then((data) => {
      lastReadBook = JSON.parse(data)?.rss?.channel?.item[0];
    });

    await getBooks('currently-reading').then((data) => {
      currentBook = JSON.parse(data)?.rss?.channel?.item;
    });
  } catch (e) {
    throw new Error(e);
  }

  return {
    props: {
      frontMatter,
      mdxSource,
      lastReadBook,
      currentBook,
    },
  };
};
