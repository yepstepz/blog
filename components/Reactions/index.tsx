import styles from './Reactions.module.css';

import { CountItem } from '../../lib/parser/parseComment.ts';

type Props = {
  reactions: CountItem;
};

export const Reactions = ({ reactions = {} }: Props) => {
  const { replies, likes, all } = reactions;
  return (
    <ul className={styles.list}>
      {replies > 0 && <li className={styles.item}>💬 {replies}</li>}
      {likes > 0 && <li className={styles.item}>❤️ {likes}</li>}
    </ul>
  );
};
