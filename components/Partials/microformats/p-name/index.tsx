import { ElementType, HTMLAttributes, FC } from 'react';
import cn from 'classnames';
import styles from './p-name.module.css';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  href?: string
}

export const PName: FC<Props> = ({ title, as: Tag = 'h2', href }) => (
  <Tag href={href} className={cn('p-name', styles.title)}>{title}</Tag>
);
