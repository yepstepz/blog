import React from "react"
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Layout } from '../../components/layout'
import { ArticleTile } from '../../components/article-tile'
import { LAYOUT_POST_PAGE, LG } from '../../utils/constants'
import { PODCASTS_TYPE } from '../../utils/constants'
import { divider } from '../../components/partials/common.styles'

export default ({ data }) => {
    const {
        podcastEpisode
    } = data
    return (
        <Layout layoutType={LAYOUT_POST_PAGE}>
            <h1>{ podcastEpisode.title }</h1>
                <ArticleTile
                    {...podcastEpisode}
                    articleTileSize={LG}
                    postType={PODCASTS_TYPE}
                    hideCategory
                    hideTitle
                />
                <div
                    css={(theme) => css`
                        &:not(:last-child) {
                            margin: 40px 0;
                            ${divider(theme)};
                        }
                    `}
                />
                <div className="content" dangerouslySetInnerHTML={{ __html: podcastEpisode.longDescription}} />
        </Layout>
    );
}

export const query = graphql`
    query podcast($id: String!) {
        podcastEpisode: simplecastPodcastEpisodePage(id: {eq: $id}) {
            ...SinglePodcast
        }
    }
`
