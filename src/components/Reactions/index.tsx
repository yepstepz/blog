import styles from './Reactions.module.css';

export const Reactions = ({ reactions }) => {
  const { inReplyTo, likeOf } = reactions;
  return (
    <span className={styles.list}>
      {inReplyTo > 0 && <span className={styles.item}>💬 {inReplyTo}</span>}
      {likeOf > 0 && <span className={styles.item}>❤️ {likeOf}</span>}
    </span>
  );
};
