import React from "react"
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import { Layout } from '../../components/layout'
import { ArticleTile } from '../../components/article-tile'
import { Title } from '../../components/partials/title'
import { LG } from '../../utils/constants'
import { ColumnStyled } from '../../components/partials/common.styles'

export default ({ data }) => {
    const {
        tagPage,
        tagPagePosts
    } = data
    const tagInfo = tagPage.edges[0].node
    return (
        <Layout>
            <Title size={LG}>#{tagInfo.name}</Title>
            <ColumnStyled
                css={css`
                    margin-bottom: 100px;
                `}
            >
                {
                    tagPagePosts.edges.map((post) =>
                        <ArticleTile css={css` margin-top: 90px;`} {...post.node} articleTileSize={LG} />
                    )
                }
            </ColumnStyled>
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
