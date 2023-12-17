import Layout from '@components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypeStarryNight from '@microflash/rehype-starry-night';
import { HCard } from 'components/Partials/microformats/h-card';
import { BridgyEndpoints } from 'components/Partials/microformats/bridgy-endpoints';
import { TimePublished } from 'components/Partials/microformats/dt-published';
import { noteComponents } from '../../components/Note/components';
import { NotesContent } from '../../components/Note/notes-content';

export default function Note({
  frontMatter: { title, date, description, image, toMastodon, toGithub },
  mdxSource,
  url,
}) {
  return (
    <Layout title={title} description={description} url={url} image={image}>
      <NotesContent className="note h-entry">
        <div className="inner--sm">
          <HCard isAuthor={true} />
          <div style={{ display: 'none' }}>
            <BridgyEndpoints toMastodon={toMastodon} toGithub={toGithub} />
            <a href={url} className="u-url"></a>
          </div>
          <div className="e-content">
            <MDXRemote {...mdxSource} components={noteComponents} />
          </div>
          <TimePublished date={date} align="right" />
        </div>
      </NotesContent>
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
