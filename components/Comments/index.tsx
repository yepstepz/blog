import styles from './Comments.module.css';

import { SingleComment } from '@components/Comments/SingleComment';
import { useTranslations } from 'next-intl';

import type { CommentType } from '../../types/comment.ts';

type Props = {
  comments: Array<CommentType>;
};
export const Comments = ({ comments }: Props) => {
  const t = useTranslations();
  return (
    <section>
      <h3 className={styles.header}>
        {t('comments', { count: comments.length })}
      </h3>
      <ul className={styles.list}>
        {comments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </ul>
    </section>
  );
};
