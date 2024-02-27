import { Note } from '@components/Note';

// @ts-ignore
import { getAllNotes } from '../lib/notes.mts';

import type { NoteItemType, NoteComponentType } from '../types/note.ts';
// @ts-ignore
import { countAllComments, getAllComments } from '../lib/comments.mts';
import { CountItem } from '../lib/parser/parseComment.ts';

type Props = {
  items: Array<NoteItemType & NoteComponentType>;
  countedReactions: Record<string, CountItem>;
};

const emptyReactions: CountItem = {
  all: 0,
  replies: 0,
  likes: 0,
  reposts: 0,
  bookmarks: 0,
  mentions: 0,
  rsvp: 0,
};

export default function Notes({ items, countedReactions }: Props) {
  return (
    <div className="block-article inner--sm h-feed">
      {items.map((note) => {
        const reactions = countedReactions[note.slug] || emptyReactions;
        return (
          <li className="ln">
            <Note {...note} reactions={reactions} />
          </li>
        );
      })}
    </div>
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
      meta: {
        title: "Заметки | Блог yepstepz.io",
        description: "Короткие заметки для блога. Поддерживают webmentions",
        url: "https://yepstepz.io/notes"
      }
    },
  };
}
