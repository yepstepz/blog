import fs from "fs";
import { join } from "path";
import { getMdxContent } from "@/lib/getMdxContent";
import { getPayload } from "payload";
import config from "@payload-config";

export const getTags = async () => {
  const allTags = new Set ();
  fs.readdirSync(join(process.cwd(), 'src', 'posts'))
    .forEach((postName) => {
      const { frontmatter} = getMdxContent('src/posts/' + postName)
      const { tags } = frontmatter;

      tags.forEach((tag) => {
        allTags.add(tag)
      })
    })

  const payload = await getPayload({ config })
  const payloadTags = await payload.find({
    collection: 'tags'
  });

  payloadTags.docs.forEach((tag) => allTags.add(tag.slug))

  return allTags;
}
