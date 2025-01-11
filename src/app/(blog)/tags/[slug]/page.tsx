import { getTags } from "@/lib/data/getTags";
import { getEntitiesByTag } from "@/lib/data/getEntitiesByTag";
import NoteComponent from "@components/Note";
import Article from "@components/Article";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";

const renderEntity = (entity) => {
  if (entity.type === 'post') {
    return <Article {...entity} />
  }

  return <NoteComponent embedded {...entity} />
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params


  const entities = await getEntitiesByTag({ tag: slug })

    return (
      <ul className="articles-list">
        {entities.map((entity) => (
          <li key={entity.slug} className="block-article">
            {renderEntity(entity)}
          </li>
        ))}
      </ul>)

  // ...
}

export async function generateStaticParams() {
  const tags = await getTags();
  return [...tags].map((tag) => ({slug: tag}))
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { slug } = await params;
  const description = `Все статьи и посты по тегу ${slug}`;
  return getMetadata({
    title: `Тег ${slug}`,
    description,
    alternates: {
      canonical: `/tags/${slug}`,
    }
  })
}
