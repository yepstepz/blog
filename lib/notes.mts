import rehypeStarryNight from '@microflash/rehype-starry-night';
import rehypeTruncate from 'rehype-truncate';
// @ts-ignore
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { client } from '../studio/client.mts';

export async function getAllNotes() {

  const items = await client.fetch(`
    *[_type == "note"]{
      _id,
      title,
      "tags": tags[]-> title,
      toMastodon,
      content,
      slug,
      _createdAt,
      _updatedAt,
      _type,
    }
  `);

  for (let i = 0; i < items.length; i++) {
    const note = items[i];
    console.log(note.tags)
    note.mdxSource = await serialize(note.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeStarryNight,
          [rehypeTruncate, { maxChars: 280, ignoreTags: 'blockquote' }],
        ],
      },
      parseFrontmatter: true,
    });
  }

  return items;
}
