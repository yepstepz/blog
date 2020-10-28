import React from 'react'

import { Title } from '../partials/title'
import { ShortText } from '../partials/short-text'
import { ActionButton } from '../partials/action-button'
import { findTypeOfPost } from '../../utils/helpers'
import { MD } from '../../utils/constants'

import { LargeArticleTileStyled } from './article-tile.styles'

export const LargeArticleTile = ({ title, excerpt, uri, categories, type  }) => (
    <LargeArticleTileStyled>
        <Title href={uri} size={MD}>{ title }</Title>
        <ShortText text={excerpt} />
        <ActionButton type={type || findTypeOfPost(categories)} />
    </LargeArticleTileStyled>
)
