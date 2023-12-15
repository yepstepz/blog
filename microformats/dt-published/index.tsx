import cn from 'classnames';

import styles from './dt-published.module.css';

export const TimePublished = ({ date, align = 'left' }) => {
  return (
    <div className={cn(styles.timeCaption, align === 'right' ? styles.timeCaptionRight : '' )}>
      <time className="dt-published" dateTime={date}>
        Опубликовано: {new Date(date).toLocaleDateString('ru-RU')}
      </time>
    </div>
  )
}