import cn from 'classnames';

import styles from './SingleComment.module.css';
import React from 'react';

import { HCard } from '@components/Partials/microformats/h-card';
import { TimePublished } from '@components/Partials/microformats/dt-published';
import {mdxComponents} from "@/mdx-components";
import {MDXRemote} from "next-mdx-remote/rsc";

export const SingleComment = ({ comment }) => {
  const {
    user: { url: userUrl, photo: userPhoto, name: userName } = {},
    ...restComment
  } = comment;
  const { published, url, mdxSource } = restComment;

  return (
    <li key={restComment.id} className={cn(styles.wrapper, 'p-comment h-cite comment')}>
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
        <MDXRemote source={restComment.contentHTML || restComment.contentText} components={mdxComponents} />
      </div>
    </li>
  );
};
