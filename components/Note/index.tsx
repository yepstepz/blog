import cn from 'classnames';
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

function Note({
  slug,
  date,
  mdxSource,
  tags,
  embedded = false,
  title = '',
  reply = {},
  syndicated = {},
}: NoteItemType & NoteComponentType) {
  return (
    <NotesContent embedded={embedded} reply={reply}>
      <PName title={title} />
      <div className="block-content--sm inner--sm">
        <div className={styles.content}>
          <MDXRemote {...mdxSource} components={noteComponents} />
        </div>
      </div>
      <div className={cn('block-links inner--sm', styles.infoWrapper)}>
        <span className={styles.postInfo}>
          <TimePublished date={date} align="right" />
          {syndicated?.syndicatedLink && <USyndication {...syndicated} />}
          <Tags tags={tags} size="sm" align="right" />
          <a href={`/notes/${slug}`}>{`/notes/${slug}`}</a>
        </span>
        <HCard showCredentials={false} isAuthor={true} />
      </div>
    </NotesContent>
  );
}

export { Note };
