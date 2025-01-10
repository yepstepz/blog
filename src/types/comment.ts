// @ts-ignore
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type CommentContents = {
  id: number;
  contentHTML: string;
  contentText: string;
  published: string;
  url: string;
};

export type CommentApiType = CommentContents & {
  User: User;
};

export type CommentType = CommentContents & {
  user: User;
  mdxSource: MDXRemoteSerializeResult;
};

type User = {
  id: number;
  url: string;
  photo: string;
  name: string;
};
