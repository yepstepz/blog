import Layout from '@components/Layout';
import { Note } from '@components/Note';

// @ts-ignore
import { getAllNotes } from '../lib/notes.mts';

import type { NoteItemType, NoteComponentType } from '../types/note.ts';
// @ts-ignore
import { countAllComments, getAllComments } from '../lib/comments.mts';

type Props = {
  items: Array<NoteItemType & NoteComponentType>;
  countedReactions: Record<string, Record<string, number>>;
};

export default function Notes({ items, countedReactions }: Props) {
  return (
    <Layout
      title="Заметки | Блог yepstepz.io"
      description="Короткие заметки для блога. Поддерживают webmentions"
      url="https://yepstepz.io/notes"
    >
      <div className="block-article inner--sm h-feed">
        {items.map((note) => {
          const reactions = countedReactions[note.slug] || {};
          return (
            <li className="ln">
              <Note reactions={reactions} {...note} />
            </li>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const [items, countedReactions] = await Promise.all([
    getAllNotes(),
    countAllComments({ type: 'notes' }),
  ]);

  return {
    props: {
      items,
      countedReactions,
    },
  };
}
