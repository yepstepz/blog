import styles from '@components/Partials/microformats/in-reply-to/in-reply-to.module.css';
import cn from 'classnames';

import type { Note } from '@/../payload-types';

export const ReplyContexts = ({ replyContexts }) => replyContexts?.length ? (
  <>
    {replyContexts.map(({ id, replyCite, replyUrl, typeOfReply }) => (
      <span key={id} className={styles.replyWrapper}>
        { typeOfReply.caption }
        { ': ' }
        <a href={replyUrl} className={cn(typeOfReply.value, styles.link)}>
          {replyCite.title}
        </a>
      </span>
    ))}
  </>
) : null;



//   (
//   <span className={styles.replyWrapper}>
//     in reply to:{' '}
//     <a href={reply.replyLink} className={cn('u-in-reply-to', styles.link)}>
//       {reply.replyText}
//     </a>
//   </span>
// );
