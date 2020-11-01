import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core';

import { Layout } from '../components/layout'
import { ColumnStyled}  from '../components/partials/common.styles';
import { ArticleTile } from '../components/article-tile';
import { LG } from '../utils/constants';
import { PageSection } from '../components/dashboard-parts/page-section'
import { getPodcastFromScheme } from '../utils/helpers'
import { PODCASTS_TYPE, MAIN_PODCAST_TYPE } from '../utils/constants'

export default ({ data }) => {
    const {
        lastPodcastEpisode,
        allPodcastEpisode
    } = data
    return (
        <Layout>
            <ArticleTile {...getPodcastFromScheme(lastPodcastEpisode)[0]} postType={MAIN_PODCAST_TYPE} />
            <PageSection>
                <ColumnStyled>
                    {
                        getPodcastFromScheme(allPodcastEpisode).map((post) =>
                            <ArticleTile css={css` margin-bottom: 90px;`} {...post} articleTileSize={LG} hideCategory postType={PODCASTS_TYPE} />
                        )
                    }
                </ColumnStyled>
            </PageSection>
        </Layout>
    )
}

export const query = graphql`
    query {
        allPodcastEpisode: allSimplecastPodcastEpisode(
            filter: {status: {eq: "published"}},
            sort: { fields: daysSinceRelease, order: ASC },
            skip: 1
        ) {
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
