import Layout from '@components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypeStarryNight from '@microflash/rehype-starry-night';

const components = {};

export default function Note({
  frontMatter: { title, date, description, image },
  mdxSource,
  url,
}) {
  return (
    <Layout title={title} description={description} url={url} image={image}>
      <article className="note h-entry inner--sm">
        <time class="dt-published" datetime={date}>
          {new Date(date).toDateString()}
        </time>
        {/* h-card inside h-entry = i am the author */}
        <div className="h-card p-author">
          {/* h-card__u-url = the homepage of the site */}
          {/* h-card__u-photo = my name  */}
          <img
            width="48"
            height="48"
            className="title-avatar u-photo"
            src="/avatar.jpeg"
          />
          <a className="u-url" href="https://yepstepz.io/">
            {/* h-card__p-name = my name */}
            <span className="p-name">Tatiana Leonteva</span>
          </a>
        </div>
        <div style={{ display: 'none' }}>
          <a href="https://brid.gy/publish/mastodon"></a>
          {/* h-entry__canonical URL */}
          <a href={url} className="u-url"></a>
        </div>
        {/* h-entry__e-content denotes the body of the post */}
        <div className="e-content">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
    </Layout>
  );
}

const CATEGORY = 'notes';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(CATEGORY));
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const url = 'https://yepstepz.io/' + path.join('posts', id);
  const markdownWithMeta = fs.readFileSync(
    path.join(CATEGORY, id + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeStarryNight],
    },
  });

  return {
    props: {
      frontMatter,
      id,
      mdxSource,
      url,
    },
  };
};
