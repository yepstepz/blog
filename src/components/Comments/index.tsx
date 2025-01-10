import styles from './Comments.module.css';

import { SingleComment } from '@components/Comments/SingleComment';

export const Comments = ({ comments }) => {
  return (
    <section>
      <h3 id="comments" className={styles.header}>
        Комментарии: {comments.length}
      </h3>
      <ul className={styles.list}>
        {comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </ul>
    </section>
  );
};
