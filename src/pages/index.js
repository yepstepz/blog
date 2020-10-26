import React from 'react'
import {graphql } from 'gatsby'

import { WpPostNodesSelector } from '../__data__/selectors/posts'
import Layout from '../components/layout'

export default ({ data }) => {
    const allPosts = WpPostNodesSelector(data)
    return (
        <Layout>
            {allPosts.map(({ id, uri, title, excerpt }) => (
                <article key={id}>
                    <a href={uri}>
                        { title }
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                    <br/>
                </article>
            ))}
        </Layout>
    );
}

export const query = graphql`
    query {
        allWpPost {
            nodes {
              categories {
                nodes {
                  id
                  name
                  slug
                  uri
                }
              }
              date
              id
              title
              uri
              slug
              tags {
                nodes {
                  id
                  name
                  uri
                  slug
                }
              }
              template {
                templateFile
                templateName
              }
              excerpt
            }
        }
    }
`

