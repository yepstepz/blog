import Layout from '@components/Layout';
import ArticlesList from '@components/ArticlesList';
import { getAllPosts } from 'lib/posts';

export default function Tag({ posts, id }) {
  return (
    <Layout
      title={`Статьи по тегу #${id} | Блог yepstepz.io`}
      description={`Посмотреть все статьи из блога по тегу #${id}`}
      url={`https://yepstepz.io/tags/${id}`}
    >
      <ArticlesList posts={posts} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPosts(['tags'])
    .map((file) => file.tags || [])
    .flat()
    .map((tagName) => ({
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
  const posts = getAllPosts([
    'tags',
    'title',
    'description',
    'date',
    'slug',
  ]).filter((file) => file.tags?.includes(id) || false);

  return {
    props: {
      id,
      posts,
    },
  };
};
