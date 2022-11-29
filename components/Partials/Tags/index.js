import cn from 'classnames'
import { css } from 'glamor'

import styles from './Tags.module.css'
import { colors } from "./tags-colors"

const tagStyles = (tag) => css({
  color: colors[tag]?.light.color || 'var(--main-font)',
  ':hover': {
    background: colors[tag]?.light.hoverBg || '',
  }
})

export default function Tags ({ tags }) {
  return (
    <ul className={styles.tags}>
      {
        tags?.map((tag) => (
          <li
            className={cn(
              styles.tags__item, 
              styles.tag,
            )}
          >
            <a
              href={`/tags/${tag}`}
              {...tagStyles(tag)}
            >
              #{tag}
            </a>
          </li>
        ))
      }
    </ul>
  )
}