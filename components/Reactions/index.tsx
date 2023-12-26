import styles from './Reactions.module.css';

import { CountItem } from '../../lib/parser/parseComment.ts';

type Props = {
  reactions: CountItem;
};

export const Reactions = ({ reactions = {} }: Props) => {
  const { replies, likes, all } = reactions;
  return (
    <span className={styles.list}>
      {replies > 0 && <span className={styles.item}>💬 {replies}</span>}
      {likes > 0 && <span className={styles.item}>❤️ {likes}</span>}
    </span>
  );
};
