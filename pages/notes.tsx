import Layout from '@components/Layout';
import { Note } from '@components/Note';

import type { NoteContentType } from '@components/Note/types';
// @ts-ignore
import { getAllNotes } from '../lib/notes.mts';

type Props = {
  items: Array<NoteContentType>;
};

export default function Notes({ items }: Props) {
  return (
    <Layout
      title="Заметки | Блог yepstepz.io"
      description="Короткие заметки для блога. Поддерживают webmentions"
      url="https://yepstepz.io/notes"
    >
      <div className="block-article inner--sm h-entry">
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
