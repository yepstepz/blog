import cn from 'classnames';
import { css } from 'glamor';

import styles from './TagPage.module.css';
import { colors } from './tags-colors';

const tagStyles = (tag) =>
  css({
    color: colors[tag]?.light.color || 'var(--main-font)',
    ':hover': {
      color: colors[tag]?.light.hoverColor || colors[tag]?.light.color,
      background: colors[tag]?.light.hoverBg || '',
    },
    ':visited': {
      color: colors[tag]?.light.color || 'var(--main-font)',
    },
    ':visited:hover': {
      color: colors[tag]?.light.hoverColor || colors[tag]?.light.color,
    },
  });

export default function Tags({ tags }) {
  return (
    <ul className={styles.tags}>
      {tags?.map((tag) => (
        <li key={tag} className={cn(styles.tags__item, styles.tag)}>
          <a href={`/tags/${tag}`} {...tagStyles(tag)}>
            #{tag}
          </a>
        </li>
      ))}
    </ul>
  );
}
