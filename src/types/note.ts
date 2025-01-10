// @ts-ignore
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { type RichTextField } from 'payload';
import type { Note } from '@/../payload-types.ts';

// import { CountItem } from '../lib/parser/parseComment.ts';

export type Reply = {
  replyLink?: string;
  replyText?: string;
};
