import styles from './u-syndication.module.css';

import type { Syndicated } from '../../../../types/note.ts';

export const USyndication = ({
  syndicatedLink,
  syndicatedText,
}: Syndicated) => (
  <span className={styles.wrapper}>
    Пост:{' '}
    <a href={syndicatedLink} target="_blank" className="u-syndication">
      {syndicatedText}
    </a>
  </span>
);
