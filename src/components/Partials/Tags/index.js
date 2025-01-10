'use client';

import cn from 'classnames';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import styles from './TagPage.module.css';
import { colors } from './tags-colors';

const tagStyles = (tag) => css({
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

export default function Tags({ tags, size, align }) {
  return (
    <ul
      className={cn(
        styles.tags,
        size === 'sm' ? styles.tagsSm : '',
        align === 'right' ? styles.tagsRight : ''
      )}
    >
      {tags?.map(({ id, title, slug }) => {
        return (
          <li key={slug} className={cn(styles.tags__item, styles.tag)}>
            <a href={`/tags/${slug}`} css={tagStyles(slug)}>
              #{title}
            </a>
          </li>
        )
      })}
    </ul>
  );
}
