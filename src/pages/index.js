import React from 'react'
import {graphql} from 'gatsby'

import { Layout } from '../components/layout'
import { LeadMainPost } from '../components/lead-main-post'
import { ArticleTile } from '../components/article-tile'
import { MD, LG, SM } from '../utils/constants'

import { ImportantArticleDashboardStyled } from '../assets/pages.styles'

export default ({data}) => {
    const {
        firstStickyPost,
        otherStickyPosts,
        last4Posts
    } = data
    return (
        <Layout>
            <LeadMainPost post={firstStickyPost.edges[0].node} />
            <ImportantArticleDashboardStyled>
                {
                    [...otherStickyPosts.edges, ...last4Posts.edges].slice(0, 4).map((post) => {
                        const postNode = post.node
                        return (
                            <ArticleTile size={MD} {...postNode} />
                        );
                    })
                }
            </ImportantArticleDashboardStyled>
        </Layout>
    );
}

export const query = graphql`
    query {
        firstStickyPost: allWpPost(
            sort: {fields: date, order: DESC},
            filter: {isSticky: {eq: true}},
            limit: 1
        ) {
            ...WpPost
        }

        otherStickyPosts: allWpPost(
            sort: {fields: date, order: DESC},
            filter: {isSticky: {eq: true}},
            skip: 1,
            limit: 4
        ) {
            ...WpPost
        }

        last4Posts: allWpPost(
            sort: {fields: date, order: DESC},
            filter: {isSticky: {ne: true}},
            limit: 4
        ) {
            ...WpPost
        }

    }
`

