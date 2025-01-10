import cn from 'classnames';

import type { MicroCardType } from './types';
import styles from './h-card.module.css';
import Image from 'next/image';

export const HCard: React.FC<MicroCardType> = ({
  pName = 'Tatiana Leonteva',
  pNickname = 'yepstepz',
  uPhoto = '/avatar.jpeg',
  uUrl = 'https://yepstepz.io',
  isAuthor = false,
  visible = true,
  showCredentials = true,
  showNickname = true,
  showSource = false,
  external = false,
  showDescription = false,
  className = '',
}) => {
  const computedStyles = { display: 'none' };
  return (
    <div
      className={cn('h-card', isAuthor && 'p-author', styles.author, className)}
      style={visible ? undefined : computedStyles}
    >
      <div className={styles.imageWrapper}>
        <Image alt="" width="48" height="48" className="u-photo" src={uPhoto} />
      </div>
      <div
        className={styles.credentials}
        style={showCredentials ? undefined : computedStyles}
      >
        <a
          className="u-url"
          href={uUrl}
          target="_blank"
          rel={external ? 'noopener noreferrer' : ''}
        >
          <div className="p-name">{pName}</div>
        </a>
        <div
          className={cn('p-nickname', styles.nickname)}
          style={showNickname ? undefined : computedStyles}
        >
          {pNickname}
        </div>
        <div
          className={cn(styles.fromUrl)}
          style={showSource ? undefined : computedStyles}
        >
          {uUrl}
        </div>
        <div
          className={cn('p-note', styles.description)}
          style={showDescription ? undefined : computedStyles}
        >
          Reader, writer, developer. I write in Russian
        </div>
      </div>
    </div>
  );
};
