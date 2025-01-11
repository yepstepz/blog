import fs from "fs";
import {join} from "path";
import {getMdxContent} from "@/lib/getMdxContent";

import { Article } from '@components/Article';
import { getPosts } from "@/lib/data/getPosts";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";

export default async function Posts () {
  const posts = await getPosts();
  return (
    <ul className="articles-list">
      {posts.map((post) => (
        <li className="block-article" key={post.slug}>
          {/* @ts-ignore */}
          <Article {...post} />
        </li>
      ))}
    </ul>
  )
}

export const generateMetadata = async ({ params }): Promise<Metadata> => getMetadata({
  title: 'Все статьи',
  description: 'Посмотреть все статьи из блога',
  alternates: {
    canonical: `/posts`,
  }
})
