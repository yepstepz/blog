import fs from "fs";
import { join } from "path";
import { getMdxContent } from "@/lib/getMdxContent";

export async function getPosts(filters = []) {
  const posts = fs.readdirSync(join(process.cwd(), 'src', 'posts'))
    .map((postName) => {
      const { frontmatter} = getMdxContent('src/posts/' + postName)
      const { tags, ...rest } = frontmatter;
      rest.pureTags = tags;
      rest.tags = tags.map((slug) => ({ slug, title: slug }));
      rest.slug = postName.split('.mdx')[0];
      return rest
    })

  // @ts-ignore
  return posts.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
}
