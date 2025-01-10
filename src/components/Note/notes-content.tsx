import styles from './Note.module.css';
import cn from 'classnames';
import { ReplyContexts } from '@components/Partials/microformats/reply-contexts';

export const NotesContent = ({
  children,
  embedded = false,
  replyContexts
}) => (
  <article
    className={cn(
      'h-entry',
      styles.wrapper,
      'inner--sm',
      embedded ? styles.wrapperEmbedded : styles.wrapperList
    )}
  >
    {
      replyContexts?.length ? <ReplyContexts replyContexts={replyContexts} /> : null
    }
    {children}
  </article>
);
