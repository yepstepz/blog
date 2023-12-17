// @ts-ignore
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type NoteContentType = {
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
  date: string;
  content: string;
  published: boolean;
  tags: Array<string>;
};
