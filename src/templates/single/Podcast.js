import React from "react"
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import { Layout } from '../../components/layout'
import { ArticleTile } from '../../components/article-tile'
import { Title } from '../../components/partials/title'
import { LG } from '../../utils/constants'
import { ColumnStyled } from '../../components/partials/common.styles'
import { PODCASTS_TYPE } from '../../utils/constants'
import { ActionButton } from '../../components/partials/action-button'

export default ({ data }) => {
    const {
        podcastEpisode
    } = data
    return (
        <Layout>
            <Title size={LG}>{podcastEpisode.title}</Title>
            Здесь будет также дайджест, to be continued...
            <ColumnStyled
                css={css`
                    margin-bottom: 100px;
                `}
            >
                <ArticleTile css={css` margin-top: 90px;`} {...podcastEpisode} articleTileSize={LG} postType={PODCASTS_TYPE} hideCategory hideTitle />
            </ColumnStyled>
        </Layout>
    );
}

export const query = graphql`
    query podcast($id: String!) {
        podcastEpisode: simplecastPodcastEpisode(id: {eq: $id}) {
            ...SinglePodcast
        }
    }
`
