import styles from './Note.module.css';
import cn from 'classnames';
import { InReplyTo } from '@components/Partials/microformats/in-reply-to';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  embedded?: boolean;
  reply?: {
    inReplyTo?: string;
    replyText?: string;
  };
};

export const NotesContent: FC<Props> = ({
  children,
  embedded = false,
  reply = {},
}) => (
  <article
    className={cn(
      'h-entry',
      styles.wrapper,
      'inner--sm',
      embedded ? styles.wrapperEmbedded : styles.wrapperList
    )}
  >
    {reply.inReplyTo && <InReplyTo {...reply} />}
    {children}
  </article>
);
