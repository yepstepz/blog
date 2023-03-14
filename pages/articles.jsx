import Layout from "@components/Layout"
import ArticlesList from "@components/ArticlesList"

import { getAllPosts } from "lib/posts"

export default function Articles ({ posts }) {
  return (
    <Layout>
      <ArticlesList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "description",
    "slug",
    "tags",
    "date"
  ])

  return {
    props: { posts },
  }
}
