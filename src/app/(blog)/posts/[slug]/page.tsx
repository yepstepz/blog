import fs from "fs";
import { join } from "path";
import { compileMDX } from 'next-mdx-remote/rsc';
import {getMdxContent, getParsedMdxContent} from '@/lib/getMdxContent';
import { mdxComponents } from "@/mdx-components";
import remarkGfm from 'remark-gfm';
import { Plate } from "@components/Partials/Plate";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";

export default async function Page({
 params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { content, frontmatter } = await getParsedMdxContent(`src/posts/${slug}.mdx`);
  const { title, date, published } = frontmatter;
  return (
    <div className="page">
      <div className="page__headline block-headline block-headline--center inner--sm">
        <h1 className="headline headline--main">{title}</h1>
        <div className="page__caption body--secondary">
          <span> Пост создан {date}</span>
          {!published && <Plate title="Черновик" />}
        </div>
      </div>
      <div className="page__content block-article inner--sm">
        { content }
      </div>
    </div>
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

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { slug } = await params;
  const { frontmatter } = getMdxContent(`src/posts/${slug}.mdx`);
  return getMetadata({
    title: frontmatter.title,
    description: frontmatter.description
  })
}
