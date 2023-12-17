import cn from 'classnames';
import { Plate } from '@components/Partials/Plate';
import Tags from '@components/Partials/Tags';
// @ts-ignore
import { MDXRemote } from 'next-mdx-remote';
import styles from './Note.module.css';
import { noteComponents } from '@components/Note/components';
import { HCard } from '@components/Partials/microformats/h-card';
import { TimePublished } from '@components/Partials/microformats/dt-published';
import { NotesContent } from '@components/Note/notes-content';
import { PName } from '@components/Partials/microformats/p-name';

function Note({
  slug,
  date,
  published,
  mdxSource,
  tags,
  embedded = false,
  pName = '',
  inReplyTo = '',
  replyText = '',
}) {
  return (
    <NotesContent embedded={embedded} reply={{ inReplyTo, replyText }}>
      <div className="inner--sm">
        <div className="df ac">{!published && <Plate title="Черновик" />}</div>
      </div>
      <PName title={pName} />
      <div className="block-content--sm inner--sm">
        <div className={styles.content}>
          <MDXRemote {...mdxSource} components={noteComponents} />
        </div>
      </div>
      <div className={cn('block-links inner--sm', styles.infoWrapper)}>
        <span className={styles.postInfo}>
          <TimePublished date={date} align="right" />
          <Tags tags={tags} size="sm" align="right" />
          <a href={`/notes/${slug}`}>{`/notes/${slug}`}</a>
        </span>
        <HCard showCredentials={false} isAuthor={true} />
      </div>
    </NotesContent>
  );
}

export { Note };
