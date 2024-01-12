import React from 'react';
import style from './BookItem.module.css';
import { Rating } from '@components/Partials/Rating';
import Image from 'next/image';

import type { BookItemType } from './types';

export const BookItem = ({
  data = {},
  as,
}: {
  data?: BookItemType;
  as: React.FC<any> | string;
}) => {
  const ComponentWrapper = as || 'section';

  return (
    <ComponentWrapper className={style.card}>
      <div className={style.image}>
        {data.book_large_image_url && (
          <Image
            src={data.book_large_image_url}
            alt=""
            width="50"
            height="80"
          />
        )}
      </div>
      <div className={style.info}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={data.link}
          className={style.title}
        >
          {data.title}
        </a>
        <div className={style.author}>{data.author_name}</div>
        {data.user_rating && data.user_rating !== '0' ? (
          <div>
            <span className={style.caption}>Моя оценка:</span>
            <Rating avgRating={data.user_rating} />
          </div>
        ) : null}
      </div>
    </ComponentWrapper>
  );
};

export default BookItem;
