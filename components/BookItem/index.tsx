import React from 'react'
import style from './BookItem.module.css'

import type { BookItemType } from './types'

export const BookItem = ({ data, as }: { data: BookItemType, as: React.FC<any> | string })  => {
  const ComponentWrapper = as || 'section';
  return (
    <ComponentWrapper className={style.card}>
      <div className={style.image}>
        <img src={data.book_large_image_url} alt="" />
      </div>
      <div className={style.info}>
        <div>{data.title}</div>
        <div>{data.user_rating}</div>
        <div>{data.pubDate}</div>
      </div>
    </ComponentWrapper>
  );
}