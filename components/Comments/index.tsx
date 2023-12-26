import styles from './Comments.module.css';

import { SingleComment } from '@components/Comments/SingleComment';

import type { CommentType } from '../../types/comment.ts';

type Props = {
  comments: Array<CommentType>;
};
export const Comments = ({ comments }: Props) => {
  return (
    <section>
      <h3 className={styles.header}>
        Комментарии: { comments.length }
      </h3>
      <ul className={styles.list}>
        {comments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </ul>
    </section>
  );
};
