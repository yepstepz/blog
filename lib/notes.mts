import rehypeStarryNight from '@microflash/rehype-starry-night';
import { getAllItems } from './utils.js';
import rehypeTruncate from 'rehype-truncate';
// @ts-ignore
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export async function getAllNotes() {
  const items = getAllItems(
    ['slug', 'tags', 'date', 'content', 'pName', 'inReplyTo', 'replyText'],
    'notes'
  );

  for (let i = 0; i < items.length; i++) {
    const note = items[i];
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
