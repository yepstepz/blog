import rehypeStarryNight from '@microflash/rehype-starry-night';
import rehypeTruncate from 'rehype-truncate';
// @ts-ignore
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { client } from '../studio/client.mts';
import {
  queryAllNotes,
  queryAllNotesSlugs,
  queryNotesByTag,
} from './queries/index.ts';
import { parseNote } from './parser/parseNote.ts';

export async function getAllNotesUrls(route = 'notes') {
  const slugs = await client.fetch(queryAllNotesSlugs);

  return slugs.map((slug) => `/${route}/${slug}`);
}

async function parseAndSerializeMdx(note) {
  const parsedNote = parseNote(note);

  parsedNote.mdxSource = await serialize(parsedNote.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeStarryNight,
        [rehypeTruncate, { maxChars: 280, ignoreTags: 'blockquote' }],
      ],
    },
    parseFrontmatter: true,
  });

  return parsedNote;
}

export async function getAllNotes() {
  const items = await client.fetch(queryAllNotes);

  const parsedItems = items.map(parseNote);

  for (let i = 0; i < parsedItems.length; i++) {
    const note = parsedItems[i];

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

  return parsedItems;
}

export async function getNotesByTag(tag) {
  const query = queryNotesByTag(tag);
  const items = await client.fetch(query);

  return await Promise.all(
    items.map(async (item) => await parseAndSerializeMdx(item))
  );
}
