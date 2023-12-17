import styles from './Note.module.css';
import cn from 'classnames';

export const NotesContent = ({ children, embedded }) => (
  <article
    className={cn(
      styles.wrapper,
      'inner--sm',
      embedded ? styles.wrapperEmbedded : styles.wrapperList
    )}
  >
    {children}
  </article>
);
