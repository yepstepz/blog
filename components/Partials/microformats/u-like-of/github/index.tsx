import cn from 'classnames';
import { Star } from '@components/Partials/Rating';

import styles from './github-star.module.css';

export const GithubStar = ({ link }) => {
  return (
    <span className={styles.wrapper}>
      <Star />{' '}
      <a className={cn(styles.likeOfText, 'u-like-of')} href={link}>
        {link}
      </a>
    </span>
  );
};
