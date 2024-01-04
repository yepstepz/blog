// @ts-ignore
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { CountItem } from '../lib/parser/parseComment.ts';

export type Reply = {
  replyLink?: string;
  replyText?: string;
};

export type Syndicated = {
  syndicatedLink?: string;
  syndicatedText?: string;
};

export type BridgyEndpoints = {
  toMastodon: boolean;
  toGithub: boolean;
};

export type NotesApiType = {
  title: {
    name: string;
    visibility: boolean;
  };
  description: string;
  _updatedAt: string;
  _createdAt: string;
  oldDate: string;
  slug: {
    current: string;
  };
  _type: 'note';
  bridgyEndpoints: BridgyEndpoints;
  content: string;
  reply: Reply;
  syndicated: Syndicated;
  tags: Array<string>;
};

export type NoteItemType = {
  slug: string;
  date: string;
  mdxSource: MDXRemoteSerializeResult;
  content: string;
  tags: Array<string>;
  title: string;
  description: string;
  reply: Reply;
  syndicated: Syndicated;
  bridgyEndpoints: BridgyEndpoints;
  contentType: 'post' | 'note';
};

export type NoteComponentType = {
  embedded: boolean;
  reactions: CountItem;
};
