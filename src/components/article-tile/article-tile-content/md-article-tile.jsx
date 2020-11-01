import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'
import { css } from '@emotion/core'

import { Title } from '../../partials/title'
import { Category } from '../../partials/categories'
import { ShortText } from '../../partials/short-text'
import { ActionButton } from '../../partials/action-button'
import { TagCollection } from '../../partials/tags'
import { findTypeOfPost } from '../../../utils/helpers'
import { SM } from '../../../utils/constants'
import { RowStyled } from '../../partials/common.styles'

import { MediumArticleTileStyled } from '../article-tile.styles'

export const MediumArticleTile = ({
    title,
    excerpt,
    uri,
    handleClick,
    articleTileSize,
    postType,
    hideShortText = false,
    ...rest
}) => (
    <MediumArticleTileStyled {...rest}>
        <Title href={uri} size={SM} hideShortText={hideShortText}>{ title }</Title>
        { !hideShortText && <ShortText text={excerpt} /> }
        <ActionButton onClick={handleClick} postType={postType} articleTileSize={articleTileSize} href={uri} />
    </MediumArticleTileStyled>
)
