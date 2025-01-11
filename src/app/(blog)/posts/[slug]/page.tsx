import fs from "fs";
import { join } from "path";
import {getMdxContent, getParsedMdxContent} from '@/lib/getMdxContent';
import { Plate } from "@components/Partials/Plate";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";
import Script from 'next/script'

export default async function Page({
 params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { content, frontmatter } = await getParsedMdxContent(`src/posts/${slug}.mdx`);
  const { title, date, published, lastEdit, description } = frontmatter;

  const formattedDate = new Date(date).toISOString();
  const formattedLastEdit = lastEdit ? new Date(lastEdit).toISOString() : '';

  const snippetData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: `${process.env.HOME_URL}/metadata/image?title=${title}`,
    datePublished: formattedDate,
    ...(formattedLastEdit ? { dateModified: formattedLastEdit } : {}),
    author: [
      {
        '@type': 'Person',
        name: 'Tatiana Leonteva',
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        id="snippet-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snippetData) }}
      />
      <div className="page">
        <div className="page__headline block-headline block-headline--center inner--sm">
          <h1 className="headline headline--main">{title}</h1>
          <div className="page__caption body--secondary">
            <span> Пост создан {date}</span>
            {!published && <Plate title="Черновик"/>}
          </div>
        </div>
        <div className="page__content block-article inner--sm">
          {content}
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  const slugs = fs.readdirSync(join(process.cwd(), 'src', 'posts'))
    .map((url) => {
      const name = url.split('.mdx')[0];
      return {
        slug: name
      }
    });
  return slugs
}

export const dynamicParams = false

export const generateMetadata = async ({params}): Promise<Metadata> => {
  const { slug } = await params;
  const { frontmatter } = getMdxContent(`src/posts/${slug}.mdx`);
  return getMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: `/posts/${slug}`,
    },
    openGraph: {
      type: 'article'
    }
  })
}
