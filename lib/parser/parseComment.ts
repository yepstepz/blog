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
