import ArticlesList from '@components/ArticlesList';

import { getAllItems } from 'lib/utils';

export default function Articles({ items }) {
  return (
    <ArticlesList posts={items} />
  );
}

export async function getStaticProps() {
  const items = getAllItems(['title', 'description', 'slug', 'tags', 'date']);

  return {
    props: {
      items,
      meta: {
        title: "Все статьи | Блог yepstepz.io",
        description: "Посмотреть все статьи из блога",
        url: "https://yepstepz.io/posts"
      }
    },
  };
}
