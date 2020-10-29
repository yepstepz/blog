import React from "react"
import { graphql, Link } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'
import { css } from '@emotion/core'

import { Layout } from '../../components/layout'
import { ArticleTile } from '../../components/article-tile'
import { Title } from '../../components/partials/title'
import { LG } from '../../utils/constants'
import { normalizePath } from '../../utils/get-url-path'

export default ({ data }) => {
    const {
        catPage,
        catPagePosts
    } = data
    const catInfo = catPage.edges[0].node
    return (
        <Layout>
            <Title size={LG}>{catInfo.name}</Title>
            <Flex
                flexDirection={'column'}
                css={css`
                    margin-top: 100px;
                `}
            >
                {
                    catPagePosts.edges.map((post) =>
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
    query cat($id: String!) {
        catPage: allWpCategory(filter: {id: {eq: $id}}) {
            edges {
                node {
                    id
                    name
                    uri
                }   
            }
        }
        catPagePosts: allWpPost(filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}) {
            ...WpPost
        }
    }
`
