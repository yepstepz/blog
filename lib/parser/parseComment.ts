import { CommentType, CommentApiType } from '../../types/comment.ts';

export const parseComment = ({
  User: user,
  ...rest
}: CommentApiType): CommentType => {
  return {
    user,
    mdxSource: '',
    ...rest,
  };
};

type CountApiData = {
  _count: {
    _all: number;
    inReplyTo: number;
    likeOf: number;
    repostOf: number;
    bookmarkOf: number;
    mentionOf: number;
    rsvp: number;
  };
  wmTarget: string;
};

export type CountData = Record<string, CountItem>;

export type CountItem = {
  all: number;
  replies: number;
  likes: number;
  reposts: number;
  bookmarks: number;
  mentions: number;
  rsvp: number;
};

export const transformCountRequest = ({
  data,
}: {
  data: Array<CountApiData>;
}): CountData => {
  return data.reduce((data, currentValue) => {
    const slug = currentValue.wmTarget.split('/').at(-1) || '';

    const {
      _all: all = 0,
      inReplyTo: replies = 0,
      likeOf: likes = 0,
      repostOf: reposts = 0,
      bookmarkOf: bookmarks = 0,
      mentionOf: mentions = 0,
      rsvp = 0,
    } = currentValue._count;

    data[slug] = {
      all,
      replies,
      likes,
      reposts,
      bookmarks,
      mentions,
      rsvp,
    };

    return data;
  }, {});
};
