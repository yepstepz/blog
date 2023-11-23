import Layout from '@components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from "remark-gfm";
import Image from '@components/Partials/Images';
import Gallery from '@components/Partials/Gallery';
import { Plate } from '@components/Partials/Plate';
import rehypeStarryNight from "@microflash/rehype-starry-night"

const components = {
  Image,
  Gallery
};

export default function Post({
  frontMatter: { title, date, description, image, published }, 
  mdxSource, 
  url,
  snippetData
}) {
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
            {
              !published && <Plate title="Черновик" />
            }
          </div>
        </div>
        <div className="page__content block-article inner--sm">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.mdx', '')
    }
  }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async ({ params: { id } }) => {
  const url = 'https://yepstepz.io/' + path.join('posts', id)
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    id + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const { date, lastEdit, title, image = '', description } = frontMatter;

  const formattedDate = new Date(date).toISOString();
  const formattedLastEdit = lastEdit ? new Date(lastEdit).toISOString() : '';

  const snippetData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    ...(image ? {"image": [ image ]} : {}),
    "datePublished": formattedDate,
    ...(formattedLastEdit ? {"dateModified": formattedLastEdit} : {}),
    "author": [{
      "@type": "Person",
      "name": "Tatiana Leonteva",
    }]
  }

  const mdxSource = await serialize(content,  {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeStarryNight]
    }
  })
  return {
    props: {
      frontMatter,
      id,
      mdxSource,
      url,
      snippetData
    }
  }
}
