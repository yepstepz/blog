import Layout from '@components/Layout';
import { Note } from '@components/Note';

// @ts-ignore
import { getAllNotes } from '../lib/notes.mts';

import type { NoteItemType, NoteComponentType } from '../types/note.ts';

type Props = {
  items: Array<NoteItemType & NoteComponentType>;
};

export default function Notes({ items }: Props) {
  return (
    <Layout
      title="Заметки | Блог yepstepz.io"
      description="Короткие заметки для блога. Поддерживают webmentions"
      url="https://yepstepz.io/notes"
    >
      <div className="block-article inner--sm h-feed">
        {items.map((note) => {
          return (
            <li className="ln">
              <Note {...note} />
            </li>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getAllNotes();

  return {
    props: {
      items,
    },
  };
}
