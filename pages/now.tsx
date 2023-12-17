import Layout from '@components/Layout';
// @ts-ignore
import { serialize } from 'next-mdx-remote/serialize';
// @ts-ignore
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// @ts-ignore
import remarkGfm from 'remark-gfm';
import { BookItem } from '@components/BookItem';
import rehypeStarryNight from '@microflash/rehype-starry-night';
import { HCard } from '@components/Partials/microformats/h-card';
// @ts-ignore
import { getAllNotes } from '../lib/notes.mts';

import { getBooks } from '../lib/books';
import { Note } from '@components/Note';

const components = {
  BookItem,
  Note,
};

export default function Now({
  frontMatter: { date },
  mdxSource,
  lastReadBook,
  currentBook,
  lastNote,
}) {
  return (
    <Layout
      title="Now"
      description="Page about me"
      url="https://yepstepz.io/now"
    >
      <div className="page__content block-article inner--sm h-entry">
        <HCard isAuthor={true} visible={false} />
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
            scope={{ lastReadBook, currentBook, lastNote }}
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
  let lastNote = {};

  try {
    lastNote = await getAllNotes().then((res) => res[0]);

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
      lastNote,
    },
  };
};
