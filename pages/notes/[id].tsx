import Layout from '@components/Layout';
// @ts-ignore
import { serialize } from 'next-mdx-remote/serialize';
// @ts-ignore
import { MDXRemote } from 'next-mdx-remote';
// @ts-ignore
import remarkGfm from 'remark-gfm';
import rehypeStarryNight from '@microflash/rehype-starry-night';
import { HCard } from 'components/Partials/microformats/h-card';
import { BridgyEndpoints } from 'components/Partials/microformats/bridgy-endpoints';
import { TimePublished } from 'components/Partials/microformats/dt-published';
import { noteComponents } from '@components/Note/components.ts';
import { NotesContent } from '@components/Note/notes-content.tsx';
import { PName } from '@components/Partials/microformats/p-name';
import { USyndication } from '@components/Partials/microformats/u-syndication';
import { Comments } from '@components/Comments';

import type { NoteItemType } from '../../types/note';
// @ts-ignore
import { getAllNotesUrls } from '../../lib/notes.mts';
// @ts-ignore
import { client } from '../../studio/client.mts';
import { querySingleNote } from '../../lib/queries';
import { parseNote } from '../../lib/parser/parseNote.ts';
import Tags from '@components/Partials/Tags';
import type { CommentType } from '../../types/comment.ts';
// @ts-ignore
import { getAllComments } from '../../lib/comments.mts';

// TODO: description={description}
export default function Note({
  title,
  date,
  bridgyEndpoints,
  reply = {},
  syndicated = {},
  mdxSource,
  url,
  tags,
  comments,
}: NoteItemType & { url: string; comments: Array<CommentType> }) {
  return (
    <Layout title={title} description="" url={url}>
      <NotesContent reply={reply}>
        <PName title={title} as="h1" />
        <HCard isAuthor={true} />
        <div style={{ display: 'none' }}>
          <BridgyEndpoints {...bridgyEndpoints} />
          <a href={url} className="u-url"></a>
        </div>
        <div className="e-content">
          <MDXRemote {...mdxSource} components={noteComponents} />
        </div>
        <TimePublished date={date} align="right" />
        {syndicated?.syndicatedLink && <USyndication {...syndicated} />}
        <Tags tags={tags} size="sm" align="right" />
      </NotesContent>
      {comments.length !== 0 && <Comments comments={comments} />}
    </Layout>
  );
}

const CATEGORY = 'notes';

export const getStaticPaths = async () => {
  const paths = await getAllNotesUrls(CATEGORY);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { id },
  locale,
}): Promise<{
  props: NoteItemType & {
    url: string;
    comments: Array<unknown>;
    messages: Record<string, string>;
  };
}> => {
  const note = await client.fetch(querySingleNote(id));
  const parsedNote = parseNote(note[0]);

  const { content, slug } = parsedNote;

  const url = `http://yepstepz.io/notes/${slug}`;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeStarryNight],
    },
  });

  const comments = await getAllComments({ type: 'notes', page: id });

  return {
    props: {
      ...parsedNote,
      mdxSource,
      url,
      comments,
      messages: (await import(`../../public/locales/${locale}.json`)).default,
    },
  };
};
