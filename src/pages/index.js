import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Layout } from '../components/layout'
import { RowStyled, ColumnStyled } from '../components/partials/common.styles'
import { ArticleTile } from '../components/article-tile'
import { MD, LG, XS, PODCASTS_TYPE, MAIN_PODCAST_TYPE, MAIN_POST_TYPE } from '../utils/constants'
import { getPostFromScheme, getCategoryFromScheme, getPodcastFromScheme } from '../utils/helpers'
import { PageSection } from '../components/dashboard-parts/page-section'
import { PageSectionCategory } from '../components/dashboard-parts/page-category'
import { normalizePath } from '../utils/get-url-path'

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
        allPodcastEpisode,
        lastPodcastEpisode
    } = data
    const leadPost = lastPodcastEpisode?.edges?.length ? getPodcastFromScheme(lastPodcastEpisode)[0]: getPostFromScheme(firstStickyPostScheme)[0]
    return (
        <Layout>
            <ArticleTile
                postType={lastPodcastEpisode?.edges?.length ? MAIN_PODCAST_TYPE: MAIN_POST_TYPE}
                {...leadPost}
            />
            <PageSection pd="80px 0 40px">
                <RowStyled ai="flex-start" jc="flex-start">
                    {
                        [...getPostFromScheme(otherStickyPostsScheme), ...getPostFromScheme(last4PostsScheme)].slice(0, 4).map((post, i) => (
                                <ArticleTile
                                    key={post.id}
                                    css={css`
                                        margin-bottom: 80px;
                                        margin-right: ${i % 2 ? 0 : 100}px;
                                    `}
                                    tileWidth="540px"
                                    articleTileSize={LG}
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
                                        key={post.id}
                                        articleTileSize={MD}
                                        css={css`
                                            margin-top: ${i !== 0 ? '80px' : 0};
                                        `}
                                        tileWidth="720px"
                                        {...post}
                                    />
                                ))
                        }
                    </ColumnStyled>
                    <ColumnStyled
                        ai="flex-start"
                        flex="0 0 300px"
                        css={css`
                            margin-right: 60px;
                        `}
                    >
                        <PageSectionCategory size={LG} name="Подкасты" uri={normalizePath('/podcasts')} />
                        {
                            getPodcastFromScheme(allPodcastEpisode).map((post) => {
                                return (
                                    <ArticleTile
                                        key={post.id}
                                        articleTileSize={XS}
                                        postType={PODCASTS_TYPE}
                                        css={css`
                                            margin-bottom: 45px;
                                        `}
                                        tileWidth="300px"
                                        {...post}
                                    />
                                );
                            })
                        }
                    </ColumnStyled>
                </RowStyled>
            </PageSection>
            <PageSection pd="80px 0 40px">
                <PageSectionCategory size={LG} {...getCategoryFromScheme(secondStickyCatNameScheme)} />
                <RowStyled ai="flex-start" jc="flex-start">
                    {
                        getPostFromScheme(secondStickyCatPostsScheme).map((post, i) => {
                            return (
                                <ArticleTile
                                    key={post.id}
                                    css={css`
                                        margin-bottom: 90px;
                                        margin-right: ${i % 2 ? 0 : 100}px;
                                    `}
                                    tileWidth="540px"
                                    articleTileSize={MD}
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
                                    key={post.id}
                                    css={css`
                                        margin-bottom: 80px;
                                        margin-left: ${i % 3 ? 60 : 0}px;
                                    `}
                                    hideShortText
                                    tileWidth="340px"
                                    articleTileSize={MD}
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

        allPodcastEpisode: allSimplecastPodcastEpisode(filter: {status: {eq: "published"}}) {
            ...Podcast
        }
        
        lastPodcastEpisode:   allSimplecastPodcastEpisode(
            filter: { status: {eq: "published"} }, 
            sort: { fields: daysSinceRelease, order: ASC }, 
            limit: 1
        ) {
            ...Podcast
        }
    }
`

