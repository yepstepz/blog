import ArticlesList from '@components/ArticlesList';
import Layout from '@components/Layout';
import MainArticle from '@components/MainArticle';

import { getAllPosts } from "../lib/posts"

export default function Post({ posts }) {
  const mainArticle = posts[0]
  const latestArticles = posts.slice(1)

  return (
    <Layout 
      title="Главная страница | Блог yepstepz.io"
      description="Пишу про себя, фронтенд и книги."
      image="/title-image.png"
      url="https://yepstepz.io"
    >
      <section className="main-article">
        <div className="inner">
          <MainArticle {...mainArticle} />
        </div>
      </section>
      {
        latestArticles.length !== 0 && (
          <section className="latest-articles">
            <div className="inner">
              <div className="block-theme inner--sm">
                <h2 className="headline headline--second">Что почитать <span className="text text--violet">ещё</span>:</h2>
              </div>
              <ArticlesList posts={latestArticles} />
            </div>
          </section>
        )
      }
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "description",
    "slug",
    "content",
    "image",
    "blurImage",
    "tags",
    "date",
    "imageAlign",
    "imageWidth"
  ])

  return {
    props: { posts },
  }
}
