import * as path from 'path';
import rehypeTruncate from 'rehype-truncate';

// import type { Response } from '../types/comment.ts';
import { parseComment, transformCountRequest } from './parser/parseComment.ts';
// @ts-ignore
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

async function parseAndSerializeMdx(comment) {
  const parsedComment = parseComment(comment);

  parsedComment.mdxSource = await serialize(parsedComment.contentText, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [() => rehypeTruncate({ maxChars: 500 })],
    },
  });

  return parsedComment;
}

export async function getAllComments({ type, page }) {
  const comments = await fetch(
    process.env.VERIFIED_WEBMENTIONS_ENDPOINT +
      path.join(type, 'comments', page)
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ data }) => {
      return data;
    });

  return await Promise.all(
    comments.map(async (item) => await parseAndSerializeMdx(item))
  );
}

export async function countAllComments({ type }) {
  const countedMentionsOfComments = await fetch(
    process.env.VERIFIED_WEBMENTIONS_ENDPOINT + path.join(type)
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ data }) => {
      return data;
    });

  return transformCountRequest({ data: countedMentionsOfComments });
}
