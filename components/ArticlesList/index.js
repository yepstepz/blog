import Article from '@components/Article';

export default function ArticlesList({ posts }) {
  return (
    <ul className="articles-list">
      {posts.map((post) => (
        <li className="block-article" key={post.slug}>
          <Article {...post} />
        </li>
      ))}
    </ul>
  );
}
