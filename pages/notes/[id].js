import Layout from '@components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypeStarryNight from '@microflash/rehype-starry-night';
import { HCard } from 'microformats/h-card';
import { BridgyEndpoints } from 'microformats/bridgy-endpoints';
import { Star, Rating } from 'components/Partials/Rating';
import { GithubStar } from 'microformats/u-like-of/github';
import { TimePublished } from 'microformats/dt-published';

const components = {
  Star,
  Rating,
  GithubStar
};

export default function Note({
  frontMatter: { title, date, description, image, toMastodon, toGithub },
  mdxSource,
  url,
}) {
  return (
    <Layout title={title} description={description} url={url} image={image}>
      <article className="note h-entry inner--sm">
        <HCard isAuthor={true} />
        <div style={{ display: 'none' }}>
          <BridgyEndpoints toMastodon={toMastodon} toGithub={toGithub} />
          <a href={url} className="u-url"></a>
        </div>
        <div className="e-content">
          <MDXRemote {...mdxSource} components={components} />
        </div>
        <TimePublished date={date} align='right' />
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
  const url = 'https://yepstepz.io/' + path.join(CATEGORY, id);
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
