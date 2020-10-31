import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Layout } from '../components/layout'
import { LeadMainPost } from '../components/lead-main-post'
import { RowStyled, ColumnStyled } from '../components/partials/common.styles'
import { ArticleTile } from '../components/article-tile'
import { MD, LG, SM, XS } from '../utils/constants'
import { getPostFromScheme, getCategoryFromScheme } from '../utils/helpers'

import { PageSection } from '../components/dashboard-parts/page-section'
import { PageSectionCategory } from '../components/dashboard-parts/page-category'

export default ({data}) => {
    const {
        firstStickyPostScheme,
        otherStickyPostsScheme,
        last4PostsScheme,
        podcastsCatScheme,
        firstStickyCatNameScheme,
        firstStickyCatPostsScheme,
        secondStickyCatNameScheme,
        secondStickyCatPostsScheme,
        thirdStickyCatNameScheme,
        thirdStickyCatPostsScheme,
    } = data
    console.log(getPostFromScheme(podcastsCatScheme)[0].categories.nodes[0])
    return (
        <Layout>
            <LeadMainPost post={getPostFromScheme(firstStickyPostScheme)[0]} />
            <PageSection pd="80px 0 40px">
                <RowStyled ai="flex-start" jc="flex-start">
                    {
                        [...getPostFromScheme(otherStickyPostsScheme), ...getPostFromScheme(last4PostsScheme)].slice(0, 4).map((post, i) => (
                                <ArticleTile
                                    css={css`
                                        margin-bottom: 80px;
                                        margin-right: ${i % 2 ? 0 : 100}px;
                                    `}
                                    width="540px"
                                    size={LG}
                                    {...post}
                                />
                            ))
                    }
                </RowStyled>
            </PageSection>
            <PageSection>
                <RowStyled ai="flex-start" js="flex-start">
                    <ColumnStyled ai="flex-start">
                        <PageSectionCategory size={LG} {...getCategoryFromScheme(firstStickyCatNameScheme)} />
                        {
                            getPostFromScheme(firstStickyCatPostsScheme).map((post, i) => (
                                    <ArticleTile
                                        size={MD}
                                        css={css`
                                            margin-top: ${i !== 0 ? '80px' : 0};
                                        `}
                                        width="720px"
                                        {...post}
                                    />
                                ))
                        }
                    </ColumnStyled>
                    <ColumnStyled ai="flex-start" flex="0 0 300px">
                        <PageSectionCategory size={LG} {...getPostFromScheme(podcastsCatScheme)[0].categories.nodes[0]} />
                        {
                            getPostFromScheme(podcastsCatScheme).map((post) => {
                                return (
                                    <ArticleTile
                                        size={XS}
                                        css={css`
                                            margin-bottom: 45px;
                                        `}
                                        width="300px"
                                        {...post}
                                    />
                                );
                            })
                        }
                    </ColumnStyled>
                </RowStyled>
            </PageSection>
            <PageSection>
                <PageSectionCategory size={LG} {...getCategoryFromScheme(secondStickyCatNameScheme)} />
                <RowStyled ai="flex-start" jc="flex-start">
                    {
                        getPostFromScheme(secondStickyCatPostsScheme).map((post, i) => {
                            return (
                                <ArticleTile
                                    css={css`
                                        margin-bottom: 90px;
                                        margin-right: ${i % 2 ? 0 : 100}px;
                                    `}
                                    width="540px"
                                    size={MD}
                                    {...post}
                                />
                            );
                        })
                    }
                </RowStyled>
            </PageSection>
            <PageSection pd="80px 0 40px">
                <PageSectionCategory size={LG} {...getCategoryFromScheme(thirdStickyCatNameScheme)} />
                <RowStyled ai="flex-start" jc="flex-start">
                    {
                        getPostFromScheme(thirdStickyCatPostsScheme).map((post, i) => {
                            return (
                                <ArticleTile
                                    css={css`
                                        margin-bottom: 80px;
                                        margin-left: ${i % 3 ? 60 : 0}px;
                                    `}
                                    showShortText={false}
                                    width="340px"
                                    size={MD}
                                    {...post}
                                />
                            );
                        })
                    }
                </RowStyled>
            </PageSection>
        </Layout>
    );
}

export const query = graphql`
    query {
        firstStickyPostScheme: allWpPost(
            sort: {fields: date, order: DESC}, 
            filter: {
                isSticky: {eq: true}, 
                stickySettings: {stickyOrder: {eq: 1}},
            },
            limit: 1
        ) {
            ...WpPost
        }

        otherStickyPostsScheme: allWpPost(
            filter: {
                isSticky: {eq: true}
            }, 
            limit: 4, 
            sort: {
                fields: stickySettings___stickyOrder, 
                order: ASC
            }, 
            skip: 1
        ) {
            ...WpPost
        }

        last4PostsScheme: allWpPost(
            sort: {fields: date, order: DESC},
            filter: {isSticky: {ne: true}},
            limit: 4
        ) {
            ...WpPost
        }
        
        podcastsCatScheme: allWpPost(
            filter: {
                categories: {
                    nodes: {
                        elemMatch: {
                            slug: {eq: "podcasts"}
                        }
                    }
                }
            }, 
            limit: 5,
            sort: { fields: date, order: DESC }
        ) {
            ...WpPost
        }

        firstStickyCatNameScheme: allWpCategory(
            filter: {
                mainPageSticky: {
                    mainPageCategory: { eq: true }, 
                    mainPageCategoryOrder: { eq: 1 } 
                }
            }
        ) {
            ...WpCategory
        }
        
        firstStickyCatPostsScheme: allWpPost(
            filter: {
                categories: {
                    nodes: {
                        elemMatch: {
                            mainPageSticky: {
                                mainPageCategory: { eq: true }, 
                                mainPageCategoryOrder: { eq: 1 }
                            }}
                    }
                }
            },
            limit: 3
        ) {
            ...WpPost
        }

        secondStickyCatNameScheme: allWpCategory(
            filter: {
                mainPageSticky: {
                    mainPageCategory: { eq: true },
                    mainPageCategoryOrder: { eq: 2 }
                }
            },
        ) {
            ...WpCategory
        }

        secondStickyCatPostsScheme: allWpPost(
            filter: {
                categories: {
                    nodes: {
                        elemMatch: {
                            mainPageSticky: {
                                mainPageCategory: { eq: true },
                                mainPageCategoryOrder: { eq: 2 }
                            }}
                    }
                }
            },
            limit: 4
        ) {
            ...WpPost
        }

        thirdStickyCatNameScheme: allWpCategory(
            filter: {
                mainPageSticky: {
                    mainPageCategory: { eq: true },
                    mainPageCategoryOrder: { eq: 3 }
                }
            }
        ) {
            ...WpCategory
        }

        thirdStickyCatPostsScheme: allWpPost(
            filter: {
                categories: {
                    nodes: {
                        elemMatch: {
                            mainPageSticky: {
                                mainPageCategory: { eq: true },
                                mainPageCategoryOrder: { eq: 3 }
                            }}
                    }
                }
            },
            limit: 3
        ) {
            ...WpPost
        }
        
        

    }
`

