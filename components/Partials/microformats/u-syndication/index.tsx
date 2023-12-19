import styles from './u-syndication.module.css';

export const USyndication = ({ syndicatedLink, syndicatedText }) => (
  <span className={styles.wrapper}>
    Пост:{' '}
    <a href={syndicatedLink} target="_blank" className="u-syndication">
      {syndicatedText}
    </a>
  </span>
);
