import styles from './u-syndication.module.css';

import type { Note } from '@/../payload-types.ts';

export const USyndication = ({ socialMessages }) => {
  return (
    socialMessages?.map((message) => message?.syndicatedTo && (
      <span key={message.id} className={styles.wrapper}>
    Пост:{' '}
        <a href={message.syndicatedTo} target="_blank" className="u-syndication">
          {message.socialEntity.title}
    </a>
  </span>
    ))
  );
}
