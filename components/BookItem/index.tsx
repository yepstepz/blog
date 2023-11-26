import React from 'react'
import style from './BookItem.module.css'
import { Rating } from '@components/Partials/Rating'
import Image from "next/image";

import type { BookItemType } from './types'

export const BookItem = ({ data, as }: { data: BookItemType, as: React.FC<any> | string })  => {
  const ComponentWrapper = as || 'section';
  return (
    <ComponentWrapper className={style.card}>
      <div className={style.image}>
        <Image
          src={data.book_large_image_url}
          alt=""
          width="50"
          height="80"
        />
      </div>
      <div className={style.info}>
        <div className={style.title}>{data.title}</div>
        <div className={style.author}>{data.author_name}</div>
        <div>
          <Rating avgRating={data.user_rating} />
        </div>
      </div>
    </ComponentWrapper>
  );
}