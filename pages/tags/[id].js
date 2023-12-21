import Layout from '@components/Layout';
import { Note } from '../../components/Note';
import { Article } from '../../components/Article';

import { collectAllTags } from '../../lib/tags';
import { getAllItems } from '../../lib/utils';
import { getNotesByTag } from '../../lib/notes.mts';

const component = (item) => {
  switch (item.contentType) {
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
  const notesItems = await getNotesByTag(id);

  const postsProps = await getAllItems([
    'title',
    'description',
    'slug',
    'tags',
    'date',
  ]);

  const propsItems = postsProps.map((post) => {
    post.contentType = 'post';
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
