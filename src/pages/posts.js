import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core';

import { Layout } from '../components/layout'
import { LeadMainPost } from '../components/lead-main-post'
import { getPostFromScheme } from '../utils/helpers'
import { ColumnStyled}  from '../components/partials/common.styles';
import { ArticleTile } from '../components/article-tile';
import { LG, MAIN_POST_TYPE } from '../utils/constants';
import { PageSection } from '../components/dashboard-parts/page-section'

export default ({ data }) => {
    const {
        mainPost,
        otherPosts
    } = data

    return (
        <Layout>
            <ArticleTile {...getPostFromScheme(mainPost)[0]} postType={MAIN_POST_TYPE} />
            <PageSection>
                <ColumnStyled
                    css={css`
                        margin-bottom: 100px;
                    `}
                >
                    {
                        getPostFromScheme(otherPosts).map((post) =>
                            <ArticleTile css={css` margin-top: 90px;`} {...post} articleTileSize={LG} hideCategory />
                        )
                    }
                </ColumnStyled>
            </PageSection>
        </Layout>
    )
}

export const query = graphql`
    query {
        mainPost: allWpPost(
            sort: {fields: stickySettings___stickyOrder},
            filter: {
                isSticky: {eq: true},
                categories: {
                    nodes: {
                        elemMatch: {
                            slug: {
                                ne: "podcasts"
                            }
                        }
                    }
                }
            },
            limit: 1
        ) {
            ...WpPost
        }
        
        otherPosts :allWpPost(
            sort: {fields: date, order: DESC},
            filter: {
                categories: {
                    nodes: {
                        elemMatch: {
                            slug: {
                                ne: "podcasts"
                            }
                        }
                    }
                }
            }
        ) {
            ...WpPost
        }
    }
`
