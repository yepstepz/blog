import Layout from '@components/Layout';

import { getAllItems } from '../lib/utils';
import { SmallArticle } from '../components/Article/small-article';
import { HCard } from '../components/Partials/microformats/h-card';
import { MDXRemote } from 'next-mdx-remote';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import fs from 'fs';

export default function Post({ posts, mdxSource }) {
  const latestArticles = posts.slice(0, 5);

  return (
    <Layout
      title="Главная страница | Блог yepstepz.io"
      description="Пишу про себя, фронтенд и книги."
      image="/title-image.png"
      url="https://yepstepz.io"
    >
      <div className="page__content h-entry">
        <HCard isAuthor={true} visible={false} />
        <h1 className="p-name">Привет! Меня зовут Татьяна.</h1>
        <div className="e-content body">
          <MDXRemote {...mdxSource} />
        </div>
      </div>
      <ul className="m0 p0">
        {latestArticles.map(({ slug, date, title }) => {
          return <SmallArticle slug={slug} date={date} title={title} as="li" />;
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    join(process.cwd(), 'mdx-landings', 'main.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  const posts = getAllItems(['title', 'date', 'slug']);

  return {
    props: { posts, mdxSource },
  };
}
