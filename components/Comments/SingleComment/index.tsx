import cn from 'classnames';

import styles from './SingleComment.module.css';
import type { CommentType } from '../../../types/comment.ts';
// @ts-ignore
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import { HCard } from '@components/Partials/microformats/h-card';
import { TimePublished } from '@components/Partials/microformats/dt-published';

type Props = {
  comment: CommentType;
};

export const SingleComment = ({ comment }: Props) => {
  const {
    user: { url: userUrl, photo: userPhoto, name: userName } = {},
    ...restComment
  } = comment;
  const { published, url, mdxSource } = restComment;

  return (
    <li className={cn(styles.wrapper, 'p-comment h-cite comment')}>
      <div className={styles.metaline}>
        <HCard
          isAuthor={true}
          pName={userName}
          uUrl={userUrl}
          uPhoto={userPhoto}
          pNickname={''}
          showSource
        />
        <div className={styles.postInfo}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="u-url"
          >
            <TimePublished date={published} align="right" showHours size="sm" />
          </a>
        </div>
      </div>
      <div className={cn(styles.content, 'e-content')}>
        <MDXRemote {...mdxSource} />
      </div>
    </li>
  );
};
