import {PName} from '@components/Partials/microformats/p-name';
import styles from './Note.module.css';
import cn from 'classnames';
import Link from 'next/link';
import {HCard} from '@components/Partials/microformats/h-card';
import {TimePublished} from '@components/Partials/microformats/dt-published';
import { Note } from "@/../payload-types";

import { serialize as serializeManually } from '../../lib/serialize';
import { NotesContent } from "@components/Note/notes-content";
import { Reactions } from "@components/Reactions";
import { Comments } from "@components/Comments";
import Tags from '@components/Partials/Tags';
import { USyndication } from "@components/Partials/microformats/u-syndication";
import { useLivePreview } from '@payloadcms/live-preview-react'

export default function NoteComponent({
  title,
  createdAt,
  oldDate,
  tags,
  slug,
  content,
  comments,
  replyContexts = {},
  socialMessages,
  limit,
  reactions,
  embedded = false
}: Note & {
  reactions?: any
  replyContexts?: any
  socialMessages?: any
  comments?: any
  limit?: any
  embedded?: boolean
}) {
  const url = `/notes/${slug}`;

  return (
    <>
      <NotesContent embedded={embedded} replyContexts={replyContexts}>
        {title.visibility ? <PName as="a" href={url} title={title.text}/> : ''}
        <div className="block-content--sm inner--sm">
          <div className={styles.content}>
            {serializeManually(content?.root || {}, {url}, limit)}
          </div>
        </div>
        <div className={cn('block-links inner--sm', styles.infoWrapper)}>
          {reactions?._all > 0 && (
            <a href={`${url}/#comments`} className={styles.commentsButton}>
              <Reactions reactions={reactions} />
            </a>
          )}
          <div className={styles.postInfo}>
          <span className={styles.postData}>
            <TimePublished date={oldDate || createdAt} align="right"/>

            {socialMessages?.length ? <USyndication socialMessages={socialMessages} /> : null}
            {
              tags && <Tags tags={tags} size="sm" align="right" />
            }
            <Link className={styles.slug} href={url} prefetch={false}>
              {url}
            </Link>
          </span>
            <HCard
              showCredentials={false}
              isAuthor={true}
              className={styles.author}
            />
          </div>
        </div>
      </NotesContent>
      {comments && <Comments comments={comments} />}
    </>
  );
}
