import React from 'react'

import { Title } from '../partials/title'
import { ActionButton } from '../partials/action-button'
import { findTypeOfPost } from '../../utils/helpers'

import { SmallArticleTileStyled } from './article-tile.styles'

export const SmallArticleTile = ({ title, uri, categories, type, ...rest  }) => (
    <SmallArticleTileStyled {...rest}>
        <Title href={uri}>{ title }</Title>
        <ActionButton type={type || findTypeOfPost(categories)} />
    </SmallArticleTileStyled>
)
