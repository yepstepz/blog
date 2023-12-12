import React from 'react';
import cs from 'classnames';
import { BookItem } from '@components/BookItem';
import style from './BookList.module.css';

export const BookList = ({ bookList }) => {
  if (!bookList) {
    return null;
  }
  return (
    <ul className={style.wrapper}>
      {bookList.map((book) => (
        <BookItem data={book} as="li" key={book.guid} />
      ))}
    </ul>
  );
};
