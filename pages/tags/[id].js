import Layout from '@components/Layout'
import ArticlesList from "@components/ArticlesList"
import { getAllPosts } from "lib/posts"

export default function Tag({ posts }) {
  return (
    <Layout>
      <ArticlesList posts={posts} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPosts([
    "tags"
  ])
  .map((file) => file.tags || [])
  .flat()
  .map((tagName) => ({
      params: {
        id: tagName
      }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const posts = getAllPosts([
    "tags",
    "title",
    "description"
  ])
  .filter((file) => file.tags?.includes(id) || false)

  return { 
    props: {
      posts
    }
   }
}
