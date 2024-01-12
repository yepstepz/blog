import Layout from '@components/Layout';

// @ts-ignore
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs';
import path from 'path';

import Image from '@components/Partials/Images';
import Gallery from '@components/Partials/Gallery';
import { Plate } from '@components/Partials/Plate';

import { WebmentionsForm } from '../../../components/Partials/WebmentionsForm';
import { getPostById } from '../../../lib/posts.tsx';

const components = {
  Image,
  Gallery,
};

// Generate the post, note that this is a "react server component"! it is allowed to be async
export default async function Post({
   params: { id },
 }: {
  params: { id: string };
}) {
  const {
    frontMatter: { title, date, description, image, published },
    mdxSource,
    url,
    snippetData,
    content
  } = await getPostById(id);

  console.log(mdxSource)

  return (
    <Layout
      title={title}
      description={description}
      url={url}
      image={image}
      type="article"
      snippetData={JSON.stringify(snippetData)}
    >
      <div className="page">
        <div className="page__headline block-headline block-headline--center inner--sm">
          <h1 className="headline headline--main">{title}</h1>
          <div className="page__caption body--secondary">
            <span> Пост создан {date}</span>
            {!published && <Plate title="Черновик" />}
          </div>
        </div>
        <div className="page__content block-article inner--sm">
          <MDXRemote source={content} />
          <WebmentionsForm postUrl={url} />
        </div>
      </div>
    </Layout>
  )
}

export async function generateStaticParams() {
  console.log('kek')
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  return files.map((filename) => ({
      id: filename.replace('.mdx', ''),
  }));
}

