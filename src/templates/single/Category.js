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
        catPage,
        catPagePosts
    } = data
    const catInfo = catPage.edges[0].node
    return (
        <Layout>
            <Title size={LG}>{catInfo.name}</Title>
            <ColumnStyled
                css={css`
                    margin-bottom: 100px;
                `}
            >
                {
                    catPagePosts.edges.map((post) =>
                        <ArticleTile css={css` margin-top: 90px;`} {...post.node} articleTileSize={LG} hideCategory />
                    )
                }
            </ColumnStyled>
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
