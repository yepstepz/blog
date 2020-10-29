import React from "react"
import { graphql, Link } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'
import { css } from '@emotion/core'

import { Layout } from '../../components/layout'
import { ArticleTile } from '../../components/article-tile'
import { Title } from '../../components/partials/title'
import { LG } from '../../utils/constants'

export default ({ data }) => {
    const {
        tagPage,
        tagPagePosts
    } = data
    const tagInfo = tagPage.edges[0].node
    return (
        <Layout>
            <Title size={LG}>#{tagInfo.name}</Title>
            <Flex
                flexDirection={'column'}
                css={css`
                    margin-top: 100px;
                `}
            >
                {
                    tagPagePosts.edges.map((post) =>
                        <Box mb={90}>
                            <ArticleTile {...post.node} size={LG} />
                        </Box>
                    )
                }
            </Flex>
        </Layout>
    );
}

export const query = graphql`
    query tag($id: String!) {
        tagPage: allWpTag(filter: {id: {eq: $id}}) {
            edges {
                node {
                    id
                    name
                    uri
                }
            }
        }
        tagPagePosts: allWpPost(filter: {tags: {nodes: {elemMatch: {id: {eq: $id}}}}}) {
            ...WpPost
        }
    }
`
