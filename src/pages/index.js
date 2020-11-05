import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Layout } from '../components/layout'
import { RowStyled, ColumnStyled } from '../components/partials/common.styles'
import { ArticleTile } from '../components/article-tile'
import { MD, LG, XS, PODCASTS_TYPE, MAIN_PODCAST_TYPE, MAIN_POST_TYPE, MAX_LAPTOP_MEDIA } from '../utils/constants'
import { getPostFromScheme, getCategoryFromScheme, getPodcastFromScheme } from '../utils/helpers'
import { PageSection } from '../components/dashboard-parts/page-section'
import { PageSectionCategory } from '../components/dashboard-parts/page-category'
import { SectionFloorTiles } from '../components/dashboard-parts/section-floor-tiles'
import { SectionRowTiles } from '../components/dashboard-parts/section-row-tiles'
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
            <SectionFloorTiles
                tiles={[...getPostFromScheme(otherStickyPostsScheme), ...getPostFromScheme(last4PostsScheme)].slice(0, 4)}
                articleTileSize={LG}
            />
            <PageSection>
                <RowStyled ai="flex-start" js="flex-start">
                    <ColumnStyled
                        ai="flex-start"
                        css={css`
                            ${ MAX_LAPTOP_MEDIA } {
                              margin-bottom: 60px;
                            }
                        `}
                    >
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
                            ${ MAX_LAPTOP_MEDIA } {
                              margin-right: 0;
                            }
                        `}
                    >
                        <PageSectionCategory
                            size={LG}
                            name="Подкасты"
                            uri={normalizePath('/podcasts')}
                        />
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
            <SectionFloorTiles
                tiles={getPostFromScheme(secondStickyCatPostsScheme)}
                articleTileSize={MD}
                category={getCategoryFromScheme(secondStickyCatNameScheme)}
            />
            <SectionRowTiles
                tiles={getPostFromScheme(thirdStickyCatPostsScheme)}
                category={getCategoryFromScheme(thirdStickyCatNameScheme)}
                articleTileSize={MD}
            />
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

