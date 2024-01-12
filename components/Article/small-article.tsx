import styles from './Article.module.css';
import Link from 'next/link';
import { ElementType, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  slug: string;
  title: string;
  date: string;
}

export const SmallArticle = ({
  slug,
  title,
  date,
  as: Tag = 'article',
}: Props) => {
  return (
    <Tag className={styles.shortWrapper}>
      <Link href={`/posts/${slug}`}>{title}</Link>
      <span>{date}</span>
    </Tag>
  );
};
