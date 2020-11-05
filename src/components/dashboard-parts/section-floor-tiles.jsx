import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { PageSection } from './page-section'
import { RowStyled, GridStyled } from '../partials/common.styles'
import { ArticleTile } from '../article-tile'
import { LG, MAX_LAPTOP_MEDIA, MIN_LAPTOP_MEDIA } from '../../utils/constants'
import { PageSectionCategory } from './page-category'


export const SectionFloorTiles = ({ tiles, articleTileSize, category }) => (
    <SectionFloorTilesStyled pd='80px 0 40px'>
        { category &&
            <PageSectionCategory size={LG} {...category} />
        }
        <SectionFloorGrid>
            {
                tiles.map((post, i) => (
                    <FloorArticleTileStyled
                        articleTileSize={articleTileSize}
                        key={post.id}
                        {...post}
                    />
                ))
            }
        </SectionFloorGrid>
    </SectionFloorTilesStyled>
)


const SectionFloorTilesStyled = styled(PageSection)`
    padding: 80px 0 120px;
    ${MAX_LAPTOP_MEDIA} {
        padding: 60px 0 60px;
    }
`

export const SectionFloorGrid = styled(GridStyled)`
    ${MIN_LAPTOP_MEDIA} {
        grid-template-columns: 540px auto 540px;
        row-gap: 80px;
    }
`

const FloorArticleTileStyled = styled(ArticleTile)`
    ${MAX_LAPTOP_MEDIA} {
        &:not(:last-child) {
            margin-bottom: 80px;
        }
    }
    ${MIN_LAPTOP_MEDIA} {
        &:nth-child(1), &:nth-child(2) {
          grid-row: 1 / 2;
        }
        
        &:nth-child(3), &:nth-child(4) {
          grid-row: 2 / 3;
        }
        
        &:nth-child(2n+1) {
          grid-column: 1 / 2;
        }
        &:nth-child(2n) {
          grid-column: 3 / 4;  
        }
    }
`
