import cn from 'classnames';
import Link from 'next/link';
import Tags from '@components/Partials/Tags';
// @ts-ignore
import { MDXRemote } from 'next-mdx-remote';
import styles from './Note.module.css';
import { noteComponents } from '@components/Note/components';
import { HCard } from '@components/Partials/microformats/h-card';
import { TimePublished } from '@components/Partials/microformats/dt-published';
import { NotesContent } from '@components/Note/notes-content';
import { PName } from '@components/Partials/microformats/p-name';
import { USyndication } from '@components/Partials/microformats/u-syndication';
import type { NoteItemType, NoteComponentType } from '../../types/note.ts';
import { Reactions } from '@components/Reactions';
import { CountItem } from '../../lib/parser/parseComment.ts';

const emptyReactions: CountItem = {
  all: 0,
  replies: 0,
  likes: 0,
  reposts: 0,
  bookmarks: 0,
  mentions: 0,
  rsvp: 0,
};

function Note({
  slug,
  date,
  mdxSource,
  tags,
  embedded = false,
  title = '',
  titleVisibility,
  reply,
  syndicated = {},
  reactions = emptyReactions,
}: NoteItemType & NoteComponentType) {
  const url = `/notes/${slug}`;
  return (
    <NotesContent embedded={embedded} reply={reply}>
      { titleVisibility && <PName as="a" href={url} title={title} /> }
      <div className="block-content--sm inner--sm">
        <div className={styles.content}>
          <MDXRemote {...mdxSource} components={noteComponents} />
        </div>
      </div>
      <div className={cn('block-links inner--sm', styles.infoWrapper)}>
        {reactions.all > 0 && (
          <a href={`${url}/#comments`} className={styles.commentsButton}>
            <Reactions reactions={reactions} />
          </a>
        )}
        <div className={styles.postInfo}>
          <span className={styles.postData}>
            <TimePublished date={date} align="right" />
            {syndicated?.syndicatedLink && <USyndication {...syndicated} />}
            <Tags tags={tags} size="sm" align="right" />
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
  );
}

export { Note };
