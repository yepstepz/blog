import Layout from '@components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import Image from '@components/Partials/Images';
import Gallery from '@components/Partials/Gallery';
import { Plate } from '@components/Partials/Plate';
import rehypeStarryNight from '@microflash/rehype-starry-night';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

export const getPostById = async (id) => {
  const url = 'https://yepstepz.io/' + path.join('posts', id);
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', id + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const { date, lastEdit, title, image = '', description } = frontMatter;

  const formattedDate = new Date(date).toISOString();
  const formattedLastEdit = lastEdit ? new Date(lastEdit).toISOString() : '';

  const snippetData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    ...(image ? { image: [image] } : {}),
    datePublished: formattedDate,
    ...(formattedLastEdit ? { dateModified: formattedLastEdit } : {}),
    author: [
      {
        '@type': 'Person',
        name: 'Tatiana Leonteva',
      },
    ],
  };

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, [remarkToc, { tight: true, maxDepth: 5 }]],
      rehypePlugins: [rehypeStarryNight, rehypeSlug],
    },
  });
  return {
    frontMatter,
    id,
    mdxSource,
    url,
    snippetData,
    content
  };
}
