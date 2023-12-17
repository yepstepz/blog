import cn from 'classnames';

import type { MicroCardType } from './types';
import styles from './h-card.module.css';

export const HCard: React.FC<MicroCardType> = ({
  pName = 'Tatiana Leonteva',
  pNickname = 'yepstepz',
  uPhoto = '/avatar.jpeg',
  uUrl = 'https://yepstepz.io',
  isAuthor = false,
  visible = true,
  showCredentials = true,
  showNickname = true,
}) => {
  const computedStyles = { display: 'none' };
  return (
    <div
      className={cn('h-card', isAuthor && 'p-author', styles.author)}
      style={visible ? null : computedStyles}
    >
      <div className={styles.imageWrapper}>
        <img width="48" height="48" className="u-photo" src={uPhoto} />
      </div>
      <div
        className={styles.credentials}
        style={showCredentials ? null : computedStyles}
      >
        <a className="u-url" href={uUrl}>
          <div className="p-name">{pName}</div>
        </a>
        <div
          className={cn('p-nickname', styles.nickname)}
          style={showNickname ? null : computedStyles}
        >
          {pNickname}
        </div>
      </div>
    </div>
  );
};
