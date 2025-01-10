import Tags from '@components/Partials/Tags'
import { getTags } from "@/lib/data/getTags";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";

export default async function TagsPage () {
  const tags = await getTags();
  const mappedTags = [...tags].map((tag) => ({
    id: tag,
    title: tag,
    slug: tag
  }))

  return (
    // @ts-ignore
    <Tags tags={mappedTags} />
  )
}

export const generateMetadata = (): Metadata => getMetadata({
  title: "Теги",
  description: "Список тегов для постов и заметок"
})
