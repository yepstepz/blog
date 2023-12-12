import Layout from '@components/Layout';
import Note from '@components/Note';
import remarkGfm from 'remark-gfm';

import { getAllItems } from 'lib/posts';
import { serialize } from 'next-mdx-remote/serialize';

export default function Notes({ notes }) {
  return (
    <Layout
      title="Все заметки | Блог yepstepz.io"
      description="Посмотреть все заметки из блога"
      url="https://yepstepz.io/notes"
    >
      {notes.map((note) => (
        <Note {...note} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const notes = getAllItems(['content', 'slug', 'tags', 'date'], 'notes');

  for (let note of notes) {
    const { content } = note;
    note.mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    });
  }

  return {
    props: { notes },
  };
}
