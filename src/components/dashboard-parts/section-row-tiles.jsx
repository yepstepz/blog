import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { PageSection } from './page-section'
import { RowStyled, GridStyled } from '../partials/common.styles'
import { ArticleTile } from '../article-tile'
import { LG, MAX_LAPTOP_MEDIA, MD, MIN_LAPTOP_MEDIA } from '../../utils/constants'
import { PageSectionCategory } from './page-category'
export const SectionRowTiles = ({ tiles, articleTileSize, category }) => (
    <SectionRowTilesStyled>
        <PageSectionCategory size={LG} {...category} />
        <SectionRowGridStyled>
            {
                tiles.map((post, i) => {
                    return (
                        <SectionRowTileStyled
                            key={post.id}
                            hideShortText
                            articleTileSize={MD}
                            {...post}
                        />
                    );
                })
            }
        </SectionRowGridStyled>
    </SectionRowTilesStyled>
)

const SectionRowTilesStyled = styled(PageSection)`
    padding: 80px 0 120px;
    ${MAX_LAPTOP_MEDIA} {
        padding: 60px 0 60px;
    }
`

const SectionRowGridStyled = styled(GridStyled)`
    ${MIN_LAPTOP_MEDIA} {
        grid-template-columns: 340px 340px 340px;
        column-gap: 60px;
    }
`

const SectionRowTileStyled = styled(ArticleTile)`
    ${MIN_LAPTOP_MEDIA} {
        justify-self: center;
    }
    ${MAX_LAPTOP_MEDIA} {
        margin-bottom: 80px;
    }
`
