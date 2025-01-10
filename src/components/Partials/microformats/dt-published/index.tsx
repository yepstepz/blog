import cn from 'classnames';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

import styles from './dt-published.module.css';

export const TimePublished = ({
  date,
  align = 'left',
  showHours = false,
  size = 'md',
}) => {
  return (
    <div
      className={cn(
        styles.timeCaption,
        styles[size + 'Size'],
        align === 'right' ? styles.timeCaptionRight : ''
      )}
    >
      <time className="dt-published" dateTime={date}>
        {dayjs(date).format(`DD/MM/YYYY ${showHours ? 'HH:ss' : ''}`)}
      </time>
    </div>
  );
};
