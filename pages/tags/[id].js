import Layout from '@components/Layout';
import { Note } from '../../components/Note';
import { Article } from '../../components/Article';

import { collectAllTags } from '../../lib/tags';
import { getAllItems } from '../../lib/utils';
import { getAllNotes } from '../../lib/notes.mts';

const component = (item) => {
  switch (item.type) {
    case 'note': {
      return <Note embedded {...item} />;
    }
    default: {
      return <Article {...item} />;
    }
  }
};

export default function Tag({ items, id }) {
  return (
    <Layout
      title={`Статьи по тегу #${id} | Блог yepstepz.io`}
      description={`Посмотреть все статьи из блога по тегу #${id}`}
      url={`https://yepstepz.io/tags/${id}`}
    >
      {items.map((item) => (
        <li className="block-article ln" key={item.slug}>
          {component(item)}
        </li>
      ))}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = [...collectAllTags()].map((tagName) => ({
    params: {
      id: tagName,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const notesProps = await getAllNotes();
  const postsProps = await getAllItems([
    'title',
    'description',
    'slug',
    'tags',
    'date',
  ]);

  const notesItems = notesProps.map((note) => {
    note.type = 'note';
    return note;
  });

  const propsItems = postsProps.map((post) => {
    post.type = 'post';
    return post;
  });

  const items = [...notesItems, ...propsItems].filter(
    (file) => file.tags?.includes(id) || false
  );

  return {
    props: {
      id,
      items,
    },
  };
};
