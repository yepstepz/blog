import { FC } from 'react';
import cn from 'classnames';
import styles from './in-reply-to.module.css';

type Prop = {
  replyLink?: string;
  replyText?: string;
};

export const InReplyTo: FC<Prop> = (reply) => (
  <span className={styles.replyWrapper}>
    in reply to:{' '}
    <a href={reply.replyLink} className={cn('u-in-reply-to', styles.link)}>
      {reply.replyText}
    </a>
  </span>
);
