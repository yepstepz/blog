import React, { Component } from "react"
import { graphql } from "gatsby"

import { Wrapper, List } from "../styles/layout"
import { Header } from '../components/header'
import {Articles, ArticlesList} from '../components/main-articles-list'

class Homepage extends Component {
    render() {
        const data = this.props.data

        console.log(data.allWordpressPost.nodes)

        return (
            <>
                <Header/>
                <h1>Tag: {data.wordpressTag.name}</h1>
                <Wrapper>
                     <Articles posts={data.allWordpressPost.nodes} />
                </Wrapper>
            </>
        )
    }
}

export default Homepage

export const pageQuery = graphql`
query($id: String!) {
  wordpressTag(id: { eq: $id }) {
    id
    name
    count
    children {
      ... on wordpress__POST {
        date
        excerpt
        path
        slug
        sticky
        tags {
          id
          path
          name
        }
        title
      }
    }
    path
  }
  allWordpressPost(filter: {tags: {elemMatch: {id: {eq: $id}}}}) {
    nodes {
          id
          date
          excerpt
          path
          slug
          sticky
          tags {
            id
            path
            name
          }
          title
    }
  }
}
`
