import Layout from '@components/Layout';
import ArticlesList from '@components/ArticlesList';

import { getAllItems } from 'lib/utils';

export default function Articles({ items }) {
  return (
    <Layout
      title="Все статьи | Блог yepstepz.io"
      description="Посмотреть все статьи из блога"
      url="https://yepstepz.io/posts"
    >
      <ArticlesList posts={items} />
    </Layout>
  );
}

export async function getStaticProps() {
  const items = getAllItems(['title', 'description', 'slug', 'tags', 'date']);

  return {
    props: { items },
  };
}
