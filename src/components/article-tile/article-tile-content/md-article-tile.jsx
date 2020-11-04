import React from 'react'

import { Title } from '../../partials/title'
import { ShortText } from '../../partials/short-text'
import { ActionButton } from '../../partials/action-button'
import { SM } from '../../../utils/constants'

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
